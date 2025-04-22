import { useEffect, useState } from "react";
import JournalForm from "./components/JournalForm";
import WeatherDisplay from "./components/WeatherDisplay";
import CalendarView from "./components/CalendarView";

function App() {
  const [entries, setEntries] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(data);
  }, []);

  const addEntry = (entry) => {
    const updated = [...entries, { ...entry, weather: weatherData }];
    setEntries(updated);
    localStorage.setItem("entries", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">🌤️ My Mood Journal</h1>
        <WeatherDisplay />
        <MoodForm onSave={handleSaveEntry} />
        <CalendarView entries={entries} />
      </div>
    </div>
  );
  
}

export default App;
