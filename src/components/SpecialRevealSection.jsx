import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { weddingConfig } from "../weddingConfig";
import Card3D from "./Card3D";

export default function SpecialRevealSection() {
  const [isRevealed, setIsRevealed] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = (canvas.width = 280);
    const H = (canvas.height = 260);

    const drawCover = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.save();

      // Exact pink heart shape matching reference frame_16
      ctx.beginPath();
      ctx.moveTo(W / 2, H * 0.25);
      ctx.bezierCurveTo(W / 2, H * 0.05, W * 0.09, H * 0.05, W * 0.09, H * 0.38);
      ctx.bezierCurveTo(W * 0.09, H * 0.62, W * 0.37, H * 0.78, W / 2, H * 0.93);
      ctx.bezierCurveTo(W * 0.63, H * 0.78, W * 0.91, H * 0.62, W * 0.91, H * 0.38);
      ctx.bezierCurveTo(W * 0.91, H * 0.05, W / 2, H * 0.05, W / 2, H * 0.25);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, H * 0.1, 0, H * 0.9);
      grad.addColorStop(0, "#F5B8C4");
      grad.addColorStop(0.5, "#EA8EA0");
      grad.addColorStop(1, "#DC6A82");
      ctx.fillStyle = grad;
      ctx.fill();

      // Subtle gold rim
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(198, 161, 91, 0.55)";
      ctx.stroke();

      // Cursive "Scratch Here" matching frame_16
      ctx.font = "italic 30px 'Great Vibes', 'Playfair Display', serif";
      ctx.fillStyle = "#B88A3B";
      ctx.textAlign = "center";
      ctx.fillText("Scratch Here", W / 2, H * 0.5);

      ctx.restore();
    };

    drawCover();

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const scratch = (x, y) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 42;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      lastX = x;
      lastY = y;
    };

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: (clientX - rect.left) * (canvas.width / rect.width),
        y: (clientY - rect.top) * (canvas.height / rect.height)
      };
    };

    const checkProgress = () => {
      try {
        const imgData = ctx.getImageData(0, 0, W, H);
        const pixels = imgData.data;
        let transparent = 0;
        let total = 0;
        for (let i = 3; i < pixels.length; i += 16) {
          total++;
          if (pixels[i] < 128) transparent++;
        }
        if ((transparent / total) * 100 >= 32 && !isRevealed) {
          triggerFullReveal();
        }
      } catch {}
    };

    const onStart = (e) => {
      isDrawing = true;
      const pos = getPos(e);
      lastX = pos.x;
      lastY = pos.y;
      scratch(pos.x, pos.y);
    };
    const onMove = (e) => {
      if (!isDrawing) return;
      e.preventDefault();
      const pos = getPos(e);
      scratch(pos.x, pos.y);
    };
    const onEnd = () => {
      if (!isDrawing) return;
      isDrawing = false;
      checkProgress();
    };

    canvas.addEventListener("mousedown", onStart);
    canvas.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    canvas.addEventListener("touchstart", onStart, { passive: false });
    canvas.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd);

    return () => {
      canvas.removeEventListener("mousedown", onStart);
      canvas.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
      canvas.removeEventListener("touchstart", onStart);
      canvas.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [isRevealed]);

  const triggerFullReveal = () => {
    setIsRevealed(true);
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.transition = "opacity 0.65s ease";
      canvas.style.opacity = "0";
      setTimeout(() => {
        canvas.style.display = "none";
      }, 650);
    }

    confetti({
      particleCount: 55,
      spread: 75,
      origin: { y: 0.45 },
      colors: ["#F5E4DF", "#D98291", "#E99B91", "#C6A15B", "#E8C879", "#A9B99A"]
    });
  };

  return (
    <section
      id="special-reveal-section"
      className="invitation-page"
      style={{
        backgroundColor: "#FFFCF7",
        paddingTop: "56px",
        paddingBottom: "22px",
        justifyContent: "space-between"
      }}
    >
      {/* Top Header: exact "A SPECIAL REVEAL" matching frame_16/18 */}
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(24px, 6vw, 31px)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--dark-olive-text)",
          fontWeight: 400
        }}
      >
        {weddingConfig.reveal.title}
      </motion.h2>

      {/* 3D Interactive & Animated Heart Scratch Container */}
      <Card3D maxTilt={14} perspective={800} glare>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            rotateY: isRevealed ? [0, 360] : [-6, 6, -6],
            rotateX: [3, -3, 3],
            y: [0, -7, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{
            opacity: { duration: 0.8 },
            rotateY: isRevealed
              ? { duration: 0.9, ease: "easeInOut" }
              : { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
            rotateX: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
            y: { repeat: Infinity, duration: 3.6, ease: "easeInOut" },
            scale: { repeat: Infinity, duration: 3.2, ease: "easeInOut" }
          }}
          style={{
            position: "relative",
            width: "260px",
            height: "242px",
            margin: "0 auto",
            userSelect: "none",
            touchAction: "none",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Soft 3D Back Shadow Layer */}
          <svg
            viewBox="0 0 280 260"
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              transform: "translateZ(-18px) translateY(8px) scale(0.98)",
              opacity: 0.25,
              filter: "blur(10px)",
              pointerEvents: "none"
            }}
          >
            <path
              d="M 140,65 C 140,13 25,13 25,98 C 25,161 104,203 140,242 C 176,203 255,161 255,98 C 255,13 140,13 140,65 Z"
              fill="#D98291"
            />
          </svg>

          {/* Revealed Pink-Outlined Heart Underlay (exact match to frame_18/32) */}
          <svg
            viewBox="0 0 280 260"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              transform: "translateZ(10px)",
              filter: "drop-shadow(0 12px 24px rgba(217, 130, 145, 0.24))"
            }}
          >
            <defs>
              <radialGradient id="heart3dShine" cx="35%" cy="28%" r="70%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#FFFCF7" />
                <stop offset="100%" stopColor="#F8E7EA" />
              </radialGradient>
            </defs>
            <path
              d="M 140,65 C 140,13 25,13 25,98 C 25,161 104,203 140,242 C 176,203 255,161 255,98 C 255,13 140,13 140,65 Z"
              fill="url(#heart3dShine)"
              stroke="#E26D8A"
              strokeWidth="3.5"
            />
            <text
              x="140"
              y="128"
              textAnchor="middle"
              fill="#5D6B4E"
              fontFamily="'Playfair Display', 'Cormorant Garamond', serif"
              fontStyle="italic"
              fontWeight="600"
            >
              <tspan fontSize="31">{weddingConfig.reveal.dateNumber}</tspan>
              <tspan fontSize="15" baselineShift="super">{weddingConfig.reveal.dateSuffix}</tspan>
              <tspan fontSize="29"> {weddingConfig.reveal.dateMonthYear}</tspan>
            </text>
            <text
              x="140"
              y="156"
              textAnchor="middle"
              fill="#65634F"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="13.5"
              fontWeight="600"
              letterSpacing="0.16em"
            >
              {weddingConfig.reveal.day}
            </text>
          </svg>

          {/* Scratchable Canvas Overlay */}
          <canvas
            ref={canvasRef}
            onDoubleClick={triggerFullReveal}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer",
              touchAction: "none",
              transform: "translateZ(20px)",
              zIndex: 10
            }}
          />

          {/* Subtle tap-to-reveal fallback link */}
          <AnimatePresence>
            {!isRevealed && (
              <motion.button
                type="button"
                onClick={triggerFullReveal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "absolute",
                  bottom: "-26px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "none",
                  border: "none",
                  fontFamily: "var(--font-details)",
                  fontSize: "9.5px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--soft-champagne-gold)",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
              >
                Scratch or Tap to Reveal
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </Card3D>

      {/* Bottom Bouquet with Hummingbird + Small Ganesha at very bottom (exact match to frame_18) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.1 }}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <img
          src="assets/welcome-flowers-bottom-CYQVvwo4.png"
          alt="Watercolour roses, lily and hummingbird"
          style={{
            width: "min(370px, 96%)",
            height: "auto",
            display: "block",
            margin: "0 auto"
          }}
        />
        <img
          src="assets/ganesh-idol-TubyYjSJ.png"
          alt="Shri Ganesh"
          className="float-slow"
          style={{ width: "36px", height: "auto" }}
        />
      </motion.div>
    </section>
  );
}
