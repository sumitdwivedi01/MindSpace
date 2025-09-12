import React from "react";

const resources = [
  {
    category: "Academic",
    title: "Study Stress Management",
    description:
      "Learn powerful strategies to manage academic pressure, improve focus, and maintain mental wellness during exam seasons. Includes scientifically-backed tips for stress resilience.",
    link: "https://www.mindtools.com/asbb1r1/stress-management",
    icon: "📚",
    color: "from-blue-50 to-blue-100",
  },
  {
    category: "Mindfulness",
    title: "Mindfulness for Students",
    description:
      "Simple yet effective mindfulness practices designed for students to reduce anxiety, enhance concentration, and create balance between study sessions.",
    link: "https://www.headspace.com/mindfulness",
    icon: "🧘",
    color: "from-green-50 to-green-100",
  },
  {
    category: "Wellness",
    title: "Sleep & Mental Health",
    description:
      "Discover how quality sleep directly impacts mental clarity, memory, and emotional balance. Learn evidence-based sleep hygiene practices for peak performance.",
    link: "https://www.sleepfoundation.org/",
    icon: "😴",
    color: "from-purple-50 to-purple-100",
  },
  {
    category: "Social",
    title: "Building Social Connections",
    description:
      "Combat loneliness and build meaningful relationships with strategies for deep communication, empathy, and creating a strong support system.",
    link: "https://www.psychologytoday.com/intl/basics/relationships",
    icon: "🤝",
    color: "from-yellow-50 to-yellow-100",
  },
  {
    category: "Mental Health",
    title: "Anxiety Management",
    description:
      "Access practical tools to manage test anxiety and academic stress. Learn relaxation techniques, breathing methods, and reframing exercises proven by psychology research.",
    link: "https://www.verywellmind.com/how-to-manage-anxiety-5087918",
    icon: "🌈",
    color: "from-pink-50 to-pink-100",
  },
  {
    category: "Planning",
    title: "Goal Setting for Wellness",
    description:
      "Master the art of setting academic and personal goals that are realistic, motivating, and aligned with your mental health and long-term vision.",
    link: "https://positivepsychology.com/goal-setting-students/",
    icon: "🎯",
    color: "from-teal-50 to-teal-100",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Valuable Resources for Students 🌱
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {resources.map((res, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${res.color} rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{res.icon}</span>
              <span className="px-3 py-1 text-xs bg-white shadow-sm rounded-full font-semibold text-gray-600">
                {res.category}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {res.title}
            </h2>
            <p className="text-gray-600 mb-4 text-sm">{res.description}</p>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-green-700 hover:text-green-900 hover:underline transition"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
