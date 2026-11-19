import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "../weddingConfig";

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } }
};

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, ease: "easeOut" }
};

export default function MainInvitationSection() {
  const { couple, spiritual } = weddingConfig;

  return (
    <section
      className="invitation-page main-invitation-section sage-stripes-bg"
      style={{
        backgroundColor: "var(--bg-ivory)",
        paddingTop: "54px",
        paddingBottom: "36px",
        gap: "16px"
      }}
    >
      {/* Top Spiritual Invocation */}
      <motion.div
        {...fadeUp}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <motion.img
          src="assets/ganesh-idol-TubyYjSJ.png"
          alt="Lord Ganesha"
          className="float-slow"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: "48px", height: "auto", marginBottom: "10px" }}
        />
        <div
          style={{
            fontFamily: "var(--font-hindi)",
            fontSize: "15px",
            color: "var(--soft-champagne-gold)",
            fontWeight: 700,
            letterSpacing: "0.14em",
            marginBottom: "6px"
          }}
        >
          {spiritual.shlokaTitle}
        </div>
        <p
          style={{
            fontFamily: "var(--font-hindi)",
            fontSize: "12px",
            color: "var(--dark-olive-text)",
            lineHeight: 1.65,
            maxWidth: "310px",
            opacity: 0.82,
            textAlign: "center"
          }}
        >
          {spiritual.shlokaText}
        </p>
        <p
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "13.5px",
            color: "var(--dark-olive-text)",
            marginTop: "12px",
            maxWidth: "310px",
            lineHeight: 1.5
          }}
        >
          {spiritual.blessingText}
        </p>
      </motion.div>

      {/* Thin gold divider line */}
      <motion.div
        {...fadeUp}
        style={{
          width: "80px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--soft-champagne-gold), transparent)",
          margin: "0 auto"
        }}
      />

      {/* Center Invitation Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.1 }}
        style={{
          width: "100%",
          maxWidth: "380px",
          margin: "0 auto",
          textAlign: "center",
          padding: "28px 24px",
          background: "rgba(255,252,247,0.7)",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(101,99,79,0.06)",
          border: "1px solid rgba(198,161,91,0.18)",
          backdropFilter: "blur(4px)"
        }}
      >
        {/* Groom Parents */}
        <motion.p
          {...fadeUp}
          style={{
            fontFamily: "var(--font-details)",
            fontSize: "11.5px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--dark-olive-text)",
            fontWeight: 600,
            marginBottom: "4px"
          }}
        >
          {couple.groomParents}
        </motion.p>
        <motion.p
          {...fadeUp}
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "13.5px",
            color: "var(--dark-olive-text)",
            marginBottom: "12px",
            opacity: 0.85
          }}
        >
          {couple.groomParentsSubtitle}
        </motion.p>

        {/* Couple Names — large calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2 }}
          style={{ margin: "8px 0" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cursive)",
              fontSize: "clamp(58px, 14.5vw, 76px)",
              color: "var(--dark-olive-text)",
              lineHeight: 0.92,
              textShadow: "0 2px 12px rgba(198, 161, 91, 0.22)"
            }}
          >
            {couple.groom}
          </h2>
          <span
            style={{
              fontFamily: "var(--font-supporting)",
              fontStyle: "italic",
              fontSize: "16px",
              color: "var(--soft-champagne-gold)",
              display: "block",
              margin: "4px 0"
            }}
          >
            with
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cursive)",
              fontSize: "clamp(58px, 14.5vw, 76px)",
              color: "var(--dark-olive-text)",
              lineHeight: 0.92,
              textShadow: "0 2px 12px rgba(198, 161, 91, 0.22)"
            }}
          >
            {couple.bride}
          </h2>
        </motion.div>

        {/* Thin gold divider */}
        <div style={{
          width: "60px", height: "1px",
          background: "linear-gradient(90deg, transparent, var(--soft-champagne-gold), transparent)",
          margin: "14px auto"
        }} />

        {/* Bride Parents */}
        <motion.p
          {...fadeUp}
          style={{
            fontFamily: "var(--font-details)",
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--dark-olive-text)",
            fontWeight: 600,
            marginBottom: "10px",
            opacity: 0.9
          }}
        >
          {couple.brideParents}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
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

      {/* Bottom Watercolour Flowers */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        style={{ width: "100%" }}
      >
        <img
          src="assets/welcome-flowers-Dy0evJgO.png"
          alt="Watercolour garden flowers with butterflies and hummingbird"
          style={{ width: "min(380px, 100%)", height: "auto", display: "block", margin: "0 auto" }}
        />
      </motion.div>
    </section>
  );
}
