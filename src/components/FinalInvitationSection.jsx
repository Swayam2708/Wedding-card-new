import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "../weddingConfig";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: "easeOut" }
};

export default function FinalInvitationSection() {
  const { closing, rsvp, couple } = weddingConfig;
  const [guestCount, setGuestCount] = useState(rsvp.defaultGuests || 2);
  const [guestName, setGuestName] = useState("");
  const [rsvpSent, setRsvpSent] = useState(false);

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
    setRsvpSent(true);
  };

  return (
    <section
      className="invitation-page final-invitation-section"
      style={{
        backgroundColor: "var(--bg-ivory)",
        paddingTop: "60px",
        paddingBottom: "70px",
        justifyContent: "space-between",
        backgroundImage: `
          radial-gradient(ellipse at 100% 0%, rgba(198,161,91,0.07) 0%, transparent 50%),
          radial-gradient(ellipse at 0% 100%, rgba(169,185,154,0.07) 0%, transparent 50%)
        `
      }}
    >
      {/* Corner Watercolour Floral Decorations */}
      <img
        src="assets/floral-top-right-CS2uPFt2.png"
        alt=""
        style={{ position: "absolute", top: 0, right: 0, width: "100px", height: "auto", pointerEvents: "none", opacity: 0.9 }}
      />
      <img
        src="assets/floral-bottom-left-_kTL5SSX.png"
        alt=""
        style={{ position: "absolute", bottom: 0, left: 0, width: "100px", height: "auto", pointerEvents: "none", opacity: 0.9 }}
      />

      {/* Heartfelt Closing Message */}
      <motion.div
        {...fadeUp}
        style={{ width: "100%", maxWidth: "360px", margin: "0 auto" }}
      >
        <img
          src="assets/ganesh-idol-TubyYjSJ.png"
          alt="Shri Ganesh"
          className="float-slow"
          style={{ width: "38px", height: "auto", display: "block", margin: "0 auto 14px" }}
        />

        <p
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "16.5px",
            lineHeight: 1.65,
            color: "var(--dark-olive-text)",
            marginBottom: "12px"
          }}
        >
          "{closing.messageLine1}"
        </p>
        <p
          style={{
            fontFamily: "var(--font-supporting)",
            fontStyle: "italic",
            fontSize: "14.5px",
            lineHeight: 1.55,
            color: "var(--dark-olive-text)",
            marginBottom: "24px",
            opacity: 0.9
          }}
        >
          {closing.messageLine2}
        </p>

        {/* Gold divider */}
        <div style={{
          width: "80px", height: "1px",
          background: "linear-gradient(90deg, transparent, var(--soft-champagne-gold), transparent)",
          margin: "0 auto 20px"
        }} />

        {/* Elegant Cursive Signature */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-details)",
              fontSize: "10.5px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--soft-champagne-gold)",
              fontWeight: 700,
              marginBottom: "4px"
            }}
          >
            {closing.signOff}
          </p>
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-cursive)",
              fontSize: "clamp(44px, 11vw, 60px)",
              color: "var(--dark-olive-text)",
              lineHeight: 1.1,
              textShadow: "0 2px 10px rgba(198, 161, 91, 0.2)"
            }}
          >
            {closing.familyNames}
          </motion.h3>
          <p
            style={{
              fontFamily: "var(--font-details)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "var(--dark-olive-text)",
              opacity: 0.72,
              marginTop: "6px"
            }}
          >
            {closing.location}
          </p>
        </div>
      </motion.div>

      {/* Interactive RSVP Card */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "linear-gradient(170deg, rgba(255,252,247,0.98) 0%, rgba(241,216,207,0.2) 100%)",
          border: "1.5px solid rgba(198, 161, 91, 0.35)",
          borderRadius: "24px",
          padding: "28px 22px",
          boxShadow: "0 12px 40px rgba(101, 99, 79, 0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
          margin: "0 auto"
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-details)",
            fontSize: "10px",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "var(--soft-champagne-gold)",
            fontWeight: 700,
            display: "block",
            marginBottom: "4px"
          }}
        >
          Kindly Respond
        </span>
        <h4
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "21px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--dark-olive-text)",
            fontWeight: 700,
            marginBottom: "18px"
          }}
        >
          RSVP &amp; Attendance
        </h4>

        {/* Guest Name Input */}
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="Your Name / Family Name"
          style={{
            width: "100%",
            background: "var(--bg-ivory)",
            border: "1px solid rgba(198, 161, 91, 0.3)",
            borderRadius: "12px",
            padding: "11px 14px",
            fontFamily: "var(--font-supporting)",
            fontSize: "15px",
            color: "var(--dark-olive-text)",
            textAlign: "center",
            outline: "none",
            marginBottom: "14px",
            transition: "border-color 0.2s"
          }}
          onFocus={(e) => { e.target.style.borderColor = "rgba(198,161,91,0.7)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(198,161,91,0.3)"; }}
        />

        {/* Guest Counter */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "var(--bg-ivory)",
            border: "1px solid rgba(198, 161, 91, 0.25)",
            borderRadius: "12px",
            padding: "10px 16px",
            marginBottom: "18px"
          }}
        >
          <span style={{ fontFamily: "var(--font-details)", fontSize: "12px", color: "var(--dark-olive-text)", fontWeight: 600 }}>
            Attending Guests:
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <motion.button
              type="button"
              onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "32px", height: "32px",
                borderRadius: "50%",
                background: "#FFFFFF",
                border: "1.5px solid var(--soft-champagne-gold)",
                color: "var(--soft-champagne-gold)",
                fontSize: "18px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              −
            </motion.button>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 700, minWidth: "18px", textAlign: "center" }}>
              {guestCount}
            </span>
            <motion.button
              type="button"
              onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "32px", height: "32px",
                borderRadius: "50%",
                background: "#FFFFFF",
                border: "1.5px solid var(--soft-champagne-gold)",
                color: "var(--soft-champagne-gold)",
                fontSize: "18px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              +
            </motion.button>
          </div>
        </div>

        {/* WhatsApp RSVP */}
        <AnimatePresence mode="wait">
          {!rsvpSent ? (
            <motion.button
              key="rsvp-btn"
              type="button"
              onClick={handleSendWhatsAppRsvp}
              className="btn-gold-action"
              style={{ width: "100%", marginBottom: "10px" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Confirmation via WhatsApp
            </motion.button>
          ) : (
            <motion.div
              key="rsvp-confirmed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                width: "100%",
                marginBottom: "10px",
                padding: "12px",
                background: "rgba(169,185,154,0.18)",
                border: "1px solid rgba(169,185,154,0.5)",
                borderRadius: "30px",
                fontFamily: "var(--font-details)",
                fontSize: "11.5px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#5A6E50",
                textAlign: "center"
              }}
            >
              Confirmation Sent — See You There!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Maps Button */}
        <motion.a
          href={rsvp.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-action"
          style={{ width: "100%", display: "flex" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Open Location in Google Maps
        </motion.a>
      </motion.div>

      {/* Bottom floral art */}
      <motion.img
        src="assets/welcome-flowers-Dy0evJgO.png"
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        style={{ width: "min(340px, 95%)", height: "auto", display: "block", margin: "0 auto", opacity: 0.7 }}
      />
    </section>
  );
}
