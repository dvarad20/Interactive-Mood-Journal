export default function CalendarView({ entries }) {
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Past Entries</h3>
        <div className="grid grid-cols-1 gap-2">
          {entries.map((entry, idx) => (
            <div key={idx} className="p-2 bg-gray-100 rounded">
              <p>{entry.date}</p>
              <p>Mood: {entry.mood}</p>
              <p>Weather: {entry.weather?.toString() || "Not available"}</p>
              <p>Note: {entry.note}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  