import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "../weddingConfig";
import Card3D from "./Card3D";

export default function EnvelopeOpening({ onOpenComplete, onPlayAudio }) {
  const [stage, setStage] = useState("ready");
  const [sparkles, setSparkles] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  useEffect(() => {
    if (video1Ref.current) video1Ref.current.load();
    if (video2Ref.current) video2Ref.current.load();
  }, []);

  const handleTapToOpen = (e) => {
    if (stage !== "ready") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX ? e.clientX - rect.left : rect.width / 2;
    const clickY = e.clientY ? e.clientY - rect.top : rect.height * 0.48;

    const newSparkles = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: clickX,
      y: clickY,
      dx: (Math.random() - 0.5) * 200,
      dy: (Math.random() - 0.5) * 200,
      size: Math.random() * 7 + 3,
      color: ["#C6A15B", "#FDF6BA", "#FFF5B7", "#D98291", "#FFFFFF"][Math.floor(Math.random() * 5)]
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
    }, 220);
  };

  const transitionToUnfolding = () => {
    setStage("unfolding");
    if (video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.play().catch(() => finishOpening());
    } else {
      finishOpening();
    }
  };

  const finishOpening = () => {
    setStage("fadeout");
    setTimeout(() => {
      setIsDone(true);
      if (onOpenComplete) onOpenComplete();
    }, 250);
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
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "#EAE0D5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: stage === "ready" ? "pointer" : "default",
            overflow: "hidden"
          }}
          onClick={stage === "ready" ? handleTapToOpen : undefined}
        >
          {/* Subtle Skip Intro */}
          <motion.button
            onClick={handleSkip}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            style={{
              position: "absolute",
              top: 18,
              right: 18,
              zIndex: 1050,
              background: "rgba(255, 252, 247, 0.88)",
              border: "1px solid rgba(198, 161, 91, 0.45)",
              color: "var(--dark-olive-text)",
              fontFamily: "var(--font-details)",
              fontSize: "10px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 600,
              padding: "7px 14px",
              borderRadius: "20px",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
              backdropFilter: "blur(6px)"
            }}
          >
            Skip Intro
          </motion.button>

          {/* 9:16 3D Envelope Canvas */}
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
              boxShadow: "0 20px 70px rgba(101, 99, 79, 0.28)"
            }}
          >
            {/* Stage 1: Closed 3D Embossed Envelope */}
            <AnimatePresence>
              {stage === "ready" && (
                <motion.div
                  key="envelope-poster"
                  style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: [1, 1.012, 1] }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{
                    scale: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
                    opacity: { duration: 0.35 }
                  }}
                >
                  <Card3D maxTilt={6} perspective={1200} glare style={{ width: "100%", height: "100%" }}>
                    <img
                      src="assets/1s.png"
                      alt="Embossed Luxury Wedding Envelope"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />

                    {/* Custom Monogram Seal Overlay for Ayush & Akanksha */}
                    <div
                      style={{
                        position: "absolute",
                        top: "49%",
                        left: "50%",
                        transform: "translate(-50%, -50%) translateZ(22px)",
                        width: "92px",
                        height: "92px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle at 35% 30%, #FFFDF8 0%, #F7E8C8 55%, #D9B36C 100%)",
                        border: "2.5px solid #C6A15B",
                        boxShadow: "0 4px 18px rgba(130, 96, 36, 0.35), inset 0 2px 6px rgba(255,255,255,0.8)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none"
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "26px",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          color: "#9A7228",
                          lineHeight: 1
                        }}
                      >
                        {weddingConfig.couple.monogram}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-details)",
                          fontSize: "6.5px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "#8C6825",
                          marginTop: "3px"
                        }}
                      >
                        5 DEC 2026
                      </span>
                    </div>

                    {/* Subtle Gold Seal Shimmer Ring */}
                    <motion.div
                      animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0, 0.45] }}
                      transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        top: "49%",
                        left: "50%",
                        transform: "translate(-50%, -50%) translateZ(20px)",
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        border: "1.5px solid rgba(198, 161, 91, 0.65)",
                        pointerEvents: "none"
                      }}
                    />

                    {/* Subtle "TAP TO OPEN" at bottom */}
                    <motion.div
                      animate={{ opacity: [0.65, 1, 0.65] }}
                      transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        bottom: "8.5%",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        transform: "translateZ(24px)",
                        zIndex: 25
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          padding: "6px 18px",
                          background: "rgba(255, 252, 247, 0.72)",
                          color: "var(--dark-olive-text)",
                          fontFamily: "var(--font-details)",
                          fontSize: "10.5px",
                          fontWeight: 500,
                          letterSpacing: "0.26em",
                          textTransform: "uppercase",
                          borderRadius: "20px",
                          backdropFilter: "blur(4px)"
                        }}
                      >
                        TAP TO OPEN
                      </span>
                    </motion.div>
                  </Card3D>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Video 1: Flap Opening */}
            <motion.video
              ref={video1Ref}
              src="assets/env.mp4"
              playsInline
              preload="auto"
              muted
              onEnded={transitionToUnfolding}
              animate={{ opacity: stage === "opening" ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none"
              }}
            />

            {/* Video 2: Floral Scatter & Reveal */}
            <motion.video
              ref={video2Ref}
              src="assets/intro-video-2-a-H3NxSy.mp4"
              playsInline
              preload="auto"
              muted
              onEnded={finishOpening}
              animate={{ opacity: stage === "unfolding" || stage === "fadeout" ? 1 : 0 }}
              transition={{ duration: 0.35, ease: "easeIn" }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none"
              }}
            />

            {/* Golden Sparkle Burst */}
            <AnimatePresence>
              {sparkles.map((sp) => (
                <motion.div
                  key={sp.id}
                  initial={{ x: sp.x, y: sp.y, scale: 1.2, opacity: 1 }}
                  animate={{ x: sp.x + sp.dx, y: sp.y + sp.dy, scale: 0, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.95, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: sp.size,
                    height: sp.size,
                    borderRadius: "50%",
                    backgroundColor: sp.color,
                    boxShadow: `0 0 10px ${sp.color}`,
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
