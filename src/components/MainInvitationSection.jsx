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
 * Pure ivory background, Ganesha + Sanskrit shloka, parents, cursive "Rumit with Mahek",
 * bride parents, "FOR THEIR GOL DHANA CEREMONY", and wide horizontal watercolor floral band.
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
              fontFamily: "var(--font-hindi)",
              fontSize: "13px",
              color: "var(--dark-olive-text)",
              fontWeight: 600,
              letterSpacing: "0.1em",
              marginBottom: "6px"
            }}
          >
            {spiritual.shlokaTitle}
          </div>
          <p
            style={{
              fontFamily: "var(--font-hindi)",
              fontSize: "10.5px",
              color: "var(--dark-olive-text)",
              lineHeight: 1.55,
              maxWidth: "290px",
              opacity: 0.82
            }}
          >
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
          </p>
          <p
            style={{
              fontFamily: "var(--font-supporting)",
              fontStyle: "italic",
              fontSize: "12.5px",
              color: "var(--dark-olive-text)",
              marginTop: "12px",
              maxWidth: "310px",
              lineHeight: 1.5,
              opacity: 0.9
            }}
          >
            Every beautiful beginning deserves to be celebrated<br />
            with the ones who matter most
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
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--dark-olive-text)",
                fontWeight: 500,
                marginBottom: "3px"
              }}
            >
              {couple.groomParents}
            </p>
            <p
              style={{
                fontFamily: "var(--font-supporting)",
                fontStyle: "italic",
                fontSize: "11.5px",
                color: "var(--dark-olive-text)",
                marginBottom: "10px",
                opacity: 0.88
              }}
            >
              {couple.groomParentsSubtitle}
            </p>

            {/* Couple Names */}
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
              <span
                style={{
                  fontFamily: "var(--font-supporting)",
                  fontStyle: "italic",
                  fontSize: "12px",
                  color: "var(--dark-olive-text)",
                  display: "block",
                  margin: "2px 0"
                }}
              >
                with
              </span>
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
                fontFamily: "var(--font-heading)",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--dark-olive-text)",
                fontWeight: 500,
                marginTop: "10px",
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
                fontWeight: 400
              }}
            >
              FOR THEIR GOL DHANA<br />CEREMONY
            </p>
          </motion.div>
        </Card3D>
      </div>

      {/* Wide Horizontal Floral Band with Hummingbird & Butterflies (exact match to frame_22/30) */}
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
