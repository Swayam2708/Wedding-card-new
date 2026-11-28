```javascript
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

    groomParents: "SH. GANESH SHARMA & SMT. MAMTA SHARMA",
    groomParentsSubtitle:
      "Grandson of Late Basudeo Ji Surolia and Veena Devi Surolia",

    brideParents:
      "DAUGHTER OF SH. SANJAY KUMAR KASHYAP & SMT. SARESTA KASHYAP",

    brideGrandparents:
      "Granddaughter of Sh. Onkar Chand Kashyap and Smt. Kamlesh Kashyap"
  },

  // Invocations & Blessings
  spiritual: {
    shlokaTitle: "॥ श्री गणेशाय नमः ॥",
    shlokaText: "॥ श्री जीन भवानी नमः ॥",

    blessingText:
      "Your presence and blessings will make our celebration even more special.",

    ceremonyTag: "WEDDING CELEBRATION"
  },

  // Special Reveal Date
  reveal: {
    title: "A SPECIAL REVEAL",
    subtitle: "Our auspicious wedding date",

    dateNumber: "5",
    dateSuffix: "th",
    dateMonthYear: "December 2026",

    day: "SATURDAY",
    fullDateText: "Saturday, 5th December, 2026",

    time: "ONWARDS"
  },

  // Wedding Events
  events: [
    {
      id: "mehndi",
      name: "MEHNDI",
      subtitle: "Intricate Henna & Celebrations",
      date: "Friday, 4th December, 2026",
      time: "1:00 PM",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl:
        "https://maps.google.com/?q=D+Polo+Club+Spa+Resort+Dharamshala",
      calendarIso: "20261204T130000",
      accent: "#A9B99A"
    },

    {
      id: "tilak",
      name: "TILAK CEREMONY",
      subtitle: "An Auspicious Beginning",
      date: "Friday, 4th December, 2026",
      time: "6:00 PM",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl:
        "https://maps.google.com/?q=D+Polo+Club+Spa+Resort+Dharamshala",
      calendarIso: "20261204T180000",
      accent: "#C6A15B"
    },

    {
      id: "sangeet",
      name: "SANGEET NIGHT",
      subtitle: "An Evening of Music, Dance & Celebration",
      date: "Friday, 4th December, 2026",
      time: "7:00 PM",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl:
        "https://maps.google.com/?q=D+Polo+Club+Spa+Resort+Dharamshala",
      calendarIso: "20261204T190000",
      accent: "#D98291"
    },

    {
      id: "haldi",
      name: "HALDI CEREMONY",
      subtitle: "Golden Sunshine & Turmeric Blessings",
      date: "Saturday, 5th December, 2026",
      time: "11:00 AM",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl:
        "https://maps.google.com/?q=D+Polo+Club+Spa+Resort+Dharamshala",
      calendarIso: "20261205T110000",
      accent: "#E8C879"
    },

    {
      id: "chaak-bhaat",
      name: "CHAAK BHAAT (MAYRA)",
      subtitle: "A Beautiful Family Tradition",
      date: "Saturday, 5th December, 2026",
      time: "1:00 PM",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl:
        "https://maps.google.com/?q=D+Polo+Club+Spa+Resort+Dharamshala",
      calendarIso: "20261205T130000",
      accent: "#E99B91"
    },

    {
      id: "baraat",
      name: "BARAAT",
      subtitle: "The Grand Wedding Procession",
      date: "Saturday, 5th December, 2026",
      time: "5:00 PM",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl:
        "https://maps.google.com/?q=D+Polo+Club+Spa+Resort+Dharamshala",
      calendarIso: "20261205T170000",
      accent: "#C6A15B"
    },

    {
      id: "varmala-dinner",
      name: "VARMALA AND DINNER",
      subtitle: "An Evening of Love, Vows & Celebration",
      date: "Saturday, 5th December, 2026",
      time: "7:00 PM",
      venue: "HERITAGE NARWANA BANQUET & RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl:
        "https://maps.google.com/?q=Heritage+Narwana+Banquet+Resort+Dharamshala",
      calendarIso: "20261205T190000",
      accent: "#C6A15B"
    }
  ],

  // Closing & Family Details
  closing: {
    messageLine1: "With Best Wishes and Blessings",

    messageLine2:
      "Shree Makkhan Ji, Shree Satyanarayan Ji, Shree Hari Prashad Ji and Surolia Family",

    signOff: "With Best Compliments From",

    familyNames:
      "Nishant & Poonam Sharma | Ankit & Nikita Sharma | Abhishek & Ankita Sharma | Anubhav Sharma | Nitya, Ansh & Lavyah",

    maternalFamily:
      "Brijmohan Sharma Ji | Dr. Anup & Dr. Manisha Sharma | Anand & Kiran Sharma | Manish & Rajni Sharma",

    location: "Dharamshala, Himachal Pradesh · December 2026"
  },

  // RSVP Details
  rsvp: {
    phone: "919928077518",
    alternatePhone: "917691863278",

    defaultGuests: 2,

    locationAddress:
      "D'Polo Club & Spa Resort, Dharamshala",

    mapsUrl:
      "https://maps.google.com/?q=D+Polo+Club+Spa+Resort+Dharamshala",

    contactNames: "Ganesh Sharma & Mamta Sharma",
    additionalContact: "Kishan Surolia Ji"
  },

  // Background Soundtrack
  music: {
    track: "assets/jashn-e-bahaaraa.mp3",
    title: "Jashn-e-Bahaaraa",
    artist: "A.R. Rahman • Jodhaa Akbar"
  },

  // Color Palette
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
```