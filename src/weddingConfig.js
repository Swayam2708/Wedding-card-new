/**
 * WEDDING INVITATION CONFIGURATION
 * All names, dates, venues, family details, and settings are editable here.
 */

export const weddingConfig = {
  // Couple Details
  couple: {
    groom: "Ayush",
    groomInitials: "A",
    bride: "Akanksha",
    brideInitials: "A",
    monogram: "AA",
    groomParents: "SMT. MAMTA & SH. GANESH SHARMA",
    groomParentsSubtitle: "joyfully invite you to celebrate the bond of their beloved son",
    brideParents: "D/O SMT. SARESTA & SH. SANJAY KUMAR KASHYAP",
  },

  // Invocations & Blessings
  spiritual: {
    shlokaTitle: "॥ श्री गणेशाय नमः ॥",
    shlokaText: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    blessingText: "Every beautiful beginning deserves to be celebrated with the ones who matter most",
    ceremonyTag: "FOR THEIR WEDDING CEREMONY"
  },

  // Special Reveal Date
  reveal: {
    title: "A SPECIAL REVEAL",
    subtitle: "Scratch or tap to reveal our auspicious date",
    dateNumber: "5",
    dateSuffix: "th",
    dateMonthYear: "December 2026",
    day: "SATURDAY",
    fullDateText: "Saturday, 5th December, 2026",
    time: "5:00 PM ONWARDS"
  },

  // 7 Wedding Events
  events: [
    {
      id: "varmala-dinner",
      name: "VARMALA AND DINNER",
      subtitle: "The Sacred Wedding Vows & Celebration",
      date: "Saturday, 5th December, 2026",
      time: "7:00 PM ONWARDS",
      venue: "HERITAGE NARWANA BANQUET & RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=Heritage+Narwana+Banquet+%26+Resort+Dharamshala",
      calendarIso: "20261205T190000/20261205T233000",
      accent: "#C6A15B",
      illustration: "assets/w-wedding-BtwN4UQz.png"
    },
    {
      id: "mehndi",
      name: "MEHNDI",
      subtitle: "Intricate Henna Motifs & Folk Melodies",
      date: "Friday, 4th December, 2026",
      time: "1:00 PM ONWARDS",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=D%27Polo+Club+%26+Spa+Resort+Dharamshala",
      calendarIso: "20261204T130000/20261204T170000",
      accent: "#A9B99A",
      illustration: "assets/w-mehndi-CUpnixOF.png"
    },
    {
      id: "tilak",
      name: "TILAK",
      subtitle: "Auspicious Welcome & Sacred Blessings",
      date: "Friday, 4th December, 2026",
      time: "6:00 PM ONWARDS",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=D%27Polo+Club+%26+Spa+Resort+Dharamshala",
      calendarIso: "20261204T180000/20261204T190000",
      accent: "#C6A15B",
      illustration: "assets/venue-illustration-CJozVy2q.png"
    },
    {
      id: "sangeet",
      name: "SANGEET",
      subtitle: "An Evening of Music, Dance & Revelry",
      date: "Friday, 4th December, 2026",
      time: "7:00 PM ONWARDS",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=D%27Polo+Club+%26+Spa+Resort+Dharamshala",
      calendarIso: "20261204T190000/20261204T233000",
      accent: "#D98291",
      illustration: "assets/cel-sangeet.webp"
    },
    {
      id: "haldi",
      name: "HALDI",
      subtitle: "Golden Sunshine & Turmeric Blessings",
      date: "Saturday, 5th December, 2026",
      time: "11:00 AM ONWARDS",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=D%27Polo+Club+%26+Spa+Resort+Dharamshala",
      calendarIso: "20261205T110000/20261205T130000",
      accent: "#E8C879",
      illustration: "assets/w-haldi-DjMtDyPQ.png"
    },
    {
      id: "chaak-bhaat",
      name: "CHAAK BHAAT (MAYRA)",
      subtitle: "Maternal Blessings & Traditional Festivities",
      date: "Saturday, 5th December, 2026",
      time: "1:00 PM ONWARDS",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=D%27Polo+Club+%26+Spa+Resort+Dharamshala",
      calendarIso: "20261205T130000/20261205T160000",
      accent: "#E99B91",
      illustration: "assets/venue-illustration-CJozVy2q.png"
    },
    {
      id: "baraat",
      name: "BARAAT",
      subtitle: "The Royal Groom Procession",
      date: "Saturday, 5th December, 2026",
      time: "5:00 PM ONWARDS",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=D%27Polo+Club+%26+Spa+Resort+Dharamshala",
      calendarIso: "20261205T170000/20261205T190000",
      accent: "#C6A15B",
      illustration: "assets/cel-wedding.webp"
    }
  ],

  // Closing & RSVP
  closing: {
    messageLine1: "We would be delighted to share this beautiful beginning with you",
    messageLine2: "With love in our hearts, we await your gracious presence",
    signOff: "Warm Regards,",
    familyNames: "Sharma's & Kashyap's",
    location: "Dharamshala, Himachal Pradesh · December 2026"
  },

  // RSVP Phone (WhatsApp)
  rsvp: {
    phone: "919928077518",
    defaultGuests: 2,
    locationAddress: "Heritage Narwana Banquet & Resort, Dharamshala",
    mapsUrl: "https://maps.google.com/?q=Heritage+Narwana+Banquet+%26+Resort+Dharamshala"
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
