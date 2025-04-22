import { useState } from "react";
import MoodSelector from "./MoodSelector";

export default function JournalForm({ addEntry }) {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMood || !note) return alert("Please fill all fields.");
    addEntry({ mood: selectedMood, note, date: new Date().toDateString() });
    setNote("");
    setSelectedMood("");
    alert("Mood saved!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-xl shadow mt-4">
      <h2 className="text-xl font-bold">How are you feeling today?</h2>
      <MoodSelector selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
      <textarea
        placeholder="Write a short note..."
        className="w-full p-2 border mt-4"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Save Mood
      </button>
    </form>
  );
}
