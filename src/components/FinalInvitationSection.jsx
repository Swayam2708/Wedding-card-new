import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "../weddingConfig";

/**
 * Exact match to reference video frame_26:
 * Pure ivory #FFFCF7, top-right & bottom-left watercolor floral corners,
 * heartfelt closing message, "Warm Regards," and cursive "Mehta's & Shah's".
 * Includes a subtle expandable RSVP & Maps drawer.
 */
export default function FinalInvitationSection() {
  const { closing, rsvp, couple } = weddingConfig;
  const [showRsvp, setShowRsvp] = useState(false);
  const [guestCount, setGuestCount] = useState(rsvp.defaultGuests || 2);
  const [guestName, setGuestName] = useState("");

  const handleSendWhatsAppRsvp = () => {
    const name = guestName.trim() || "Guest";
    const text = encodeURIComponent(
      `Heartfelt Congratulations ${couple.groom} & ${couple.bride}!\n` +
      `We are delighted to confirm our attendance for your celebrations.\n\n` +
      `Guest Name: ${name}\n` +
      `Attending Guests: ${guestCount}\n\n` +
      `Looking forward to celebrating with you at ${rsvp.locationAddress}!`
    );
    window.open(`https://wa.me/${rsvp.phone}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="invitation-page final-invitation-section"
      style={{
        backgroundColor: "#FFFCF7",
        paddingTop: "90px",
        paddingBottom: "70px",
        position: "relative",
        justifyContent: "center",
        minHeight: "82vh"
      }}
    >
      {/* Top-Right Corner Watercolour Floral Arrangement (matching frame_26) */}
      <img
        src="assets/floral-top-right-CS2uPFt2.png"
        alt="Floral Corner"
        style={{
          position: "absolute",
          top: "14px",
          right: "0",
          width: "140px",
          height: "auto",
          pointerEvents: "none"
        }}
      />

      {/* Bottom-Left Corner Watercolour Floral Arrangement (matching frame_26) */}
      <img
        src="assets/floral-bottom-left-_kTL5SSX.png"
        alt="Floral Corner"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "0",
          width: "150px",
          height: "auto",
          pointerEvents: "none"
        }}
      />

      {/* Heartfelt Closing Message */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ width: "100%", maxWidth: "340px", margin: "0 auto", position: "relative", zIndex: 5 }}
      >
        <p
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "14.5px",
            lineHeight: 1.65,
            color: "var(--dark-olive-text)",
            marginBottom: "18px"
          }}
        >
          We would be delighted<br />
          to share this beautiful beginning with you
        </p>

        <p
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "14.5px",
            lineHeight: 1.65,
            color: "var(--dark-olive-text)",
            marginBottom: "34px"
          }}
        >
          With love in our hearts,<br />
          we await your gracious presence
        </p>

        <p
          style={{
            fontFamily: "var(--font-supporting)",
            fontSize: "11px",
            color: "var(--dark-olive-text)",
            marginBottom: "6px"
          }}
        >
          {closing.signOff}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-cursive)",
            fontSize: "clamp(40px, 10vw, 52px)",
            color: "var(--dark-olive-text)",
            fontWeight: 400,
            lineHeight: 1.15
          }}
        >
          {closing.familyNames}
        </h3>

        {/* Subtle RSVP / Directions Toggle */}
        <div style={{ marginTop: "32px" }}>
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
