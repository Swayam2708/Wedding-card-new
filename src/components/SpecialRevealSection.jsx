import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { weddingConfig } from "../weddingConfig";

export default function SpecialRevealSection() {
  const [isRevealed, setIsRevealed] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = (canvas.width = 280);
    const H = (canvas.height = 280);

    // Draw pink heart scratch cover
    const drawCover = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.save();

      // Heart shape fill
      ctx.beginPath();
      ctx.moveTo(W / 2, H * 0.28);
      ctx.bezierCurveTo(W / 2, H * 0.08, W * 0.12, H * 0.08, W * 0.12, H * 0.4);
      ctx.bezierCurveTo(W * 0.12, H * 0.62, W * 0.38, H * 0.78, W / 2, H * 0.92);
      ctx.bezierCurveTo(W * 0.62, H * 0.78, W * 0.88, H * 0.62, W * 0.88, H * 0.4);
      ctx.bezierCurveTo(W * 0.88, H * 0.08, W / 2, H * 0.08, W / 2, H * 0.28);
      ctx.closePath();

      // Gradient fill
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, "#E8A0AD");
      grad.addColorStop(1, "#D98291");
      ctx.fillStyle = grad;
      ctx.fill();

      // Text hint
      ctx.font = "bold 13px 'Montserrat', sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.textAlign = "center";
      ctx.letterSpacing = "0.08em";
      ctx.fillText("Scratch to Reveal", W / 2, H * 0.52);
      ctx.font = "11px 'Montserrat', sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.65)";
      ctx.fillText("our special date", W / 2, H * 0.60);

      ctx.restore();
    };

    drawCover();

    let isDrawing = false;
    let lastX = 0, lastY = 0;

    const scratch = (x, y) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 40;
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
        let transparent = 0, total = 0;
        for (let i = 3; i < pixels.length; i += 16) {
          total++;
          if (pixels[i] < 128) transparent++;
        }
        if ((transparent / total) * 100 >= 36 && !isRevealed) triggerFullReveal();
      } catch {}
    };

    const onStart = (e) => {
      isDrawing = true;
      const pos = getPos(e);
      lastX = pos.x; lastY = pos.y;
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
      canvas.style.transition = "opacity 0.7s ease";
      canvas.style.opacity = "0";
      setTimeout(() => { canvas.style.display = "none"; }, 700);
    }

    // Confetti burst
    const shoot = () => {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.52 },
        colors: ["#F5E4DF", "#D98291", "#E99B91", "#C6A15B", "#E8C879", "#FFFFFF", "#A9B99A"]
      });
    };
    shoot();
    setTimeout(shoot, 350);
  };

  return (
    <section
      id="special-reveal-section"
      className="invitation-page"
      style={{
        backgroundColor: "#FFFCF7",
        paddingTop: "52px",
        paddingBottom: "32px",
        backgroundImage: `
          radial-gradient(ellipse at 50% 0%, rgba(217,130,145,0.06) 0%, transparent 55%),
          radial-gradient(ellipse at 10% 90%, rgba(169,185,154,0.06) 0%, transparent 50%)
        `
      }}
    >
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <span
          style={{
            fontFamily: "var(--font-details)",
            fontSize: "10.5px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--soft-champagne-gold)",
            fontWeight: 700,
            display: "block",
            marginBottom: "6px"
          }}
        >
          Save Our Date
        </span>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(26px, 6.5vw, 34px)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--dark-olive-text)",
            fontWeight: 700,
            marginBottom: "4px"
          }}
        >
          {weddingConfig.reveal.title}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "13.5px",
            color: "var(--dark-olive-text)",
            opacity: 0.8,
            marginTop: "2px"
          }}
        >
          {weddingConfig.reveal.subtitle}
        </p>
      </motion.div>

      {/* Heart Scratch Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        style={{
          position: "relative",
          width: "260px",
          height: "260px",
          margin: "0 auto",
          userSelect: "none",
          touchAction: "none"
        }}
      >
        {/* Revealed SVG Heart Underlay */}
        <svg
          viewBox="0 0 240 240"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            filter: "drop-shadow(0 10px 28px rgba(217, 130, 145, 0.25))"
          }}
        >
          <defs>
            <linearGradient id="heartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFCF7" />
              <stop offset="100%" stopColor="#FAF0ED" />
            </linearGradient>
          </defs>
          <path
            d="M 120,65 C 120,15 30,15 30,90 C 30,140 90,175 120,215 C 150,175 210,140 210,90 C 210,15 120,15 120,65 Z"
            fill="url(#heartGrad)"
            stroke="var(--rose-pink)"
            strokeWidth="3"
          />

          {/* Animated reveal content */}
          <AnimatePresence>
            {isRevealed && (
              <>
                <motion.text
                  x="120" y="108"
                  textAnchor="middle"
                  fill="var(--soft-champagne-gold)"
                  fontFamily="'Cormorant Garamond', serif"
                  fontStyle="italic"
                  fontWeight="700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <tspan fontSize="36">{weddingConfig.reveal.dateNumber}</tspan>
                  <tspan fontSize="14" baselineShift="super">{weddingConfig.reveal.dateSuffix}</tspan>
                  <tspan fontSize="22"> {weddingConfig.reveal.dateMonthYear}</tspan>
                </motion.text>
                <motion.text
                  x="120" y="138"
                  textAnchor="middle"
                  fill="var(--dark-olive-text)"
                  fontFamily="'Marcellus', serif"
                  fontSize="12"
                  fontWeight="700"
                  letterSpacing="0.14em"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {weddingConfig.reveal.day}
                </motion.text>
                <motion.text
                  x="120" y="162"
                  textAnchor="middle"
                  fill="var(--rose-pink)"
                  fontFamily="'Montserrat', sans-serif"
                  fontSize="10"
                  letterSpacing="0.1em"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {weddingConfig.reveal.time}
                </motion.text>
              </>
            )}
          </AnimatePresence>

          {/* Static date placeholders (visible under scratch) */}
          {!isRevealed && (
            <>
              <text x="120" y="108" textAnchor="middle" fill="var(--soft-champagne-gold)" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontWeight="700">
                <tspan fontSize="36">{weddingConfig.reveal.dateNumber}</tspan>
                <tspan fontSize="14" baselineShift="super">{weddingConfig.reveal.dateSuffix}</tspan>
                <tspan fontSize="22"> {weddingConfig.reveal.dateMonthYear}</tspan>
              </text>
              <text x="120" y="138" textAnchor="middle" fill="var(--dark-olive-text)" fontFamily="'Marcellus', serif" fontSize="12" fontWeight="700" letterSpacing="0.14em">
                {weddingConfig.reveal.day}
              </text>
            </>
          )}
        </svg>

        {/* Scratchable Canvas Overlay */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
            touchAction: "none",
            zIndex: 10,
            borderRadius: "50%"
          }}
        />
      </motion.div>

      {/* Quick Reveal Button */}
      {!isRevealed && (
        <motion.button
          onClick={triggerFullReveal}
          className="btn-outline-action"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ padding: "9px 20px", fontSize: "10.5px" }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Reveal Date
        </motion.button>
      )}

      {/* Bottom floral arrangement */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.2 }}
        style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}
      >
        <img
          src="assets/welcome-flowers-bottom-CYQVvwo4.png"
          alt="Watercolour floral arrangement with hummingbird"
          style={{ width: "min(320px, 92%)", height: "auto", display: "block", margin: "0 auto" }}
        />
        <img
          src="assets/ganesh-idol-TubyYjSJ.png"
          alt="Shri Ganesh"
          style={{ width: "30px", height: "auto", opacity: 0.9 }}
        />
      </motion.div>
    </section>
  );
}
