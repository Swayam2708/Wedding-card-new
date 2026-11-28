/**
 * WEDDING INVITATION CONFIGURATION
 * All names, dates, venues, family details, and settings are editable here.
 */

export const weddingConfig = {
  // Couple Details
  couple: {
    groom: "Ayush",
    groomFull: "A Y U S H",
    groomInitials: "A",
    bride: "Akanksha",
    brideFull: "A K A N K S H A",
    brideInitials: "A",
    monogram: "AA",
    groomGrandparents: "Grandson of Late Basudeo Ji Surolia and Veena Devi Surolia",
    groomParents: "Son of Sh. Ganesh Sharma and Smt. Mamta Sharma",
    brideGrandparents: "Granddaughter of Sh. Onkar Chand Kashyap and Smt. Kamlesh Kashyap",
    brideParents: "Daughter of Sh. Sanjay Kumar Kashyap and Smt. Saresta Kashyap"
  },

  // Invocations & Blessings
  spiritual: {
    shlokaTitle: "|| Shree Ganeshay Namah ||",
    shlokaSubtitle: "|| Shree Jeen Bhawani Namah ||",
    blessingText: "Your blessings are our greatest treasure",
    ceremonyTag: "WEDDING INVITATION"
  },

  // Special Reveal Date
  reveal: {
    title: "A SPECIAL REVEAL",
    subtitle: "Scratch or tap to reveal our wedding date",
    dateNumber: "5",
    dateSuffix: "th",
    dateMonthYear: "December 2026",
    day: "SATURDAY",
    fullDateText: "Saturday, 5th December, 2026",
    time: "BARAAT 5:00 PM • VARMALA 7:00 PM"
  },

  // 7 Wedding Celebrations (from Page 3)
  events: [
    {
      id: "mehndi",
      name: "MEHNDI",
      subtitle: "Henna, Folk Songs & Afternoon Joy",
      date: "Friday, 4th December, 2026",
      time: "1:00 PM ONWARDS",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=D'Polo+Club+%26+Spa+Resort+Dharamshala",
      calendarIso: "20261204T130000/20261204T170000",
      accent: "#A9B99A",
      illustration: "assets/w-mehndi-CUpnixOF.png"
    },
    {
      id: "tilak",
      name: "TILAK",
      subtitle: "The Auspicious Sacred Blessing",
      date: "Friday, 4th December, 2026",
      time: "6:00 PM ONWARDS",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=D'Polo+Club+%26+Spa+Resort+Dharamshala",
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
      mapsUrl: "https://maps.google.com/?q=D'Polo+Club+%26+Spa+Resort+Dharamshala",
      calendarIso: "20261204T190000/20261204T230000",
      accent: "#D98291",
      illustration: "assets/cel-sangeet.webp"
    },
    {
      id: "haldi",
      name: "HALDI",
      subtitle: "Golden Turmeric & Morning Blessings",
      date: "Saturday, 5th December, 2026",
      time: "11:00 AM ONWARDS",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=D'Polo+Club+%26+Spa+Resort+Dharamshala",
      calendarIso: "20261205T110000/20261205T130000",
      accent: "#E8C879",
      illustration: "assets/w-haldi-DjMtDyPQ.png"
    },
    {
      id: "chaak-bhaat",
      name: "CHAAK BHAAT (MAYRA)",
      subtitle: "Maternal Blessings & Traditional Rituals",
      date: "Saturday, 5th December, 2026",
      time: "1:00 PM ONWARDS",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=D'Polo+Club+%26+Spa+Resort+Dharamshala",
      calendarIso: "20261205T130000/20261205T160000",
      accent: "#E99B91",
      illustration: "assets/couple-gavdev-DxDeDDBt.png"
    },
    {
      id: "baraat",
      name: "BARAAT",
      subtitle: "The Royal Groom Procession",
      date: "Saturday, 5th December, 2026",
      time: "5:00 PM ONWARDS",
      venue: "D'POLO CLUB & SPA RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=D'Polo+Club+%26+Spa+Resort+Dharamshala",
      calendarIso: "20261205T170000/20261205T190000",
      accent: "#C6A15B",
      illustration: "assets/w-wedding-BtwN4UQz.png"
    },
    {
      id: "varmala-dinner",
      name: "VARMALA AND DINNER",
      subtitle: "Exchange of Garlands & Grand Feast",
      date: "Saturday, 5th December, 2026",
      time: "7:00 PM ONWARDS",
      venue: "HERITAGE NARWANA BANQUET & RESORT",
      address: "Dharamshala, Himachal Pradesh",
      mapsUrl: "https://maps.google.com/?q=Heritage+Narwana+Banquet+%26+Resort+Dharamshala",
      calendarIso: "20261205T190000/20261205T233000",
      accent: "#D98291",
      illustration: "assets/cel-wedding.webp"
    }
  ],

  // Family Blessings & Closing (from Pages 1 & 4)
  closing: {
    wishesTitle: "With Best Wishes and Blessings",
    wishesNames: "Shree Makkhan Ji, Shree Satyanarayan Ji, Shree Hari Prashad Ji and Surolia Family",
    complimentsTitle: "With Best Compliments From",
    complimentsNames: [
      "Nishant and Poonam Sharma",
      "Ankit and Nikita Sharma",
      "Abhishek and Ankita Sharma",
      "Anubhav Sharma (7691863278)",
      "Nitya, Ansh, Lavyah"
    ],
    maternalTitle: "Maternal Family",
    maternalNames: [
      "Brijmohan Sharma Ji",
      "Dr. Anup and Dr. Manisha Sharma",
      "Anand and Kiran Sharma",
      "Manish and Rajni Sharma"
    ],
    rsvpTitle: "R.S.V.P.",
    rsvpNames: [
      "Kishan Surolia Ji",
      "Ganesh Sharma and Mamta Sharma"
    ],
    fromTitle: "From",
    fromName: "Ganesh & Mamta Sharma",
    fromAddress: "18 Ashok Vihar, Ambabari, Jaipur, 302039",
    fromPhones: "9928077518, 7691863278",
    quote: "Your blessings are our greatest treasure",
    signOff: "With Warm Regards,",
    familyNames: "Sharma & Surolia Family",
    location: "Dharamshala · December 2026"
  },

  // RSVP Phone (WhatsApp)
  rsvp: {
    phone: "919928077518",
    defaultGuests: 2,
    locationAddress: "D'Polo Club & Spa Resort / Heritage Narwana Banquet & Resort, Dharamshala",
    mapsUrl: "https://maps.google.com/?q=Heritage+Narwana+Banquet+%26+Resort+Dharamshala"
  },

  // Background Soundtrack
  music: {
    track: "assets/jashn-e-bahaaraa.mp3",
    title: "Jashn-e-Bahaaraa",
    artist: "A.R. Rahman"
  },

  // Strict Color Palette
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
