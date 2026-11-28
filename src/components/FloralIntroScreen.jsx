import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "../weddingConfig";
import Card3D from "./Card3D";

export default function FloralIntroScreen({ onScrollNext }) {
  const { couple, reveal } = weddingConfig;

  return (
    <section
      id="intro-screen"
      className="invitation-page floral-intro-screen"
      style={{
        padding: 0,
        backgroundColor: "var(--bg-ivory)",
        position: "relative",
        justifyContent: "flex-end"
      }}
    >
      <Card3D
        maxTilt={5}
        perspective={1200}
        glare
        style={{
          width: "100%",
          minHeight: "100vh",
          minHeight: "100svh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        {/* Full-bleed Watercolor Floral Border & Beach */}
        <motion.img
          src="assets/hero-bg-RvVOmFvi.png"
          alt="Ayush & Akanksha Floral Invitation"
          initial={{ scale: 1.03, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            pointerEvents: "none"
          }}
        />

        {/* Central Ivory Oval Overlay displaying Ayush & Akanksha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.25 }}
          style={{
            position: "absolute",
            top: "20.5%",
            left: "50%",
            transform: "translateX(-50%) translateZ(26px)",
            width: "54%",
            maxWidth: "240px",
            height: "36%",
            maxHeight: "290px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, #FFFCF7 68%, rgba(255, 252, 247, 0.95) 86%, rgba(255, 252, 247, 0) 100%)",
            border: "1.5px solid rgba(198, 161, 91, 0.45)",
            boxShadow: "inset 0 0 24px rgba(245, 228, 223, 0.35), 0 8px 26px rgba(101, 99, 79, 0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            textAlign: "center",
            zIndex: 8
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-details)",
              fontSize: "8.5px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--soft-champagne-gold)",
              fontWeight: 600,
              marginBottom: "6px"
            }}
          >
            Wedding Invitation
          </span>

          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 8vw, 40px)",
              color: "var(--soft-champagne-gold)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              lineHeight: 1,
              marginBottom: "6px"
            }}
          >
            {couple.monogram}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-cursive)",
              fontSize: "clamp(30px, 7.5vw, 38px)",
              color: "var(--dark-olive-text)",
              fontWeight: 400,
              lineHeight: 1.05,
              marginBottom: "8px"
            }}
          >
            {couple.groom} &amp; {couple.bride}
          </h1>

          <span
            style={{
              fontFamily: "var(--font-supporting)",
              fontStyle: "italic",
              fontSize: "11px",
              color: "var(--dark-olive-text)",
              opacity: 0.85
            }}
          >
            {reveal.fullDateText}
          </span>
        </motion.div>

        {/* Delicate Swipe Down Indicator over the beach */}
        <motion.div
          onClick={onScrollNext}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            position: "relative",
            zIndex: 10,
            marginBottom: "28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3px",
            color: "var(--dark-olive-text)",
            fontFamily: "var(--font-details)",
            fontSize: "9.5px",
            fontWeight: 500,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            cursor: "pointer",
            transform: "translateZ(30px)",
            textShadow: "0 1px 6px rgba(255, 252, 247, 0.9)"
          }}
        >
          <span>SWIPE DOWN</span>
          <svg
            className="chevron-bounce"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </Card3D>
    </section>
  );
}
