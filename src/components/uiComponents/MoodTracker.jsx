import React, { useState } from "react";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [message, setMessage] = useState("");
  const [showBoard, setShowBoard] = useState(true);

  const moodData = {
    "😊 Great": {
      msg: "Awesome! Keep spreading those positive vibes ✨",
      color: "bg-green-200 hover:bg-green-300 transition",
    },
    "🙂 Good": {
      msg: "Glad to hear that. Keep going strong 💪",
      color: "bg-blue-200 hover:bg-blue-300 transition",
    },
    "😐 Okay": {
      msg: "It's okay to feel neutral. Small joys can brighten the day 🌸",
      color: "bg-yellow-200 hover:bg-yellow-300 transition",
    },
    "😔 Low": {
      msg: "Hang in there. Better days are coming 💖",
      color: "bg-orange-200 hover:bg-orange-300 transition",
    },
    "😵 Difficult": {
      msg: "Take a deep breath. You're stronger than you think 🌿",
      color: "bg-red-200 hover:bg-red-300 transition",
    },
  };

  const handleRecordMood = () => {
    if (!selectedMood) {
      setMessage("Please select a mood before recording 🙂");
      return;
    }
    setMessage(moodData[selectedMood].msg);
    setShowBoard(false); // hide board
  };

  const handleBack = () => {
    setSelectedMood(null);
    setMessage("");
    setShowBoard(true); // show board again
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center min-h-[350px] " >
      <div className="bg-cyan-100 flex justify-center align-middle rounded-xl p-4 mb-5 w-full">
        <h2 className="text-xl font-semibold z text-gray-800 text-center">
        How are you feeling today?
      </h2>
        </div>

      {/* Mood Board */}
      {showBoard && (
        <div className="w-full animate-fade-in">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {Object.entries(moodData).map(([mood, data], i) => (
              <button
                key={i}
                onClick={() => setSelectedMood(mood)}
                className={`flex flex-col items-center justify-center px-5 py-3 rounded-xl shadow-md text-gray-700 text-lg transition cursor-pointer ${
                  selectedMood === mood
                    ? `${data.color} scale-105 ring-2 ring-gray-400`
                    : `${data.color}`
                }`}
              >
                {mood}
              </button>
            ))}
          </div>

          <button
            onClick={handleRecordMood}
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 font-medium shadow-md transition cursor-pointer"
          >
            Record Mood
          </button>
        </div>
      )}

      {/* Mood Message */}
      {!showBoard && message && (
        <div className="mt-6 bg-white border-l-4 border-green-500 p-6 rounded-xl shadow-lg animate-fade-in text-center">
          <p className="text-gray-700 font-medium text-lg mb-4">{message}</p>
          <button
            onClick={handleBack}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition cursor-pointer"
          >
            ← Back to Mood Tracker
          </button>
        </div>
      )}
    </div>
  );
};

export default MoodTracker;
