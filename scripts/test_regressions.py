"""Regression checks for index freshness and webhook authentication.
Run: python scripts/test_regressions.py
"""
import hashlib
import hmac
import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'backend'))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'garden_api.settings')
import django
django.setup()
from django.test import override_settings, Client
from notes.index import GardenIndex

class RegressionTests(unittest.TestCase):
    def test_freshness_and_stable_timestamp(self):
        with tempfile.TemporaryDirectory(dir=Path(__file__).resolve().parents[1] / "work") as directory:
            root = Path(directory)
            vault = root / 'vault'
            vault.mkdir()
            note = vault / 'First.md'
            note.write_text('First body', encoding='utf-8')
            with override_settings(GARDEN_VAULT_PATH=str(vault), GARDEN_INDEX_PATH=str(root / 'index.json')):
                index = GardenIndex()
                index._stale_interval = 0
                index.rebuild()
                built = index.status()['lastBuild']
                index.load_or_build()
                self.assertEqual(built, index.status()['lastBuild'])
                self.assertFalse(index._cache_is_stale())
                note.unlink()
                self.assertTrue(index._cache_is_stale())
                index.load_or_build()
                self.assertEqual(index.status()['noteCount'], 0)
                note.write_text('New body', encoding='utf-8')
                self.assertTrue(index._cache_is_stale())
                index.load_or_build()
                self.assertEqual(index.status()['noteCount'], 1)

    @override_settings(DEBUG=False, GARDEN_WEBHOOK_SECRET='test-secret')
    def test_github_signature(self):
        body = b'{"ref":"refs/heads/main"}'
        signature = 'sha256=' + hmac.new(b'test-secret', body, hashlib.sha256).hexdigest()
        with patch('notes.views.rebuild_index') as rebuild:
            rebuild.return_value.status.return_value = {'noteCount': 1}
            client = Client()
            self.assertEqual(client.post('/api/sync/webhook/', body, content_type='application/json').status_code, 403)
            self.assertFalse(rebuild.called)
            self.assertEqual(client.post('/api/sync/webhook/', body, content_type='application/json', HTTP_X_HUB_SIGNATURE_256=signature).status_code, 200)

    @override_settings(DEBUG=False, GARDEN_WEBHOOK_SECRET='')
    def test_unconfigured_production_webhook(self):
        self.assertEqual(Client().post('/api/sync/webhook/').status_code, 503)

if __name__ == '__main__':
    unittest.main()

