import React, { useState, useRef, useEffect } from "react";

const tracks = [
  {
    title: "Calming Frequency for Sleep",
    description: "Relaxing sound to calm your mind before sleep.",
    src: "/audio/Can_t_sleep_Try_listening_to_this_calming_frequency_before_bed_shortsMP3.mp3",
  },
  {
    title: "Healing Headaches",
    description: "Tibetan singing bowls for relaxation and pain relief.",
    src: "/audio/Healing_Headaches_with_Tibetan_Singing_Bowls_Relaxation_Pain_Relief.mp3",
  },
  {
    title: "Focus & Calm (333 Hz)",
    description: "Enhance concentration and reduce ADHD stress.",
    src: "/audio/333_Hz_Frequency_for_Focus_and_CalmADHD_adhdrelief_binauralbeats.mp3",
  },
  {
    title: "Meditation Pure Tone (852 Hz)",
    description: "Deep meditation tone for inner healing.",
    src:"/audio/852 Hz Frequency Pure Tone Meditation(MP3_320K).mp3",
  },
  {
    title: "Tibetan Meditation (432 Hz)",
    description: "Sound bath meditation for inner peace.",
    src: "/audio/Sound_That_Heals_432_hz_Tibetan_Meditation_Music_Sound_Bath_Meditation.mp3",
  },
];

const Music = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // play in loop

    const updateProgress = () => {
      if (audio.duration) {
        setProgress(audio.currentTime / audio.duration);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  const handlePlay = (track) => {
    const audio = audioRef.current;

    if (currentTrack?.src !== track.src) {
      audio.src = track.src;
      setCurrentTrack(track);
      audio.play().then(() => setIsPlaying(true));
    } else {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().then(() => setIsPlaying(true));
      }
    }
  };

  const onSeek = (e) => {
    const audio = audioRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const seekTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
    audio.currentTime = seekTime;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex flex-col items-center p-6 sm:mx-10 rounded-3xl">
      <h1 className="text-3xl font-extrabold text-green-800 mb-8 drop-shadow-md">
        🌿 CalmWaves
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {tracks.map((track, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-6 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
              currentTrack?.src === track.src
                ? "bg-gradient-to-r from-green-200 to-green-300 border-2 border-green-500"
                : "bg-white hover:bg-green-50"
            }`}
            onClick={() => handlePlay(track)}
          >
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              {track.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{track.description}</p>

            {currentTrack?.src === track.src && (
              <div className="mt-4">
                {/* Progress bar */}
                <div
                  className="w-full h-2 bg-gray-200 rounded-full cursor-pointer relative"
                  onClick={onSeek}
                >
                  <div
                    className="h-2 rounded-full bg-green-500 transition-all duration-200"
                    style={{ width: `${progress * 100}%` }}
                  ></div>
                </div>

                {/* Play / Pause button */}
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 transition-all">
                  {isPlaying ? "⏸ Pause" : "▶ Play"}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
