import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "../weddingConfig";

export default function WeddingEventsSection() {
  const events = weddingConfig.events;

  const handleAddToCalendar = (ev) => {
    const title = encodeURIComponent(`${ev.name} - ${weddingConfig.couple.groom} & ${weddingConfig.couple.bride}`);
    const details = encodeURIComponent(`We cordially invite you to celebrate our ${ev.name}.\nVenue: ${ev.venue}, ${ev.address}`);
    const location = encodeURIComponent(`${ev.venue}, ${ev.address}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${ev.calendarIso}&details=${details}&location=${location}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="wedding-events-container">
      {events.map((ev, idx) => (
        <section
          key={ev.id}
          id={`event-${ev.id}`}
          className="invitation-page sage-stripes-bg"
          style={{
            backgroundColor: "var(--bg-ivory)",
            paddingTop: "52px",
            paddingBottom: "52px",
            justifyContent: "space-between"
          }}
        >
          {/* Event counter header */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            style={{ textAlign: "center" }}
          >
            <span
              style={{
                fontFamily: "var(--font-details)",
                fontSize: "10.5px",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--soft-champagne-gold)",
                fontWeight: 700,
                display: "block",
                marginBottom: "4px"
              }}
            >
              Event {idx + 1} of {events.length}
            </span>
            <div
              style={{
                fontFamily: "var(--font-supporting)",
                fontStyle: "italic",
                fontSize: "14.5px",
                color: "var(--dark-olive-text)",
                opacity: 0.85
              }}
            >
              {ev.subtitle}
            </div>
          </motion.div>

          {/* Wavy Ornamental Event Card */}
          <motion.div
            className="wavy-ornamental-frame"
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          >
            {/* Accent color top line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "10%",
                right: "10%",
                height: "3px",
                borderRadius: "0 0 3px 3px",
                background: `linear-gradient(90deg, transparent, ${ev.accent}, transparent)`
              }}
            />

            {/* Event Name */}
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(22px, 5.5vw, 28px)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--dark-olive-text)",
                fontWeight: 700,
                marginBottom: "10px",
                lineHeight: 1.2
              }}
            >
              {ev.name}
            </h2>

            {/* Date & Time pill */}
            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                alignItems: "center",
                marginBottom: "14px"
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-supporting)",
                  fontStyle: "italic",
                  fontSize: "15px",
                  color: "var(--dark-olive-text)"
                }}
              >
                {ev.date}
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 16px",
                  background: `rgba(${ev.accent === "#E8C879" ? "232,200,121" : ev.accent === "#A9B99A" ? "169,185,154" : ev.accent === "#D98291" ? "217,130,145" : ev.accent === "#E99B91" ? "233,155,145" : "198,161,91"}, 0.14)`,
                  borderRadius: "20px",
                  border: `1px solid ${ev.accent}44`,
                  fontFamily: "var(--font-details)",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: ev.accent === "#E8C879" ? "#9E7422" : ev.accent === "#A9B99A" ? "#5A6E50" : ev.accent === "#D98291" ? "#A14E5E" : ev.accent === "#E99B91" ? "#A05848" : "var(--soft-champagne-gold)",
                  fontWeight: 700
                }}
              >
                {ev.time}
              </div>
            </motion.div>

            {/* Event Illustration */}
            <div style={{ margin: "0 auto 14px", maxWidth: "270px" }}>
              <motion.img
                src={ev.illustration}
                alt={ev.venue}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{
                  width: "100%",
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  boxShadow: `0 6px 20px ${ev.accent}30`,
                  border: `1px solid ${ev.accent}30`
                }}
              />
            </div>

            {/* Venue */}
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--dark-olive-text)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "4px"
              }}
            >
              {ev.venue}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-details)",
                fontSize: "11.5px",
                color: "var(--dark-olive-text)",
                opacity: 0.8,
                marginBottom: "20px"
              }}
            >
              {ev.address}
            </p>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.a
                href={ev.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-action"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Open in Maps
              </motion.a>
              <motion.button
                type="button"
                onClick={() => handleAddToCalendar(ev)}
                className="btn-outline-action"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Add to Calendar
              </motion.button>
            </div>
          </motion.div>

          {/* Floral Divider Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              src="assets/divider.webp"
              alt=""
              style={{ width: "150px", height: "auto", opacity: 0.65 }}
            />
          </motion.div>
        </section>
      ))}
    </div>
  );
}
