const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0518", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: a month ago today lmfao", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Who is my favorite natural curly head?", // Example trending search query
    "Who twisted their ankle at their game?", // Another example query
    `Quien te quiere? `, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-05-18", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Pensandote", // Title of the song
      artist: "Rauwwww", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Amar De Nuevo",
      artist: "Rauwww",
      left: "40%",
      top: "15%",
    },
    {
      title: "Nobody New",
      artist: "The Marias",
      left: "15%",
      top: "40%",
    },
  
  ],

    // 📝 Message Recap Page
    messageTitle: "My favorite memories of us", // Title for the messages recap page
    messageGallery: [
      { title: "Who knows what day", description: "LESSGO KAPPAS." }, // Message entry
      { title: "April, 2020", description: "First time meeting you lol." },
      { title: "Who knows what day", description: "Let's go kappas (i added this to be funny, sorry)" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "May 24, 2025", description: "Juledi's Wedding! My family loveedddd you. Got my cousins asking if you have any single uncles smh." }, // Picture entry
      { title: "November 24, 2022", description: "First time snowboarding with you. You really let me look like a jerry with my beanie under my helmet." },
      { title: "May 28, 2025", description: "Universal Studios! First theme park with you! No mummy ride for me smh." },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Oh hey, my handsome, athletic, and sweet novio. ", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, You make me so happy. I know this is corny but the best way I can express how much you mean to me is by spending hours trying to code and edit this freaking app lol. I love you, I hope we continue spending life together. This month passed by super fast, can't wait to be old and wrinkly with you. I'd still throw it back for you at 90.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
