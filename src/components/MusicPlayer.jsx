import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "../weddingConfig";

export default function MusicPlayer({ isAutoPlayRequested }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef(null);

  // Fade in after a short delay
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // Auto-play when envelope opens (user gesture already happened)
  useEffect(() => {
    if (isAutoPlayRequested && audioRef.current && !isPlaying) {
      audioRef.current.volume = 0;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        // Fade in volume gently
        let vol = 0;
        const fade = setInterval(() => {
          vol = Math.min(0.65, vol + 0.05);
          if (audioRef.current) audioRef.current.volume = vol;
          if (vol >= 0.65) clearInterval(fade);
        }, 100);
      }).catch(() => {});
    }
  }, [isAutoPlayRequested]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.65;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingConfig.music.track} loop preload="auto" />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            role="button"
            aria-label={isPlaying ? "Pause music" : "Play music"}
            onClick={togglePlay}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            style={{
              position: "fixed",
              bottom: "24px",
              right: "18px",
              zIndex: 900,
              display: "flex",
              alignItems: "center",
              gap: "9px",
              background: "rgba(255, 252, 247, 0.95)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(198, 161, 91, 0.45)",
              padding: "7px 14px 7px 9px",
              borderRadius: "32px",
              boxShadow: "0 8px 28px rgba(101, 99, 79, 0.2), 0 2px 8px rgba(0,0,0,0.08)",
              cursor: "pointer"
            }}
          >
            {/* Spinning Vinyl */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatType: "loop" }}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #C6A15B 18%, #2E281F 20%, #1A1A1A 82%, #C6A15B 100%)",
                border: "1.5px solid #FFF5B7",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#FFF5B7" }} />
            </motion.div>

            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", minWidth: "80px" }}>
              <span
                style={{
                  fontFamily: "var(--font-details)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--dark-olive-text)",
                  lineHeight: 1.1
                }}
              >
                {weddingConfig.music.title}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-details)",
                  fontSize: "9.5px",
                  color: "var(--soft-champagne-gold)",
                  letterSpacing: "0.04em"
                }}
              >
                {isPlaying ? "Now Playing" : "Tap to Play"}
              </span>
            </div>

            {/* Animated Equalizer Bars */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "2.5px",
                height: "18px"
              }}
            >
              {[1, 0.6, 1.1, 0.75, 1].map((scale, i) => (
                <motion.div
                  key={i}
                  animate={isPlaying ? {
                    scaleY: [1, scale, 0.4, scale * 0.8, 1],
                  } : { scaleY: 0.25 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.12,
                    ease: "easeInOut"
                  }}
                  style={{
                    width: "2.5px",
                    height: "14px",
                    background: "linear-gradient(to top, #C6A15B, #E8C879)",
                    borderRadius: "2px",
                    transformOrigin: "bottom",
                    originY: "bottom"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
