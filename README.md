# Royal Wedding Invitation (React & Framer Motion Edition)

A luxury, interactive, animated Indian wedding invitation web application faithfully recreating the reference video design, color palette, animations, and typography sequence.

---

## 🎨 Color Palette (Strictly Following Specifications)
- **Background ivory**: `#FFFCF7`
- **Light blush pink**: `#F5E4DF`
- **Embossed peach**: `#F1D8CF`
- **Soft champagne gold**: `#C6A15B`
- **Rose pink**: `#D98291`
- **Floral coral**: `#E99B91`
- **Pale yellow**: `#E8C879`
- **Sage green**: `#A9B99A`
- **Dark olive text**: `#65634F`
- **Soft grey**: `#DAD6CC`

---

## 📱 Canvas & Layout
- **Aspect Ratio**: 9:16 vertical canvas (1080 × 1920 reference).
- **Desktop**: Centered vertically with a maximum width of 500px and soft drop shadows.
- **Mobile**: Full-screen immersive experience (`100vw × 100vh`) with zero horizontal scrolling.

---

## 📜 Section Architecture

1. **`EnvelopeOpening.jsx`**:
   - 3D embossed baroque & floral patterns with triangular flaps.
   - Golden circular wax seal with customizable couple initials in center.
   - Floating animation with `TAP TO OPEN` prompt.
   - Flap opens to reveal floral inner envelope and smoothly slides out the invitation.
2. **`FloralIntroScreen.jsx`**:
   - Soft ivory background with watercolor flowers around all four edges (pink roses, red lilies, delicate leaves, butterflies, hummingbirds).
   - Central decorative oval frame with golden monogram initials (`RM`) and cursive names underneath.
   - Watercolor beach scene at the bottom with ocean waves, palm trees, and sailboats.
3. **`SpecialRevealSection.jsx`**:
   - Dedicated full-screen section with `A SPECIAL REVEAL`.
   - Large pink heart outline with reveal date (`20th July 2026`, `MONDAY`).
   - Interactive scratch / tap to reveal with celebratory pastel confetti burst.
   - Horizontal floral bouquet with hummingbird and small golden Ganesha at the bottom.
4. **`MainInvitationSection.jsx`**:
   - Lord Ganesha illustration, Sanskrit invocation (`॥ श्री गणेशाय नमः ॥`), and traditional shloka.
   - Family blessing text.
   - Bride & groom names in elegant cursive calligraphy (`Great Vibes`).
   - Parents' names displayed above and below.
   - Pale sage green vertical decorative stripes and wavy ornamental scalloped border.
5. **`WeddingEventsSection.jsx`**:
   - 6 individual event cards:
     1. **Gol Dhana Ceremony**
     2. **Haldi Ceremony**
     3. **Mehendi Ceremony**
     4. **Sangeet Night**
     5. **Wedding Ceremony**
     6. **Gala Reception**
   - Each card features dates, times, venues, addresses, and interactive `Open in Maps` & `Add to Calendar` buttons.
6. **`FinalInvitationSection.jsx`**:
   - Heartfelt wedding message and handwritten signature `Mehta's & Shah's`.
   - Corner watercolor florals.
   - Functional RSVP with guest counter and WhatsApp confirmation.
   - Google Maps location button.
7. **`MusicPlayer.jsx`**:
   - Floating audio bar with spinning gold vinyl disc, equalizer bars, song details (*Jashn-e-Bahaaraa*), and play/pause toggle.
8. **`PetalCanvas.jsx`**:
   - Falling rose petals, daisy blossoms, and gentle golden ambient sparkles.

---

## ⚙️ Customization

Edit **`src/weddingConfig.js`** to change any:
- Names, initials, and monograms.
- Dates, days, and times.
- Venues, addresses, and Google Maps links.
- WhatsApp RSVP phone number.
- Invocations, shlokas, and blessings.

---

## 🚀 How to Run

### Development Server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173).

### One-Click Start:
Double-click `start.bat` on your Desktop.
