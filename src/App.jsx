```jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import EnvelopeOpening from "./components/EnvelopeOpening";
import FloralIntroScreen from "./components/FloralIntroScreen";
import SpecialRevealSection from "./components/SpecialRevealSection";
import MainInvitationSection from "./components/MainInvitationSection";
import WeddingEventsSection from "./components/WeddingEventsSection";
import FinalInvitationSection from "./components/FinalInvitationSection";
import MusicPlayer from "./components/MusicPlayer";
import PetalCanvas from "./components/PetalCanvas";

export default function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [playAudioRequested, setPlayAudioRequested] = useState(false);

  // Handle Wedding Invitation Envelope Opening
  const handleEnvelopeComplete = () => {
    setIsEnvelopeOpened(true);
    setPlayAudioRequested(true);
  };

  // Navigate to Wedding Date Reveal
  const handleScrollNext = () => {
    const el = document.getElementById("special-reveal-section");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 3D Floating Flower Petals & Wedding Blossoms */}
      <PetalCanvas active={isEnvelopeOpened} />

      {/* Background Wedding Music */}
      {isEnvelopeOpened && (
        <MusicPlayer isAutoPlayRequested={playAudioRequested} />
      )}

      {/* 1. Luxury Wedding Invitation Envelope */}
      <AnimatePresence>
        {!isEnvelopeOpened && (
          <EnvelopeOpening
            onOpenComplete={handleEnvelopeComplete}
            onPlayAudio={() => setPlayAudioRequested(true)}
          />
        )}
      </AnimatePresence>

      {/* Main Wedding Invitation Experience */}
      <AnimatePresence>
        {isEnvelopeOpened && (
          <motion.div
            className="invitation-viewport"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* 2. Floral Welcome Screen */}
            <FloralIntroScreen onScrollNext={handleScrollNext} />

            {/* 3. Wedding Date Reveal - 5 December 2026 */}
            <SpecialRevealSection />

            {/* 4. Main Invitation - Ayush Weds Akanksha */}
            <MainInvitationSection />

            {/* 5. Wedding Celebrations - All 7 Events */}
            <WeddingEventsSection />

            {/* 6. Family Blessings, Compliments & RSVP */}
            <FinalInvitationSection />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```