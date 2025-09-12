import React, { useState } from "react";
import MoodTracker from "./uiComponents/MoodTracker";

const Dashboard = () => {
  const [messages, setMessages] = useState([
    { text: "Hey, I’m feeling a bit stressed with exams 😥", sender: "user", time: "09:16 pm" },
    { text: "You’re not alone! Take short breaks and breathe 🌿", sender: "bot", time: "09:18 pm" },
  ]);
  const [input, setInput] = useState("");

  // Dummy bot replies
  const botReplies = [
    "That sounds tough, but you’re doing great 💪",
    "Remember to take a 5-minute walk 🚶‍♂️",
    "Stay hydrated and rest well! 🥤",
    "Talking about it helps. You’re not alone ❤️",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      text: input,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]);
    setInput("");

    // Dummy reply after 1 sec
    setTimeout(() => {
      const reply = {
        text: botReplies[Math.floor(Math.random() * botReplies.length)],
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 border rounded-4xl">
      {/* Mood Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MoodTracker/>

        {/* Chatbox */}
        <div className="max-w-sm mx-auto bg-white rounded-2xl lg:shadow:xl md:shadow-2xl flex flex-col h-[400px] ">
          {/* Header */}
          <div className="px-4 py-3 border-b bg-green-600 rounded-t-2xl">
            <h2 className="text-md font-semibold text-white">Anonymous Peer Support 💬</h2>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-xl shadow-sm text-sm ${
                  msg.sender === "user"
                    ? "bg-green-100 self-start"
                    : "bg-green-200 self-end ml-auto"
                }`}
              >
                <p className="text-gray-800">{msg.text}</p>
                <p className="text-[10px] text-gray-500 mt-1 text-right">{msg.time}</p>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-grow px-3 py-2 text-sm rounded-bl-2xl outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-4 py-2 rounded-br-2xl hover:bg-green-700 transition"
            >
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* Safe Space Section */}
      <div className="bg-white rounded-2xl shadow-2xl p-6 mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Welcome to Your Safe Space</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
          <div className="border-1 rounded-3xl p-2 hover:bg-green-50 hover:scale-105 transition">
            🎓 <p className="font-semibold">For Students</p>
            <p className="text-sm">Designed specifically for higher education students</p>
          </div>
          <div className="border-1 rounded-3xl p-2 hover:bg-green-50 hover:scale-105 transition">
            🤝 <p className="font-semibold">Peer Support</p>
            <p className="text-sm">Connect with others facing similar challenges</p>
          </div>
          <div className="border-1 rounded-3xl p-2 hover:bg-green-50 hover:scale-105 transition">
            🔒 <p className="font-semibold">Fully Anonymous</p>
            <p className="text-sm">Your privacy and safety are our top priority</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
