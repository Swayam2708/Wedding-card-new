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
    groomGrandparents: "Grandson of Late Basudeo Ji Surolia and Veena Devi Surolia",
    groomParents: "Son of Sh. Ganesh Sharma and Smt. Mamta Sharma",
    groomParentsHeader: "SH. GANESH SHARMA & SMT. MAMTA SHARMA",
    groomParentsSubtitle: "joyfully invite you to celebrate the wedding of their beloved son",
    brideGrandparents: "Granddaughter of Sh. Onkar Chand Kashyap and Smt. Kamlesh Kashyap",
    brideParents: "Daughter of Sh. Sanjay Kumar Kashyap and Smt. Saresta Kashyap",
  },

  // Invocations & Blessings
  spiritual: {
    shlokaTitle: "|| Shree Ganeshay Namah ||",
    shlokaSubtitle: "|| Shree Jeen Bhawani Namah ||",
    shlokaText: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    blessingText: "Every beautiful beginning deserves to be celebrated with the ones who matter most",
    ceremonyTag: "5TH DECEMBER 2026 • WEDDING INVITATION"
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
    time: "WEDDING CELEBRATIONS"
  },

  // 7 Wedding Events (from Wedding Invitation PDF)
  events: [
    {
      id: "mehndi",
      name: "MEHNDI",
      subtitle: "4th December'2026",
      date: "Friday, 4th December, 2026",
      time: "1:00 PM",
      venue: "D'Polo Club & Spa Resort",
      address: "Dharamshala",
      mapsUrl: "https://maps.google.com/?q=D+Polo+Club+and+Spa+Resort+Dharamshala",
      calendarIso: "20261204T130000/20261204T170000",
      accent: "#A9B99A",
      illustration: "assets/w-mehndi-CUpnixOF.png"
    },
    {
      id: "tilak",
      name: "TILAK",
      subtitle: "4th December'2026",
      date: "Friday, 4th December, 2026",
      time: "6:00 PM",
      venue: "D'Polo Club & Spa Resort",
      address: "Dharamshala",
      mapsUrl: "https://maps.google.com/?q=D+Polo+Club+and+Spa+Resort+Dharamshala",
      calendarIso: "20261204T180000/20261204T190000",
      accent: "#C6A15B",
      illustration: "assets/venue-illustration-CJozVy2q.png"
    },
    {
      id: "sangeet",
      name: "SANGEET",
      subtitle: "4th December'2026",
      date: "Friday, 4th December, 2026",
      time: "7:00 PM",
      venue: "D'Polo Club & Spa Resort",
      address: "Dharamshala",
      mapsUrl: "https://maps.google.com/?q=D+Polo+Club+and+Spa+Resort+Dharamshala",
      calendarIso: "20261204T190000/20261204T230000",
      accent: "#D98291",
      illustration: "assets/cel-sangeet.webp"
    },
    {
      id: "haldi",
      name: "HALDI",
      subtitle: "5th December'2026",
      date: "Saturday, 5th December, 2026",
      time: "11:00 AM",
      venue: "D'Polo Club & Spa Resort",
      address: "Dharamshala",
      mapsUrl: "https://maps.google.com/?q=D+Polo+Club+and+Spa+Resort+Dharamshala",
      calendarIso: "20261205T110000/20261205T130000",
      accent: "#E8C879",
      illustration: "assets/w-haldi-DjMtDyPQ.png"
    },
    {
      id: "chaak-bhaat",
      name: "CHAAK BHAAT (MAYRA)",
      subtitle: "5th December'2026",
      date: "Saturday, 5th December, 2026",
      time: "1:00 PM",
      venue: "D'Polo Club & Spa Resort",
      address: "Dharamshala",
      mapsUrl: "https://maps.google.com/?q=D+Polo+Club+and+Spa+Resort+Dharamshala",
      calendarIso: "20261205T130000/20261205T160000",
      accent: "#E99B91",
      illustration: "assets/couple-gavdev-DxDeDDBt.png"
    },
    {
      id: "baraat",
      name: "BARAAT",
      subtitle: "5th December'2026",
      date: "Saturday, 5th December, 2026",
      time: "5:00 PM",
      venue: "D'Polo Club & Spa Resort",
      address: "Dharamshala",
      mapsUrl: "https://maps.google.com/?q=D+Polo+Club+and+Spa+Resort+Dharamshala",
      calendarIso: "20261205T170000/20261205T190000",
      accent: "#C6A15B",
      illustration: "assets/w-wedding-BtwN4UQz.png"
    },
    {
      id: "varmala-dinner",
      name: "VARMALA AND DINNER",
      subtitle: "5th December'2026",
      date: "Saturday, 5th December, 2026",
      time: "7:00 PM",
      venue: "Heritage Narwana Banquet & Resort",
      address: "Dharamshala",
      mapsUrl: "https://maps.google.com/?q=Heritage+Narwana+Banquet+and+Resort+Dharamshala",
      calendarIso: "20261205T190000/20261205T233000",
      accent: "#D98291",
      illustration: "assets/cel-wedding.webp"
    }
  ],

  // Closing & Family Details (Page 1 From & Page 4)
  closing: {
    messageLine1: "Your blessings are our greatest treasure",
    messageLine2: "With love in our hearts, we await your gracious presence",
    signOff: "Warm Regards,",
    familyNames: "Ganesh & Mamta Sharma",
    location: "18 Ashok Vihar, Ambabari, Jaipur, 302039",
    mobiles: "Mobile 9928077518, 7691863278",
    blessingsTitle: "With Best Wishes and Blessings",
    blessingsLines: [
      "Shree Makkhan Ji, Shree Satyanarayan Ji,",
      "Shree Hari Prashad Ji and Surolia Family"
    ],
    complimentsTitle: "With Best Compliments From",
    complimentsLines: [
      "Nishant and Poonam Sharma",
      "Ankit and Nikita Sharma",
      "Abhishek and Ankita Sharma",
      "Anubhav Sharma (7691863278)",
      "Nitya, Ansh, Lavyah"
    ],
    maternalTitle: "Maternal Family",
    maternalLines: [
      "Brijmohan Sharma Ji",
      "Dr. Anup and Dr. Manisha Sharma",
      "Anand and Kiran Sharma",
      "Manish and Rajni Sharma"
    ],
    rsvpTitle: "R.S.V.P.",
    rsvpLines: [
      "Kishan Surolia Ji",
      "Ganesh Sharma and Mamta Sharma"
    ]
  },

  // RSVP Phone (WhatsApp)
  rsvp: {
    phone: "919928077518",
    defaultGuests: 2,
    locationAddress: "D'Polo Club & Spa Resort & Heritage Narwana Banquet & Resort, Dharamshala",
    mapsUrl: "https://maps.google.com/?q=Heritage+Narwana+Banquet+and+Resort+Dharamshala"
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
