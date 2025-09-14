import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          📖 About Our Project
        </h1>

        {/* Intro */}
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 mb-8">
          <p className="text-gray-700 leading-relaxed">
            This project was developed as part of a{" "}
            <span className="font-semibold text-indigo-600">Hackathon</span> by
            students of{" "}
            <span className="font-semibold text-indigo-600">
              Bipin Tripathi Kumaon Institute of Technology (BTKIT), Dwarahat
            </span>
            . Our aim is to address the growing{" "}
            <span className="font-semibold">mental health challenges</span>{" "}
            faced by college students, especially in{" "}
            <span className="italic">rural and semi-urban areas</span>, by
            providing a stigma-free, accessible, and personalized{" "}
            <span className="font-semibold">
              Digital Psychological Intervention System
            </span>
            .
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-gradient-to-r from-rose-50 to-red-100 rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            🚨 Problem Statement
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>
              Absence of a structured, scalable, and stigma-free psychological
              intervention system.
            </li>
            <li>
              Lack of early detection and preventive mental health tools for
              students.
            </li>
            <li>
              Under-utilization of counselling centres due to fear of judgment
              or lack of awareness.
            </li>
            <li>
              No centralized data-driven framework for institutions to monitor
              student well-being.
            </li>
          </ul>
        </div>

        {/* Proposed Solution */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            💡 Proposed Solution
          </h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">AI-guided First-Aid Support</span>{" "}
              – Interactive chatbot for coping strategies & referrals.
            </li>
            <li>
              <span className="font-semibold">Confidential Booking System</span>{" "}
              – Secure appointments with counsellors & helplines.
            </li>
            <li>
              <span className="font-semibold">
                Psychoeducational Resource Hub
              </span>{" "}
              – Videos, audio, and wellness guides in regional languages.
            </li>
            <li>
              <span className="font-semibold">Peer Support Platform</span> –
              Safe, moderated student-to-student interaction.
            </li>
            <li>
              <span className="font-semibold">Admin Dashboard</span> – Anonymous
              data analytics for institutional well-being policies.
            </li>
          </ol>
        </div>

        {/* Why It Matters */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            🌍 Why This Project Matters
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Unlike existing generic or paid mental health apps, our solution
            integrates{" "}
            <span className="font-semibold">
              regional languages, cultural contexts, institution-specific
              support mapping, and real-time analytics
            </span>
            . This ensures accessibility, inclusivity, and relevance for
            students in rural and semi-urban areas.
          </p>
        </div>

        {/* Motivational Quote */}
        <div className="max-w-3xl mx-auto bg-white/70 shadow-md p-4 rounded-xl text-center mt-8">
          <p className="text-gray-700 italic font-medium">
            "Your mental health is just as important as your physical health.
            Together, we can build a stigma-free future for students."
          </p>
        </div>
      </div>
    </div>
  );
}
