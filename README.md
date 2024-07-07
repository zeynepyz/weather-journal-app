# Weather Journal

## Project Description
This project is a simple weather journal app that allows users to retrieve weather information based on their ZIP code, record their feelings, and dynamically update the UI with the retrieved data. The app uses the OpenWeatherMap API to fetch weather data and an Express server to handle POST and GET requests.

## Features
- Retrieve weather data based on user-entered ZIP code.
- Allow users to record their feelings.
- Store weather data and user input on the server.
- Dynamically update the UI with the retrieved data.

## Prerequisites
Node.js installed on your local machine.

## Getting Started
1. Clone the repository to your local machine.
2. Install dependencies: npm install
3. Sign up for an OpenWeatherMap API key
4. Start the server: node server.js
4. Open the 'index.html' file in the web browser.

## Usage
1. Enter a ZIP code in the input field labeled "Enter ZIP code".
2. Enter your feelings in the input field labeled "How do you feel today?".
3. Click the "Generate" button to fetch weather data and update the UI with the retrieved data.

## Project Structure
- 'server.js': Sets up an Express server with routes to handle GET and POST requests.
- 'app.js': Contains the logic to fetch weather data from the OpenWeatherMap API, send data to the server, and update the UI.
- 'index.html': The main HTML file containing the structure of the app.
- 'styles.css': The CSS file for styling the app.
