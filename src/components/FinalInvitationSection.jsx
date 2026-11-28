import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "../weddingConfig";

export default function FinalInvitationSection() {
  const { closing, rsvp, couple } = weddingConfig;
  const [showRsvp, setShowRsvp] = useState(false);
  const [guestCount, setGuestCount] = useState(rsvp.defaultGuests || 2);
  const [guestName, setGuestName] = useState("");

  const handleSendWhatsAppRsvp = () => {
    const name = guestName.trim() || "Guest";
    const text = encodeURIComponent(
      `Heartfelt Congratulations ${couple.groom} & ${couple.bride}!\n` +
      `We are delighted to confirm our attendance for your wedding celebrations.\n\n` +
      `Guest Name: ${name}\n` +
      `Attending Guests: ${guestCount}\n\n` +
      `Looking forward to celebrating with you in Dharamshala!`
    );
    window.open(`https://wa.me/${rsvp.phone}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="invitation-page final-invitation-section"
      style={{
        backgroundColor: "#FFFCF7",
        paddingTop: "76px",
        paddingBottom: "76px",
        position: "relative",
        justifyContent: "center",
        minHeight: "95vh"
      }}
    >
      {/* Top-Right Corner Watercolour Floral Arrangement */}
      <img
        src="assets/floral-top-right-CS2uPFt2.png"
        alt="Floral Corner"
        style={{
          position: "absolute",
          top: "14px",
          right: "0",
          width: "130px",
          height: "auto",
          pointerEvents: "none"
        }}
      />

      {/* Bottom-Left Corner Watercolour Floral Arrangement */}
      <img
        src="assets/floral-bottom-left-_kTL5SSX.png"
        alt="Floral Corner"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "0",
          width: "140px",
          height: "auto",
          pointerEvents: "none"
        }}
      />

      {/* Family Blessings, Compliments & RSVP Details (from Pages 1 & 4) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ width: "100%", maxWidth: "350px", margin: "0 auto", position: "relative", zIndex: 5 }}
      >
        {/* With Best Wishes and Blessings */}
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "17px",
            letterSpacing: "0.06em",
            color: "var(--rose-pink)",
            fontWeight: 600,
            marginBottom: "6px"
          }}
        >
          {closing.wishesTitle}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-supporting)",
            fontSize: "12px",
            lineHeight: 1.6,
            color: "var(--dark-olive-text)",
            marginBottom: "18px"
          }}
        >
          {closing.wishesNames}
        </p>

        {/* With Best Compliments From */}
        <h4
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "15px",
            letterSpacing: "0.06em",
            color: "var(--soft-champagne-gold)",
            fontWeight: 600,
            marginBottom: "6px"
          }}
        >
          {closing.complimentsTitle}
        </h4>
        <div
          style={{
            fontFamily: "var(--font-supporting)",
            fontSize: "12px",
            lineHeight: 1.65,
            color: "var(--dark-olive-text)",
            marginBottom: "18px"
          }}
        >
          {closing.complimentsNames.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        {/* Maternal Family */}
        <h4
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "15px",
            letterSpacing: "0.06em",
            color: "var(--soft-champagne-gold)",
            fontWeight: 600,
            marginBottom: "6px"
          }}
        >
          {closing.maternalTitle}
        </h4>
        <div
          style={{
            fontFamily: "var(--font-supporting)",
            fontSize: "12px",
            lineHeight: 1.65,
            color: "var(--dark-olive-text)",
            marginBottom: "20px"
          }}
        >
          {closing.maternalNames.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        {/* R.S.V.P. & From */}
        <h4
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "15px",
            letterSpacing: "0.12em",
            color: "var(--rose-pink)",
            fontWeight: 600,
            marginBottom: "5px"
          }}
        >
          {closing.rsvpTitle}
        </h4>
        <div
          style={{
            fontFamily: "var(--font-supporting)",
            fontSize: "12px",
            lineHeight: 1.6,
            color: "var(--dark-olive-text)",
            marginBottom: "10px"
          }}
        >
          {closing.rsvpNames.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-supporting)",
            fontSize: "11px",
            lineHeight: 1.55,
            color: "var(--dark-olive-text)",
            opacity: 0.85,
            marginBottom: "16px"
          }}
        >
          {closing.fromAddress}<br />
          Mobile: {closing.fromPhones}
        </p>

        <p
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "13px",
            color: "var(--dark-olive-text)",
            marginBottom: "20px"
          }}
        >
          "{closing.quote}"
        </p>

        <p
          style={{
            fontFamily: "var(--font-supporting)",
            fontSize: "11px",
            color: "var(--dark-olive-text)",
            marginBottom: "4px"
          }}
        >
          {closing.signOff}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-cursive)",
            fontSize: "clamp(36px, 9vw, 46px)",
            color: "var(--dark-olive-text)",
            fontWeight: 400,
            lineHeight: 1.15
          }}
        >
          {closing.familyNames}
        </h3>

        {/* Subtle RSVP / Directions Toggle */}
        <div style={{ marginTop: "26px" }}>
          <button
            type="button"
            onClick={() => setShowRsvp((v) => !v)}
            className="btn-outline-action"
            style={{ fontSize: "10px", padding: "8px 18px" }}
          >
            {showRsvp ? "Close RSVP" : "RSVP & Venue Directions"}
          </button>
        </div>

        <AnimatePresence>
          {showRsvp && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              style={{
                marginTop: "18px",
                background: "rgba(255, 255, 255, 0.95)",
                border: "1px solid rgba(198, 161, 91, 0.35)",
                borderRadius: "18px",
                padding: "20px 16px",
                boxShadow: "0 10px 30px rgba(101, 99, 79, 0.1)"
              }}
            >
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Your Name / Family Name"
                style={{
                  width: "100%",
                  background: "var(--bg-ivory)",
                  border: "1px solid rgba(198, 161, 91, 0.3)",
                  borderRadius: "10px",
                  padding: "9px 12px",
                  fontFamily: "var(--font-supporting)",
                  fontSize: "14px",
                  color: "var(--dark-olive-text)",
                  textAlign: "center",
                  outline: "none",
                  marginBottom: "12px"
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "var(--bg-ivory)",
                  border: "1px solid rgba(198, 161, 91, 0.25)",
                  borderRadius: "10px",
                  padding: "8px 12px",
                  marginBottom: "14px"
                }}
              >
                <span style={{ fontFamily: "var(--font-details)", fontSize: "11px", fontWeight: 600 }}>
                  Guests:
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      background: "#FFF", border: "1px solid var(--soft-champagne-gold)",
                      color: "var(--soft-champagne-gold)", cursor: "pointer"
                    }}
                  >−</button>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: "16px", fontWeight: 700 }}>
                    {guestCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
                    style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      background: "#FFF", border: "1px solid var(--soft-champagne-gold)",
                      color: "var(--soft-champagne-gold)", cursor: "pointer"
                    }}
                  >+</button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSendWhatsAppRsvp}
                className="btn-gold-action"
                style={{ width: "100%", marginBottom: "8px" }}
              >
                Confirm on WhatsApp
              </button>
              <a
                href={rsvp.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-action"
                style={{ width: "100%" }}
              >
                Open in Google Maps
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
