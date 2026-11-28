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

/**
 * Exact match to reference video frame_22 & frame_30:
 * Pure ivory background, Ganesha + Sanskrit/Hindi invocations, grandparents & parents,
 * cursive "Ayush weds Akanksha", and wide horizontal watercolor floral band.
 */
export default function MainInvitationSection() {
  const { couple, spiritual } = weddingConfig;

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
        {/* Top Spiritual Invocation */}
        <motion.div
          {...fadeUp}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "18px" }}
        >
          <img
            src="assets/ganesh-idol-TubyYjSJ.png"
            alt="Lord Ganesha"
            className="float-slow"
            style={{ width: "42px", height: "auto", marginBottom: "8px" }}
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
              fontSize: "12.5px",
              color: "var(--dark-olive-text)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              marginBottom: "6px"
            }}
          >
            {spiritual.shlokaSubtitle}
          </div>
          <p
            style={{
              fontFamily: "var(--font-supporting)",
              fontStyle: "italic",
              fontSize: "12px",
              color: "var(--dark-olive-text)",
              marginTop: "8px",
              maxWidth: "310px",
              lineHeight: 1.5,
              opacity: 0.9
            }}
          >
            {spiritual.blessingText}
          </p>
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
            {/* Groom & His Family */}
            <div style={{ margin: "6px 0", transform: "translateZ(22px)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-cursive)",
                  fontSize: "clamp(58px, 14vw, 72px)",
                  color: "var(--dark-olive-text)",
                  fontWeight: 400,
                  lineHeight: 0.95
                }}
              >
                {couple.groom}
              </h2>
            </div>

            <p
              style={{
                fontFamily: "var(--font-supporting)",
                fontStyle: "italic",
                fontSize: "11.5px",
                color: "var(--dark-olive-text)",
                lineHeight: 1.45,
                marginBottom: "3px",
                opacity: 0.9
              }}
            >
              {couple.groomGrandparents}
            </p>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "12.5px",
                letterSpacing: "0.06em",
                color: "var(--dark-olive-text)",
                fontWeight: 500,
                marginBottom: "8px"
              }}
            >
              {couple.groomParents}
            </p>

            <span
              style={{
                fontFamily: "var(--font-supporting)",
                fontStyle: "italic",
                fontSize: "13px",
                color: "var(--dark-olive-text)",
                display: "block",
                margin: "4px 0"
              }}
            >
              weds
            </span>

            {/* Bride & Her Family */}
            <div style={{ margin: "6px 0", transform: "translateZ(22px)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-cursive)",
                  fontSize: "clamp(58px, 14vw, 72px)",
                  color: "var(--dark-olive-text)",
                  fontWeight: 400,
                  lineHeight: 0.95
                }}
              >
                {couple.bride}
              </h2>
            </div>

            <p
              style={{
                fontFamily: "var(--font-supporting)",
                fontStyle: "italic",
                fontSize: "11.5px",
                color: "var(--dark-olive-text)",
                lineHeight: 1.45,
                marginTop: "6px",
                marginBottom: "3px",
                opacity: 0.9
              }}
            >
              {couple.brideGrandparents}
            </p>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "12.5px",
                letterSpacing: "0.06em",
                color: "var(--dark-olive-text)",
                fontWeight: 500,
                marginBottom: "14px"
              }}
            >
              {couple.brideParents}
            </p>

            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "13.5px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--dark-olive-text)",
                lineHeight: 1.5,
                fontWeight: 500
              }}
            >
              SATURDAY, 5TH DECEMBER, 2026<br />
              WEDDING CELEBRATIONS
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
        style={{ width: "100%", marginTop: "14px", lineHeight: 0 }}
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
