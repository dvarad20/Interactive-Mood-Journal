export const getWeatherIcon = (weather) => {
    const map = {
      Clear: "☀️",
      Clouds: "☁️",
      Rain: "🌧️",
      Snow: "❄️",
      Thunderstorm: "⛈️",
    };
    return map[weather] || "🌡️";
  };
  