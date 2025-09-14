// Exercise.jsx
import React, { useState, useRef, useEffect } from "react";

/**
 * Breathing exercise: 3 stages (Inhale, Hold, Exhale)
 * Each stageDuration is in seconds (default 5).
 *
 * Usage: import Exercise from "./Exercise"; <Exercise />
 */

const STAGES = ["Inhale", "Hold", "Exhale"];
const stageDurationDefault = 5; // seconds per stage

export default function Exercise({ stageDuration = stageDurationDefault }) {
  // UI / control state
  const [isRunning, setIsRunning] = useState(false);
  const [currentStage, setCurrentStage] = useState(0); // 0..2
  const [timeLeft, setTimeLeft] = useState(stageDuration);
  const [progress, setProgress] = useState(0); // 0..1 for current stage
  const [completed, setCompleted] = useState(false);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);

  // For smooth time updates we keep refs to mutable values used in the interval
  const intervalRef = useRef(null);
  const timeLeftRef = useRef(stageDuration);
  const currentStageRef = useRef(0);
  const lastTickRef = useRef(null);

  // Colors per stage (used for background, text, spinner stroke)
  const colors = {
    Inhale: { bg: "from-green-100 to-green-200", hex: "#10B981" }, // green
    Hold: { bg: "from-yellow-100 to-yellow-200", hex: "#F59E0B" }, // amber
    Exhale: { bg: "from-indigo-100 to-indigo-200", hex: "#6366F1" }, // indigo
  };

  // Reset everything
  const reset = () => {
    stop();
    currentStageRef.current = 0;
    setCurrentStage(0);
    timeLeftRef.current = stageDuration;
    setTimeLeft(stageDuration);
    setProgress(0);
    setCompleted(false);
  };

  // Stop timer
  const stop = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    lastTickRef.current = null;
  };

  // Start/resume
  const start = () => {
    if (completed) {
      // restart if already completed
      reset();
    }
    if (isRunning) return;
    setIsRunning(true);
  };

  // Internal timer logic using setInterval and Date deltas for smoothness
  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      lastTickRef.current = null;
      return;
    }

    // initialize refs when starting
    timeLeftRef.current = timeLeftRef.current ?? stageDuration;
    currentStageRef.current = currentStageRef.current ?? 0;
    lastTickRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const delta = (now - (lastTickRef.current || now)) / 1000; // seconds
      lastTickRef.current = now;

      // subtract delta seconds
      timeLeftRef.current = Math.max(0, timeLeftRef.current - delta);
      setTimeLeft(Number(timeLeftRef.current.toFixed(2)));

      // progress within current stage (0..1)
      const prog = Math.min(1, (stageDuration - timeLeftRef.current) / stageDuration);
      setProgress(prog);

      // if stage finished, advance
      if (timeLeftRef.current <= 0) {
        if (currentStageRef.current >= STAGES.length - 1) {
          // finished full cycle
          setIsRunning(false);
          setCompleted(true);
          setCyclesCompleted((c) => c + 1);
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          lastTickRef.current = null;
          // ensure UI shows 0 and full progress
          setTimeLeft(0);
          setProgress(1);
        } else {
          // go to next stage
          currentStageRef.current += 1;
          setCurrentStage(currentStageRef.current);

          // reset stage timer
          timeLeftRef.current = stageDuration;
          setTimeLeft(stageDuration);
          setProgress(0);
        }
      }
    }, 50); // 20fps updates for smoothness

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      lastTickRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning]);

  // Prepare display values
  const stageName = STAGES[currentStage];
  const color = colors[stageName] || colors.Inhale;

  // SVG spinner settings
  const size = 180;
  const stroke = 8;
  const center = size / 2;
  const radius = center - stroke;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - progress);

  // Format timeLeft to show integer seconds
  const displayedSeconds = Math.ceil(timeLeft);

  // Nice label for each stage
  const stageLabel =
    stageName === "Inhale" ? "Breathe In" : stageName === "Hold" ? "Hold" : "Breathe Out";

  // When user completes the cycle, show summary card
  const CompletionCard = () => (
    <div className="mt-6 bg-white rounded-2xl shadow-2xl p-5 max-w-md mx-auto text-center">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Great job 👏</h3>
      <p className="text-sm text-gray-600 mb-4">
        You completed the breathing cycle. Take your time — sit quietly and notice how you feel.
      </p>

      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <p className="text-sm text-gray-700 font-medium">Advanced analysis</p>
        <ul className="text-xs text-gray-500 mt-2 text-left space-y-1">
          <li>• Stages: {STAGES.join(" → ")}</li>
          <li>• Stage length: {stageDuration}s each</li>
          <li>• Total time: {STAGES.length * stageDuration}s</li>
          <li>• Cycles completed (this session): {cyclesCompleted}</li>
        </ul>
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => {
            reset();
            // automatically start next cycle if user wants
            setTimeout(() => start(), 150);
          }}
          className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
        >
          Restart
        </button>
        <button
          onClick={() => {
            reset();
          }}
          className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: breathing widget */}
        <div
          className={`rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition-all`}
        >
          <div
            className={`w-full max-w-md rounded-2xl p-6 bg-green-50`}
            // subtle background gradient based on stage
            style={{
              background: `linear-gradient(135deg, ${color.hex}22 0%, #f0faf5 100%)`,
            }}
          >
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
              Guided Breathing
            </h2>

            {/* SVG spinner + center circle */}
            <div className="flex justify-center items-center">
              <div
                className={`relative flex items-center justify-center rounded-full`}
                style={{ width: size, height: size }}
              >
                <svg width={size} height={size}>
                  {/* track circle */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="#E6E6E6"
                    strokeWidth={stroke}
                    fill="none"
                  />
                  {/* animated spinner */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={color.hex}
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashoffset}
                    style={{ transition: "stroke-dashoffset 0.1s linear, stroke 300ms" }}
                    transform={`rotate(-90 ${center} ${center})`}
                  />
                </svg>

                {/* center disc */}
                <div
                  className="absolute rounded-full flex flex-col items-center justify-center"
                  style={{
                    width: size * 0.6,
                    height: size * 0.6,
                    background: "white",
                    boxShadow: "0 6px 18px rgba(16,24,40,0.06)",
                  }}
                >
                  <div className="text-4xl font-bold text-gray-800">{displayedSeconds}</div>
                  <div className="text-xs text-gray-500 mt-1">{stageLabel}</div>
                </div>
              </div>
            </div>

            {/* instructions & controls */}
            <p className="text-xs text-gray-500 text-center mt-4 mb-3">
              Follow the pattern: {stageDuration}s inhale → {stageDuration}s hold → {stageDuration}s
              exhale.
            </p>

            <div className="flex gap-3 justify-center mt-3">
              {!isRunning ? (
                <button
                  onClick={start}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
                >
                  <span className="text-sm font-medium">Start Exercise</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsRunning(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-white hover:bg-yellow-500 transition"
                >
                  <span className="text-sm font-medium">Pause</span>
                </button>
              )}

              <button
                onClick={() => {
                  reset();
                }}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Completion message */}
          {completed && <CompletionCard />}
        </div>

        {/* Right: quick relaxation techniques */}
        <div className="rounded-2xl p-6 bg-white shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Relaxation Techniques</h3>

          <div className="space-y-4">
            <TechniqueCard
              title="5-4-3-2-1 Grounding"
              desc="Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste."
            />
            <TechniqueCard
              title="Progressive Muscle Relaxation"
              desc="Tense and relax each muscle group from toes to head for 1-2 minutes."
            />
            <TechniqueCard
              title="Positive Affirmations"
              desc='"I am capable", "I am worthy", "I can handle this challenge."'
            />
            <TechniqueCard
              title="Mini Break"
              desc="Stand up, stretch for 30 seconds, walk around, and breathe slowly."
            />
          </div>

          <div className="mt-6 text-xs text-gray-500">
            Tip: Try repeating cycles 3–5 times for a calmer state. Adjust stage duration to suit you.
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small card for technique list */
function TechniqueCard({ title, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-lg p-3 bg-gray-50 border border-gray-100 hover:shadow-sm transition cursor-pointer"
      onClick={() => setOpen((s) => !s)}
      role="button"
      aria-pressed={open}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm font-medium text-gray-800 flex items-start">{title}</div>
          <div className="text-xs text-gray-500 flex items-start">{desc}</div>
        </div>
      </div>
    </div>
  );
}
