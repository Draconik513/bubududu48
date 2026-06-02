import { useState, useEffect, useRef, createContext, useContext } from "react";
import laguUltah from "../assets/audio/laguultah.mp3";

export const MusicContext = createContext(null);

export const useMusicContext = () => useContext(MusicContext);

const BackgroundMusic = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMusicPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isMusicPlaying]);

  const toggleMusic = () => setIsMusicPlaying((prev) => !prev);
  const stopMusic = () => setIsMusicPlaying(false);

  return (
    <MusicContext.Provider value={{ stopMusic }}>
      <audio ref={audioRef} src={laguUltah} loop autoPlay />
      <div className="fixed bottom-20 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg flex items-center border border-pink-200">
          <button
            onClick={toggleMusic}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-md hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          >
            {isMusicPlaying ? "🔊" : "🔇"}
          </button>
          <span className="ml-2 text-sm text-pink-600 font-medium">
            {isMusicPlaying ? "Music ON" : "Music OFF"}
          </span>
        </div>
      </div>
      {children}
    </MusicContext.Provider>
  );
};

export default BackgroundMusic;