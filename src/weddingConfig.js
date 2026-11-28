/**
 * WEDDING INVITATION CONFIGURATION
 * All names, dates, venues, family details, and settings are editable here.
 */

export const weddingConfig = {
  // Couple Details
  couple: {
    groom: "Rumit",
    groomInitials: "R",
    bride: "Mahek",
    brideInitials: "M",
    monogram: "RM",
    groomParents: "MRS. SHILPA & MR. BHARAT MEHTA",
    groomParentsSubtitle: "joyfully invite you to celebrate the bond of their beloved son",
    brideParents: "D/O MRS. BINA & MR. NIREN SHAH",
  },

  // Invocations & Blessings
  spiritual: {
    shlokaTitle: "॥ श्री गणेशाय नमः ॥",
    shlokaText: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    blessingText: "Every beautiful beginning deserves to be celebrated with the ones who matter most",
    ceremonyTag: "FOR THEIR GOL DHANA CEREMONY"
  },

  // Special Reveal Date
  reveal: {
    title: "A SPECIAL REVEAL",
    subtitle: "Scratch or tap to reveal our auspicious date",
    dateNumber: "20",
    dateSuffix: "th",
    dateMonthYear: "July 2026",
    day: "MONDAY",
    fullDateText: "Monday, 20th of July, 2026",
    time: "9:30 AM ONWARDS"
  },

  // 6 Wedding Events (as specified in guidelines)
  events: [
    {
      id: "gol-dhana",
      name: "GOL DHANA CEREMONY",
      subtitle: "The Sacred Engagement Ritual",
      date: "Monday, 20th of July, 2026",
      time: "9:30 AM ONWARDS",
      venue: "LA SERATA BANQUETS",
      address: "Shilaj, Ahmedabad, Gujarat",
      mapsUrl: "https://maps.google.com/?q=La+Serata+Banquets+Shilaj+Ahmedabad",
      calendarIso: "20260720T093000/20260720T143000",
      accent: "#C6A15B",
      illustration: "assets/venue-illustration-CJozVy2q.png"
    },
    {
      id: "haldi",
      name: "HALDI CEREMONY",
      subtitle: "Golden Sunshine & Turmeric Blessings",
      date: "Saturday, 18th of July, 2026",
      time: "10:00 AM ONWARDS",
      venue: "SUNBEAM COURTYARD",
      address: "Sindhu Bhavan Road, Ahmedabad",
      mapsUrl: "https://maps.google.com/?q=Sindhu+Bhavan+Road+Ahmedabad",
      calendarIso: "20260718T100000/20260718T130000",
      accent: "#E8C879",
      illustration: "assets/w-haldi-DjMtDyPQ.png"
    },
    {
      id: "mehendi",
      name: "MEHENDI CEREMONY",
      subtitle: "Intricate Henna Motifs & Folk Melodies",
      date: "Saturday, 18th of July, 2026",
      time: "4:00 PM ONWARDS",
      venue: "GRAND CRYSTAL LAWNS",
      address: "SG Highway, Ahmedabad",
      mapsUrl: "https://maps.google.com/?q=SG+Highway+Ahmedabad",
      calendarIso: "20260718T160000/20260718T200000",
      accent: "#A9B99A",
      illustration: "assets/w-mehndi-CUpnixOF.png"
    },
    {
      id: "sangeet",
      name: "SANGEET NIGHT",
      subtitle: "An Evening of Music, Dance & Revelry",
      date: "Sunday, 19th of July, 2026",
      time: "7:00 PM ONWARDS",
      venue: "ROYAL BALLROOM",
      address: "Bodakdev, Ahmedabad",
      mapsUrl: "https://maps.google.com/?q=Bodakdev+Ahmedabad",
      calendarIso: "20260719T190000/20260719T233000",
      accent: "#D98291",
      illustration: "assets/cel-sangeet.webp"
    },
    {
      id: "wedding",
      name: "WEDDING CEREMONY",
      subtitle: "The Sacred Vows of Vivah Sanskar",
      date: "Monday, 20th of July, 2026",
      time: "11:30 AM ONWARDS",
      venue: "THE GRAND PAVILION",
      address: "Shilaj, Ahmedabad",
      mapsUrl: "https://maps.google.com/?q=La+Serata+Banquets+Shilaj+Ahmedabad",
      calendarIso: "20260720T113000/20260720T160000",
      accent: "#C6A15B",
      illustration: "assets/w-wedding-BtwN4UQz.png"
    },
    {
      id: "reception",
      name: "GALA RECEPTION",
      subtitle: "Dinner & Celebration with Newlyweds",
      date: "Monday, 20th of July, 2026",
      time: "7:30 PM ONWARDS",
      venue: "SERATA EMERALD HALL",
      address: "Shilaj, Ahmedabad",
      mapsUrl: "https://maps.google.com/?q=La+Serata+Banquets+Shilaj+Ahmedabad",
      calendarIso: "20260720T193000/20260720T233000",
      accent: "#E99B91",
      illustration: "assets/cel-wedding.webp"
    }
  ],

  // Closing & RSVP
  closing: {
    messageLine1: "We would be delighted to share this beautiful beginning with you",
    messageLine2: "With love in our hearts, we await your gracious presence",
    signOff: "Warm Regards,",
    familyNames: "Mehta's & Shah's",
    location: "Ahmedabad, Gujarat · July 2026"
  },

  // RSVP Phone (WhatsApp)
  rsvp: {
    phone: "919651088662",
    defaultGuests: 2,
    locationAddress: "La Serata Banquets, Shilaj, Ahmedabad",
    mapsUrl: "https://maps.google.com/?q=La+Serata+Banquets+Shilaj+Ahmedabad"
  },

  // Background Soundtrack
  music: {
    track: "assets/jashn-e-bahaaraa.mp3",
    title: "Jashn-e-Bahaaraa",
    artist: "A.R. Rahman • Jodhaa Akbar"
  },

  // Strict Color Palette from Guidelines
  palette: {
    bgIvory: "#FFFCF7",
    lightBlushPink: "#F5E4DF",
    embossedPeach: "#F1D8CF",
    softChampagneGold: "#C6A15B",
    rosePink: "#D98291",
    floralCoral: "#E99B91",
    paleYellow: "#E8C879",
    sageGreen: "#A9B99A",
    darkOliveText: "#65634F",
    softGrey: "#DAD6CC"
  }
};
