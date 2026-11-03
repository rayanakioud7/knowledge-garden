"""Portfolio coverage and offline metadata regression checks."""
import os
import sys
import json
import unittest
from pathlib import Path
from unittest.mock import patch
sys.path.insert(0,str(Path(__file__).resolve().parents[1] / 'backend'))
os.environ.setdefault('DJANGO_SETTINGS_MODULE','garden_api.settings')
import django
django.setup()
from rest_framework.test import APIRequestFactory
from portfolio import views

class PortfolioTests(unittest.TestCase):
    def test_all_repositories_are_represented_once(self):
        repos = {r['name'].lower(): r for r in views._snapshot['repositories']}
        with patch.object(views, '_fetch_repos', return_value=repos):
            response = views.projects(APIRequestFactory().get('/api/portfolio/projects/'))
        cards = response.data['featured'] + response.data['other']
        self.assertEqual(len(cards),11)
        self.assertEqual(len({c['repo'] for c in cards}),11)
        self.assertEqual(len(response.data['featured']),3)
        self.assertTrue(all(c['github']['url'].startswith('https://github.com/rayanakioud7/') for c in cards))
        self.assertEqual(len(response.data['independent']),2)

    def test_snapshot_survives_network_failure(self):
        repos = {r['name'].lower(): r for r in views._snapshot['repositories']}
        with patch.object(views, '_repo_cache', repos), patch.object(views, '_repo_cache_ts', 0), patch.object(views.requests,'get',side_effect=views.requests.RequestException):
            self.assertEqual(len(views._fetch_repos()),11)
            # Repeated requests do not keep retrying a failed upstream.
            self.assertEqual(len(views._fetch_repos()),11)
            self.assertEqual(views.requests.get.call_count,1)

if __name__=='__main__': unittest.main()
