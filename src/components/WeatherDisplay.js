import React, { useEffect, useState } from "react";

const WeatherDisplay = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiKey = "d764ff0e64f3da93c2374bff2c44a6b1"; // Replace with your API key
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          if (response.ok) {
            setWeather(data);
          } else {
            setError(data.message || "Failed to fetch weather data.");
          }
        } catch (err) {
          setError("Error fetching weather data.");
        }
      },
      () => {
        setError("Location access denied.");
      }
    );
  }, []);

  return (
    <div className="max-w-md mx-auto mt-6 bg-white shadow-lg rounded-2xl p-6 border border-gray-100 dark:bg-gray-800 dark:text-white transition-all duration-300">
      <h2 className="text-xl font-bold mb-2">🌦 Current Weather</h2>
      {error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : weather ? (
        <div className="flex items-center gap-4">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="w-16 h-16"
          />
          <div>
            <p className="text-lg font-semibold">{weather.weather[0].main}</p>
            <p className="text-sm">🌡 Temp: {weather.main.temp}°C</p>
            <p className="text-sm">📍 {weather.name}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
