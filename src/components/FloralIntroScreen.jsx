import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "../weddingConfig";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: "easeOut" }
};

export default function FloralIntroScreen({ onScrollNext }) {
  const { couple, spiritual } = weddingConfig;

  return (
    <section
      id="intro-screen"
      className="invitation-page floral-intro-screen"
      style={{
        backgroundImage: "url('assets/hero-bg-RvVOmFvi.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        justifyContent: "space-between",
        paddingTop: "120px",
        paddingBottom: "36px"
      }}
    >
      {/* Central Oval Content Area — zooms in gently */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        style={{
          width: "100%",
          maxWidth: "340px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          margin: "0 auto",
          zIndex: 5
        }}
      >
        {/* Shri Ganesh Icon */}
        <motion.img
          src="assets/ganesh-idol-TubyYjSJ.png"
          alt="Shri Ganesh"
          className="float-slow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{ width: "48px", height: "auto", marginBottom: "8px" }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontFamily: "var(--font-hindi)",
            fontSize: "14.5px",
            color: "var(--soft-champagne-gold)",
            fontWeight: 700,
            letterSpacing: "0.14em",
            marginBottom: "10px"
          }}
        >
          {spiritual.shlokaTitle}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "13.5px",
            color: "var(--dark-olive-text)",
            lineHeight: 1.5,
            maxWidth: "290px",
            margin: "0 auto 10px",
            opacity: 0.9
          }}
        >
          With the blessings of our parents, we invite you to celebrate the beginning of our forever
        </motion.p>

        {/* Large Cursive Calligraphy Names — staggered reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.2, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-cursive)",
            fontSize: "clamp(56px, 14vw, 70px)",
            color: "var(--dark-olive-text)",
            lineHeight: 1.0,
            margin: "6px 0 4px",
            textShadow: "0 2px 12px rgba(198, 161, 91, 0.28)"
          }}
        >
          {couple.groom} &amp; {couple.bride}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{
            fontFamily: "var(--font-details)",
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--dark-olive-text)",
            fontWeight: 600,
            marginBottom: "6px"
          }}
        >
          {couple.brideParents}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "13px",
            color: "var(--dark-olive-text)",
            marginBottom: "10px"
          }}
        >
          together with their families invite you to celebrate
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.8 }}
          style={{
            display: "inline-block",
            padding: "8px 20px",
            border: "1.5px solid var(--rose-pink)",
            borderRadius: "30px",
            fontFamily: "var(--font-details)",
            fontSize: "11.5px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--rose-pink)",
            fontWeight: 700,
            background: "rgba(217,130,145,0.06)"
          }}
        >
          {spiritual.ceremonyTag}
        </motion.div>
      </motion.div>

      {/* Bouncing Swipe Down Indicator */}
      <motion.div
        onClick={onScrollNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          color: "var(--soft-champagne-gold)",
          fontFamily: "var(--font-details)",
          fontSize: "10.5px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          cursor: "pointer",
          zIndex: 10
        }}
      >
        <span>Scroll Down</span>
        <span className="chevron-bounce">▼</span>
      </motion.div>
    </section>
  );
}
