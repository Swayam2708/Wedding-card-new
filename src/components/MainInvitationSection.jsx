import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "../weddingConfig";
import Card3D from "./Card3D";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, ease: "easeOut" }
};

export default function MainInvitationSection() {
  const { couple, spiritual, reveal } = weddingConfig;

  return (
    <section
      className="invitation-page main-invitation-section"
      style={{
        backgroundColor: "#FFFCF7",
        paddingTop: "48px",
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        justifyContent: "space-between"
      }}
    >
      <div style={{ padding: "0 24px", width: "100%", maxWidth: "420px", margin: "0 auto" }}>
        {/* Top Spiritual Invocation (from Page 2) */}
        <motion.div
          {...fadeUp}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "18px" }}
        >
          <img
            src="assets/ganesh-idol-TubyYjSJ.png"
            alt="Lord Ganesha"
            className="float-slow"
            style={{ width: "44px", height: "auto", marginBottom: "10px" }}
          />
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "13px",
              color: "var(--dark-olive-text)",
              fontWeight: 600,
              letterSpacing: "0.1em",
              marginBottom: "3px"
            }}
          >
            {spiritual.shlokaTitle}
          </div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "13px",
              color: "var(--dark-olive-text)",
              fontWeight: 600,
              letterSpacing: "0.1em",
              marginBottom: "10px"
            }}
          >
            {spiritual.shlokaSubtitle}
          </div>
        </motion.div>

        {/* 3D Typography Centerpiece */}
        <Card3D maxTilt={5} perspective={1100}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ textAlign: "center", transformStyle: "preserve-3d" }}
          >
            {/* Groom */}
            <div style={{ transform: "translateZ(20px)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-cursive)",
                  fontSize: "clamp(54px, 13.5vw, 68px)",
                  color: "var(--dark-olive-text)",
                  fontWeight: 400,
                  lineHeight: 1.0
                }}
              >
                {couple.groom}
              </h2>
            </div>

            <p
              style={{
                fontFamily: "var(--font-supporting)",
                fontSize: "11.5px",
                color: "var(--dark-olive-text)",
                lineHeight: 1.55,
                marginTop: "4px",
                marginBottom: "12px",
                opacity: 0.9
              }}
            >
              {couple.groomGrandparents}<br />
              {couple.groomParents}
            </p>

            <span
              style={{
                fontFamily: "var(--font-supporting)",
                fontStyle: "italic",
                fontSize: "14px",
                color: "var(--soft-champagne-gold)",
                display: "block",
                margin: "6px 0"
              }}
            >
              weds
            </span>

            {/* Bride */}
            <div style={{ transform: "translateZ(20px)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-cursive)",
                  fontSize: "clamp(54px, 13.5vw, 68px)",
                  color: "var(--dark-olive-text)",
                  fontWeight: 400,
                  lineHeight: 1.0
                }}
              >
                {couple.bride}
              </h2>
            </div>

            <p
              style={{
                fontFamily: "var(--font-supporting)",
                fontSize: "11.5px",
                color: "var(--dark-olive-text)",
                lineHeight: 1.55,
                marginTop: "4px",
                marginBottom: "16px",
                opacity: 0.9
              }}
            >
              {couple.brideGrandparents}<br />
              {couple.brideParents}
            </p>

            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "15px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--soft-champagne-gold)",
                fontWeight: 600
              }}
            >
              {reveal.fullDateText}
            </p>
          </motion.div>
        </Card3D>
      </div>

      {/* Wide Horizontal Floral Band with Hummingbird & Butterflies */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.15 }}
        style={{ width: "100%", marginTop: "18px", lineHeight: 0 }}
      >
        <img
          src="assets/welcome-flowers-Dy0evJgO.png"
          alt="Watercolour garden flowers with butterflies and hummingbird"
          style={{
            width: "100%",
            height: "auto",
            display: "block"
          }}
        />
      </motion.div>
    </section>
  );
}
