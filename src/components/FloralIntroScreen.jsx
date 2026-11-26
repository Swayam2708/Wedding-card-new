import React from "react";
import { motion } from "framer-motion";
import Card3D from "./Card3D";

/**
 * Exact match to reference video frame_12:
 * Full-screen watercolor floral border, central oval frame with RM monogram & Rumit & Mahek,
 * watercolor beach & sailboats at bottom, and subtle "SWIPE DOWN" cue.
 * Enhanced with interactive 3D perspective tilt.
 */
export default function FloralIntroScreen({ onScrollNext }) {
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
        {/* Full-bleed Hero Watercolor Illustration (oval RM + Rumit & Mahek + beach) */}
        <motion.img
          src="assets/hero-bg-RvVOmFvi.png"
          alt="Rumit & Mahek Floral Monogram"
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

        {/* Delicate Swipe Down Indicator over the beach (exact match to frame_20/frame_12) */}
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
