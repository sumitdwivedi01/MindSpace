import React from "react";

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        💙 Support & Resources
      </h1>

      {/* Motivational Quote */}
      <div className="max-w-3xl mx-auto bg-white/70 shadow-md p-4 rounded-xl text-center mb-8">
        <p className="text-gray-700 italic font-medium">
          "Asking for help is not a sign of weakness, but of courage. You are
          never alone on this journey."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Crisis Support */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-red-700 mb-4 flex items-center gap-2">
            ⚠️ Crisis Support
          </h2>
          <p className="text-gray-700 mb-6 text-sm">
            If you're in crisis or having thoughts of self-harm, please reach
            out immediately. Help is available 24/7 and you are not alone.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                📞 National Suicide Prevention Lifeline
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                24/7 free and confidential support
              </p>
              <a
                href="tel:988"
                className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm hover:bg-red-700 transition"
              >
                Call 988
              </a>
            </div>

            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                💬 Crisis Text Line
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Free 24/7 crisis support via text
              </p>
              <a
                href="https://www.crisistextline.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm hover:bg-red-700 transition"
              >
                Text HOME to 741741
              </a>
            </div>
          </div>

          <div className="bg-white/60 rounded-xl p-3 mt-6 text-sm text-green-700 font-medium shadow-inner">
            🌟 Remember: Your life has value and meaning. Reaching out is a sign
            of strength.
          </div>
        </div>

        {/* Professional Resources */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            🌿 Professional Resources
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-800">Campus Counseling</h3>
              <p className="text-sm text-gray-600 mb-2">
                Most universities provide free or low-cost counseling services
                for students.
              </p>
              <a
                href="https://jedfoundation.org/campus-resources/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline text-sm"
              >
                Explore Campus Support →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-800">Online Therapy</h3>
              <p className="text-sm text-gray-600 mb-2">
                Professional therapy accessible anytime, anywhere, with student
                discounts available.
              </p>
              <a
                href="https://www.betterhelp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline text-sm"
              >
                Visit BetterHelp →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-800">Support Groups</h3>
              <p className="text-sm text-gray-600 mb-2">
                Join online or local groups where students share experiences,
                encouragement, and coping strategies.
              </p>
              <a
                href="https://www.mentalhealthamerica.net/peersupport-groups"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline text-sm"
              >
                Find Support Groups →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Motivational Quote */}
      <div className="max-w-3xl mx-auto bg-white/70 shadow-md p-4 rounded-xl text-center mt-10">
        <p className="text-gray-700 italic font-medium">
          "Every storm runs out of rain. Hold on, brighter days are coming 🌈"
        </p>
      </div>
    </div>
  );
}
