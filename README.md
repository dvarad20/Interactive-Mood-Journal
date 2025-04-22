# Interactive Mood Journal with Weather Integration

A responsive web application that allows users to log their daily mood, write short notes, and view local weather conditions. The app visualizes mood entries over time with a calendar view and integrates real-time weather data using the OpenWeatherMap API.

## Features

- Mood selection with emoji-based icons
- Real-time weather display based on user's location
- Filter past entries by mood

## Tech Stack

- **Frontend**: React.js
- **API Integration**: OpenWeatherMap API
- **State Management**: React Hooks and Context
- **Storage**: LocalStorage

## Screenshots

> ![Screenshot (109)](https://github.com/user-attachments/assets/bd28f2ab-c632-4fca-8cca-e23a4c92fdc4)


## Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mood-journal-weather.git
   cd mood-journal-weather


2. Install Dependencies

npm install

3. Enter API Key

REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key

You can get your API key for free from OpenWeatherMap.

4. Run the Application

npm start


How It Works

1. On app load, it fetches the current date and user's location.


2. Using coordinates, it fetches weather data from OpenWeatherMap.


3. Users can:

Select a mood (happy, sad, angry, relaxed, neutral)

Enter a short journal note



4. Entries are saved to localStorage with date, mood, note, and weather.

