import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "../weddingConfig";

export default function EnvelopeOpening({ onOpenComplete, onPlayAudio }) {
  // Stages: 'ready' → 'opening' (env.mp4) → 'unfolding' (intro-video-2) → 'fadeout' → 'done'
  const [stage, setStage] = useState("ready");
  const [sparkles, setSparkles] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  // Preload videos as soon as component mounts
  useEffect(() => {
    if (video1Ref.current) video1Ref.current.load();
    if (video2Ref.current) video2Ref.current.load();
  }, []);

  const handleTapToOpen = (e) => {
    if (stage !== "ready") return;

    // Trigger golden sparkles at tap location
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX ? e.clientX - rect.left : rect.width / 2;
    const clickY = e.clientY ? e.clientY - rect.top : rect.height * 0.43;

    const newSparkles = Array.from({ length: 32 }).map((_, i) => ({
      id: i,
      x: clickX,
      y: clickY,
      dx: (Math.random() - 0.5) * 220,
      dy: (Math.random() - 0.5) * 220,
      size: Math.random() * 8 + 4,
      color: ["#C6A15B", "#FDF6BA", "#FFF5B7", "#D98291", "#E99B91", "#FFFFFF"][Math.floor(Math.random() * 6)]
    }));
    setSparkles(newSparkles);

    setStage("opening");
    if (onPlayAudio) onPlayAudio();

    setTimeout(() => {
      if (video1Ref.current) {
        video1Ref.current.currentTime = 0;
        video1Ref.current.play().catch(() => transitionToUnfolding());
      } else {
        transitionToUnfolding();
      }
    }, 300); // small delay for sparkle effect
  };

  const handleVideo1Ended = () => transitionToUnfolding();

  const transitionToUnfolding = () => {
    setStage("unfolding");
    if (video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.play().catch(() => finishOpening());
    } else {
      finishOpening();
    }
  };

  const handleVideo2Ended = () => finishOpening();

  const finishOpening = () => {
    setStage("fadeout");
    // Brief pause then fade out
    setTimeout(() => {
      setIsDone(true);
      if (onOpenComplete) onOpenComplete();
    }, 400);
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    if (onPlayAudio) onPlayAudio();
    finishOpening();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="envelope-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "#1E1A14",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: stage === "ready" ? "pointer" : "default",
            overflow: "hidden"
          }}
          onClick={stage === "ready" ? handleTapToOpen : undefined}
        >
          {/* Skip Intro Button */}
          <motion.button
            onClick={handleSkip}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              zIndex: 1050,
              background: "rgba(255, 252, 247, 0.92)",
              border: "1px solid rgba(198, 161, 91, 0.5)",
              color: "var(--dark-olive-text)",
              fontFamily: "var(--font-details)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 700,
              padding: "8px 16px",
              borderRadius: "20px",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              backdropFilter: "blur(6px)"
            }}
          >
            Skip Intro
          </motion.button>

          {/* 9:16 Canvas Wrapper */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "var(--canvas-max-width)",
              height: "100%",
              maxHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow: "0 0 80px rgba(0, 0, 0, 0.7)"
            }}
          >
            {/* Stage 1: Initial Closed Envelope (Poster 1s.png) */}
            <AnimatePresence>
              {stage === "ready" && (
                <motion.div
                  key="envelope-poster"
                  style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: [1, 1.018, 1] }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{
                    scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                    opacity: { duration: 0.5 },
                  }}
                >
                  <img
                    src="assets/1s.png"
                    alt="Embossed Luxury Wedding Envelope"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />

                  {/* Animated golden ring pulse around wax seal area */}
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      top: "38%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      border: "2px solid rgba(198, 161, 91, 0.6)",
                      pointerEvents: "none"
                    }}
                  />

                  {/* TAP TO OPEN cue */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: [0.9, 1, 0.9], y: [-3, 3, -3] }}
                    transition={{ opacity: { delay: 0.8, repeat: Infinity, duration: 2.4, ease: "easeInOut" }, y: { repeat: Infinity, duration: 2.4, ease: "easeInOut" } }}
                    style={{
                      position: "absolute",
                      bottom: "9%",
                      left: 0,
                      right: 0,
                      textAlign: "center",
                      zIndex: 25
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "10px 28px",
                        background: "rgba(255, 252, 247, 0.96)",
                        color: "var(--dark-olive-text)",
                        fontFamily: "var(--font-details)",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.26em",
                        textTransform: "uppercase",
                        borderRadius: "30px",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
                        border: "1px solid rgba(198, 161, 91, 0.5)"
                      }}
                    >
                      TAP TO OPEN
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Video 1: 3D Flap Opening (env.mp4) — smooth fade in */}
            <motion.video
              ref={video1Ref}
              src="assets/env.mp4"
              playsInline
              preload="auto"
              muted
              onEnded={handleVideo1Ended}
              animate={{ opacity: stage === "opening" ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none"
              }}
            />

            {/* Video 2: Floral Scatter & Oval Frame Reveal (intro-video-2) — smooth crossfade */}
            <motion.video
              ref={video2Ref}
              src="assets/intro-video-2-a-H3NxSy.mp4"
              playsInline
              preload="auto"
              muted
              onEnded={handleVideo2Ended}
              animate={{ opacity: stage === "unfolding" || stage === "fadeout" ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none"
              }}
            />

            {/* Golden Sparkle Burst on Tap */}
            <AnimatePresence>
              {sparkles.map((sp) => (
                <motion.div
                  key={sp.id}
                  initial={{ x: sp.x, y: sp.y, scale: 1.2, opacity: 1 }}
                  animate={{ x: sp.x + sp.dx, y: sp.y + sp.dy, scale: 0, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: sp.size,
                    height: sp.size,
                    borderRadius: "50%",
                    backgroundColor: sp.color,
                    boxShadow: `0 0 12px ${sp.color}, 0 0 4px ${sp.color}`,
                    pointerEvents: "none",
                    zIndex: 30
                  }}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
