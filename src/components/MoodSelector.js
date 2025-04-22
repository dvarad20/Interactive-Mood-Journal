const moods = [
    { label: "Happy", icon: "😄", color: "bg-yellow-300" },
    { label: "Sad", icon: "😢", color: "bg-blue-300" },
    { label: "Angry", icon: "😡", color: "bg-red-300" },
    { label: "Excited", icon: "😆", color: "bg-pink-300" },
    { label: "Calm", icon: "😌", color: "bg-green-300" },
  ];
  
  export default function MoodSelector({ selectedMood, setSelectedMood }) {
    return (
      <div className="flex justify-center gap-4 mt-4">
        {moods.map((mood) => (
          <button
            key={mood.label}
            className={`text-4xl p-2 rounded-full hover:scale-110 transition ${selectedMood === mood.label ? mood.color : ""}`}
            onClick={() => setSelectedMood(mood.label)}
          >
            {mood.icon}
          </button>
        ))}
      </div>
    );
  }
  