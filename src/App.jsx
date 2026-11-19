import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EnvelopeOpening from "./components/EnvelopeOpening";
import FloralIntroScreen from "./components/FloralIntroScreen";
import CountdownTimer from "./components/CountdownTimer";
import SpecialRevealSection from "./components/SpecialRevealSection";
import MainInvitationSection from "./components/MainInvitationSection";
import WeddingEventsSection from "./components/WeddingEventsSection";
import FinalInvitationSection from "./components/FinalInvitationSection";
import MusicPlayer from "./components/MusicPlayer";
import PetalCanvas from "./components/PetalCanvas";

export default function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [playAudioRequested, setPlayAudioRequested] = useState(false);

  const handleEnvelopeComplete = () => {
    setIsEnvelopeOpened(true);
    setPlayAudioRequested(true);
  };

  const handleScrollNext = () => {
    const el = document.getElementById("countdown-timer-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Canvas for Flower Petals, Daisies & Golden Sparkles */}
      <PetalCanvas active={isEnvelopeOpened} />

      {/* Floating Background Music Controller */}
      <MusicPlayer isAutoPlayRequested={playAudioRequested} />

      {/* 1. Opening Luxury 3D Envelope — Full-screen overlay */}
      <AnimatePresence>
        {!isEnvelopeOpened && (
          <EnvelopeOpening
            onOpenComplete={handleEnvelopeComplete}
            onPlayAudio={() => setPlayAudioRequested(true)}
          />
        )}
      </AnimatePresence>

      {/* Main 9:16 Invitation Mobile-First Viewport */}
      <AnimatePresence>
        {isEnvelopeOpened && (
          <motion.div
            className="invitation-viewport"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* 2. Floral Introduction Screen */}
            <FloralIntroScreen onScrollNext={handleScrollNext} />

            {/* 3. Countdown Timer to Wedding */}
            <CountdownTimer />

            {/* 4. Special Reveal Section */}
            <SpecialRevealSection />

            {/* 5. Main Wedding Invitation */}
            <MainInvitationSection />

            {/* 6. Wedding Events Section (6 cards) */}
            <WeddingEventsSection />

            {/* 7. Final Invitation Section */}
            <FinalInvitationSection />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
