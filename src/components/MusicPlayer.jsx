import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "../weddingConfig";

/**
 * Minimal frosted-glass speaker toggle matching the exact bottom-right icon in the reference video.
 * Mounted from page 1 so music starts immediately when the user taps the opening envelope (or first interaction).
 */
export default function MusicPlayer({ isAutoPlayRequested }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasStartedRef = useRef(false);

  const startAudio = () => {
    const audio = audioRef.current;
    if (!audio || hasStartedRef.current) return;
    audio.volume = 0.65;
    audio
      .play()
      .then(() => {
        hasStartedRef.current = true;
        setIsPlaying(true);
      })
      .catch(() => {});
  };

  // Try autoplay on mount and unlock on very first user gesture anywhere on page 1
  useEffect(() => {
    startAudio();

    const unlockOnGesture = () => {
      startAudio();
      if (hasStartedRef.current) {
        window.removeEventListener("pointerdown", unlockOnGesture);
        window.removeEventListener("touchstart", unlockOnGesture);
        window.removeEventListener("keydown", unlockOnGesture);
      }
    };

    window.addEventListener("pointerdown", unlockOnGesture, { passive: true });
    window.addEventListener("touchstart", unlockOnGesture, { passive: true });
    window.addEventListener("keydown", unlockOnGesture, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", unlockOnGesture);
      window.removeEventListener("touchstart", unlockOnGesture);
      window.removeEventListener("keydown", unlockOnGesture);
    };
  }, []);

  // Also trigger when envelope tap explicitly requests playback
  useEffect(() => {
    if (isAutoPlayRequested && !isPlaying) {
      startAudio();
    }
  }, [isAutoPlayRequested, isPlaying]);

  const togglePlay = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.65;
      audio
        .play()
        .then(() => {
          hasStartedRef.current = true;
          setIsPlaying(true);
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingConfig.music.track} loop preload="auto" />
      <motion.button
        type="button"
        aria-label={isPlaying ? "Mute music" : "Play music"}
        onClick={togglePlay}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "fixed",
          bottom: "22px",
          right: "20px",
          zIndex: 1100,
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 252, 247, 0.88)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(218, 214, 204, 0.8)",
          boxShadow: "0 4px 16px rgba(101, 99, 79, 0.14)",
          color: "var(--dark-olive-text)",
          cursor: "pointer"
        }}
      >
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
