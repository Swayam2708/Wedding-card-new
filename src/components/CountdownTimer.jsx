import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "../weddingConfig";

// Wedding date: 20 July 2026 at 09:30 AM IST
const WEDDING_DATE = new Date("2026-07-20T09:30:00+05:30");

function pad(n) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds, done: false };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <section
      id="countdown-timer-section"
      className="invitation-page"
      style={{
        backgroundColor: "var(--light-blush-pink)",
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(198, 161, 91, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 80% 80%, rgba(217, 130, 145, 0.07) 0%, transparent 60%)
        `,
        paddingTop: "60px",
        paddingBottom: "60px",
        justifyContent: "center",
        gap: "32px"
      }}
    >
      {/* Floral top corner decoration */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", overflow: "hidden", pointerEvents: "none" }}>
        <img src="assets/corner-floral-left-DRc5FBXb.png" alt="" style={{ position: "absolute", left: 0, top: 0, width: "120px", height: "auto", opacity: 0.7 }} />
        <img src="assets/corner-floral-right-B2bRJEO4.png" alt="" style={{ position: "absolute", right: 0, top: 0, width: "120px", height: "auto", opacity: 0.7 }} />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{ textAlign: "center" }}
      >
        <img
          src="assets/ganesh-idol-TubyYjSJ.png"
          alt="Shri Ganesh"
          className="float-slow"
          style={{ width: "38px", height: "auto", marginBottom: "10px", display: "block", margin: "0 auto 10px" }}
        />
        <div
          style={{
            fontFamily: "var(--font-details)",
            fontSize: "10.5px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--soft-champagne-gold)",
            fontWeight: 700,
            marginBottom: "6px"
          }}
        >
          Counting Down To
        </div>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(26px, 6.5vw, 36px)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--dark-olive-text)",
            fontWeight: 700,
            marginBottom: "4px"
          }}
        >
          Our Special Day
        </h2>
        <p
          style={{
            fontFamily: "var(--font-cursive)",
            fontSize: "clamp(28px, 7vw, 40px)",
            color: "var(--rose-pink)",
            lineHeight: 1.1,
            marginTop: "2px"
          }}
        >
          {weddingConfig.couple.groom} &amp; {weddingConfig.couple.bride}
        </p>
        <div
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "14px",
            color: "var(--dark-olive-text)",
            opacity: 0.8,
            marginTop: "6px"
          }}
        >
          Monday · 20th July 2026
        </div>
      </motion.div>

      {/* Countdown Boxes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i + 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              minWidth: "72px"
            }}
          >
            {/* Number box */}
            <motion.div
              key={unit.value}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                width: "72px",
                height: "72px",
                background: "linear-gradient(145deg, rgba(255,252,247,0.98) 0%, rgba(241,216,207,0.5) 100%)",
                border: "1.5px solid rgba(198, 161, 91, 0.35)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(101, 99, 79, 0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Inner shimmer line */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: "rgba(198, 161, 91, 0.2)",
                  transform: "translateY(-50%)"
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(26px, 6.5vw, 36px)",
                  fontWeight: 700,
                  color: "var(--dark-olive-text)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em"
                }}
              >
                {pad(unit.value)}
              </span>
            </motion.div>
            {/* Label */}
            <span
              style={{
                fontFamily: "var(--font-details)",
                fontSize: "9.5px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--soft-champagne-gold)",
                fontWeight: 700
              }}
            >
              {unit.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Floral divider bottom */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}
      >
        <img
          src="assets/welcome-flowers-bottom-CYQVvwo4.png"
          alt="Watercolour floral arrangement"
          style={{ width: "min(300px, 88%)", height: "auto", display: "block" }}
        />
        <div
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "14px",
            color: "var(--dark-olive-text)",
            opacity: 0.75,
            textAlign: "center",
            maxWidth: "280px"
          }}
        >
          Every moment brings us closer to forever
        </div>
      </motion.div>
    </section>
  );
}
