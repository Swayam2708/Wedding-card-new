import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "../weddingConfig";
import Card3D from "./Card3D";

function ScallopedCard({ ev, onAddToCalendar }) {
  return (
    <Card3D maxTilt={7} perspective={1100} glare>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "370px",
          margin: "0 auto",
          padding: "52px 34px 54px",
          transformStyle: "preserve-3d"
        }}
      >
        {/* SVG Scalloped Ornamental Border */}
        <svg
          viewBox="0 0 360 470"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            filter: "drop-shadow(0 14px 28px rgba(101, 99, 79, 0.12))"
          }}
        >
          <path
            d="
              M 180,14
              C 202,14 212,28 228,34
              C 248,40 266,30 282,44
              C 298,58 290,78 304,94
              C 318,110 338,112 342,134
              C 346,154 330,170 336,192
              C 342,214 352,228 346,252
              C 340,274 330,288 336,312
              C 342,334 328,354 314,368
              C 298,384 300,404 282,418
              C 264,432 246,422 226,430
              C 206,438 198,456 180,456
              C 162,456 154,438 134,430
              C 114,422 96,432 78,418
              C 60,404 62,384 46,368
              C 32,354 18,334 24,312
              C 30,288 20,274 14,252
              C 8,228 18,214 24,192
              C 30,170 14,154 18,134
              C 22,112 42,110 56,94
              C 70,78 62,58 78,44
              C 94,30 112,40 132,34
              C 148,28 158,14 180,14 Z
            "
            fill="rgba(255, 252, 247, 0.95)"
            stroke="#DAD6CC"
            strokeWidth="2"
          />
          <path
            d="
              M 180,22
              C 199,22 208,35 224,40
              C 242,46 259,37 274,50
              C 289,63 282,81 295,96
              C 308,111 327,113 331,134
              C 335,153 320,168 326,189
              C 332,210 341,223 335,246
              C 329,267 320,281 326,304
              C 332,325 319,344 306,357
              C 291,372 293,391 276,404
              C 259,417 242,408 223,416
              C 204,424 196,440 180,440
              C 164,440 156,424 137,416
              C 118,408 101,417 84,404
              C 67,391 69,372 54,357
              C 41,344 28,325 34,304
              C 40,281 31,267 25,246
              C 19,223 28,210 34,189
              C 40,168 25,153 29,134
              C 33,113 52,111 65,96
              C 78,81 71,63 86,50
              C 101,37 118,46 136,40
              C 152,35 161,22 180,22 Z
            "
            fill="none"
            stroke="rgba(198, 161, 91, 0.28)"
            strokeWidth="1"
          />
        </svg>

        {/* 3D Floating Content Inside Scalloped Frame */}
        <div style={{ position: "relative", zIndex: 5, transform: "translateZ(26px)" }}>
          <span
            style={{
              fontFamily: "var(--font-supporting)",
              fontStyle: "italic",
              fontSize: "11px",
              color: "var(--soft-champagne-gold)",
              display: "block",
              marginBottom: "6px"
            }}
          >
            {ev.subtitle}
          </span>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(24px, 6vw, 30px)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--dark-olive-text)",
              fontWeight: 500,
              lineHeight: 1.18,
              marginBottom: "14px"
            }}
          >
            {ev.name}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-supporting)",
              fontStyle: "italic",
              fontSize: "13px",
              color: "var(--dark-olive-text)",
              marginBottom: "4px"
            }}
          >
            {ev.date}
          </p>

          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "13px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--dark-olive-text)",
              marginBottom: "12px"
            }}
          >
            {ev.time}
          </p>

          {/* Watercolor Illustration */}
          <div style={{ margin: "10px auto 12px", maxWidth: "115px" }}>
            <img
              src={ev.illustration}
              alt={ev.name}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "68px",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
                borderRadius: "8px"
              }}
            />
          </div>

          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "16.5px",
              fontWeight: 600,
              color: "var(--dark-olive-text)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "3px"
            }}
          >
            {ev.venue}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-details)",
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--dark-olive-text)",
              opacity: 0.78,
              marginBottom: "16px"
            }}
          >
            {ev.address}
          </p>

          {/* Minimal Action Links */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <a
              href={ev.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-minimal-link"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              OPEN IN MAPS
            </a>

            <button
              type="button"
              onClick={() => onAddToCalendar(ev)}
              className="btn-minimal-link"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              ADD TO CALENDAR
            </button>
          </div>
        </div>
      </motion.div>
    </Card3D>
  );
}

export default function WeddingEventsSection() {
  const events = weddingConfig.events;

  const handleAddToCalendar = (ev) => {
    const title = encodeURIComponent(`${ev.name} - ${weddingConfig.couple.groom} & ${weddingConfig.couple.bride}`);
    const details = encodeURIComponent(`We cordially invite you to celebrate ${ev.name}.\nVenue: ${ev.venue}, ${ev.address}`);
    const location = encodeURIComponent(`${ev.venue}, ${ev.address}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${ev.calendarIso}&details=${details}&location=${location}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="wedding-celebrations"
      className="invitation-page sage-stripes-bg"
      style={{
        paddingTop: "48px",
        paddingBottom: "48px",
        justifyContent: "flex-start",
        gap: "30px",
        minHeight: "auto"
      }}
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(24px, 6vw, 30px)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--dark-olive-text)",
            fontWeight: 500
          }}
        >
          Wedding Celebrations
        </h2>
        <div
          style={{
            width: "70px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--soft-champagne-gold), transparent)",
            margin: "10px auto 0"
          }}
        />
      </motion.div>

      {/* All 7 Scalloped 3D Event Cards */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "28px" }}>
        {events.map((ev) => (
          <ScallopedCard key={ev.id} ev={ev} onAddToCalendar={handleAddToCalendar} />
        ))}
      </div>
    </section>
  );
}
