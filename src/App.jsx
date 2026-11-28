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

  const handleEnvelopeComplete = () => {
    setIsEnvelopeOpened(true);
    setPlayAudioRequested(true);
  };

  const handleScrollNext = () => {
    const el = document.getElementById("special-reveal-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 3D Floating Flower Petals & Blossoms */}
      <PetalCanvas active={isEnvelopeOpened} />

      {/* Minimal Speaker Toggle (mounted from page 1 so song starts immediately on tap) */}
      <MusicPlayer isAutoPlayRequested={playAudioRequested} />

      {/* 1. Opening Luxury 3D Envelope */}
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
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* 2. Floral Introduction Screen (exact video frame 12 + 3D parallax) */}
            <FloralIntroScreen onScrollNext={handleScrollNext} />

            {/* 3. Special Reveal Section ("A SPECIAL REVEAL", pink scratch heart) */}
            <SpecialRevealSection />

            {/* 4. Main Wedding Invitation (Ganesha, Sanskrit, Rumit with Mahek, floral band) */}
            <MainInvitationSection />

            {/* 5. Gol Dhana Ceremony Scalloped 3D Card on Sage Stripes */}
            <WeddingEventsSection />

            {/* 6. Final Closing Invitation (Mehta's & Shah's + corner florals + subtle RSVP) */}
            <FinalInvitationSection />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
