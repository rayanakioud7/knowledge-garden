# RateYourMusic Shuffler

A simple web application that helps you decide what to listen to by picking a random album from your RateYourMusic (RYM) collection. 

Because RateYourMusic does not provide a public API and actively blocks automated scrapers, this application works safely by parsing text directly copied from your personal collection page.

## Features

* Parses raw text copied from an RYM print-friendly collection page.
* Selects a random album from your rated list.
* Allows filtering by minimum rating (e.g., only shuffle albums you rated 4.0 or higher).
* Provides direct search links to find the selected album on YouTube and Spotify.

## How to Use the App

1. Go to your RateYourMusic print-friendly collection page. The URL format is: `https://rateyourmusic.com/collection_p/YOUR_USERNAME/`
2. Press `Ctrl+A` (or `Cmd+A` on Mac) to select all the text on that page.
3. Press `Ctrl+C` to copy the text.
4. Open the RYM Shuffler application.
5. Paste the text into the provided text box and click "Shuffle".

## How to Run Locally on Your PC

If you want to run the code on your own computer, follow these steps:

### Prerequisites

* Python 3.x installed on your computer.

### Setup

1. Download or clone this project folder to your computer.
2. Open a terminal or command prompt in the project folder.
3. Install the required Python library by running:
```bash
pip install flask
```
Start the application by running:
```bash
python app.py
```
Open your web browser and navigate to http://localhost:5000.
File Structure
app.py: The main Flask web server application.
rym_parser.py: The logic for cleaning and parsing the copied text from RYM.
templates/index.html: The frontend user interface for pasting text.
templates/result.html: The frontend user interface displaying the chosen album.

