// src/components/BubbleGame.jsx
import React, { useState, useEffect } from "react";

export default function BubbleGame() {
  const [bubbles, setBubbles] = useState([]);
  const [score, setScore] = useState(0);

  // Generate bubbles every 1.5s
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const size = Math.floor(Math.random() * 40) + 30; // 30–70px
      const left = Math.random() * 90; // random horizontal %
      const duration = Math.random() * 3 + 4; // 4–7s float

      setBubbles((prev) => [
        ...prev,
        { id, size, left, duration },
      ]);

      // remove after duration
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== id));
      }, duration * 1000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const popBubble = (id) => {
    setBubbles((prev) => prev.filter((b) => b.id !== id));
    setScore((s) => s + 1);
  };

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-b from-green-100 to-green-200 rounded-2xl overflow-hidden shadow-lg">
      <h2 className="absolute top-3 left-1/2 -translate-x-1/2 text-lg font-semibold text-gray-800 z-10">
        Bubble Pop 🎈 – Score: {score}
      </h2>

      {bubbles.map((b) => (
        <div
          key={b.id}
          onClick={() => popBubble(b.id)}
          className="absolute rounded-full bg-green-400 bg-opacity-70 cursor-pointer transition-transform hover:scale-110"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: "-80px",
            animation: `floatUp ${b.duration}s linear forwards`,
          }}
        />
      ))}

      {/* Bubble floating animation */}
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-500px); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
