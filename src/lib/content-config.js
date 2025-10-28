const name = "LexiQuest";
const totalUsers = "100,000+";
const totalLanguages = "50+";

const brand = {
  name: "LexiQuest",
  tagline: "A universe of language learning",
  description: `${totalUsers} learners are mastering ${totalLanguages} languages by exploring AI-generated worlds, chatting with fun characters, and collecting vocabulary as they go.`,
  rating: 4.7,
  totalReviews: 5500,
  totalUsers,
  totalLanguages,
};

export const contentConfig = {
  brand,

  navigation: {
    links: [
      { href: "#features", text: "Features" },
      { href: "#learn", text: "Learn with LexiQuest" },
      { href: "#how-it-works", text: "How it works" },
      { href: "https://discord.gg/9bre4KeEGV", text: "Join the discord" },
    ],
    cta: "Start for free",
  },

  hero: {
    title: "Explore. Chat. Learn. Welcome to LexiQuest.",
    subtitle: brand.description,
    steps: [
      {
        stepNumber: "Step 1",
        title: "Explore worlds 🌍",
        subtitle:
          "Dive into chats with unique characters and discover vocabulary in context.",
      },
      {
        stepNumber: "Step 2",
        title: "Collect words 📚",
        subtitle:
          "Tap any word to save it. Build your personal deck as you go.",
      },
      {
        stepNumber: "Step 3",
        title: "Level up 🚀",
        subtitle:
          "Master vocab with smart flashcards and return stronger each time.",
      },
    ],
  },

  features: [
    {
      title: "Unstructured learning 🧭",
      description:
        "Forget traditional lessons. LexiQuest lets you learn by exploring topics that matter to you, in the order you choose.",
    },
    {
      title: "Character-driven chats 💬",
      description:
        "Talk to charming, quirky AI characters across a vibrant language universe. Each one teaches in their own way.",
    },
    {
      title: "Smart flashcard integration 🧠",
      description:
        "Click any word mid-chat to reveal its meaning and save it to your personal deck powered by Anki-style spaced repetition.",
    },
  ],

  infoSectionOne: {
    title: "Learning, your way",
    features: [
      {
        title: "Explore at your pace 🕹️",
        description:
          "No fixed curriculum. No boring lessons. Just immersive conversations, vocabulary discovery, and self-driven progress.",
      },
      {
        title: "Track your own path 📈",
        description:
          "Your journey adapts based on what interests you — from casual slang to niche topics. You set the pace.",
      },
    ],
    checklist: [
      "Custom vocab decks",
      "Real-time word lookup",
      "Achievement-based goals",
    ],
  },

  infoSectionTwo: {
    title: "Talk your way to fluency",
    features: [
      {
        title: "Dynamic chats with AI 🤖",
        description:
          "Practice natural conversations with expressive characters. Every reply teaches, every word matters.",
      },
      {
        title: "Meaningful vocabulary 🔤",
        description:
          "No throwaway words — every word you encounter is relevant to you. Save, study, and master them all.",
      },
    ],
    checklist: [
      "Interactive storytelling",
      "In-conversation vocabulary cards",
      "Progressive challenge modes",
    ],
  },

  howItWorks: {
    title: "How does it work?",
    subtitle:
      "LexiQuest throws away the script. Instead of lectures, you explore, chat, and collect language as you play. Here's how it works:",
    steps: [
      {
        id: "tab1",
        title: "1. Choose your language",
        heading: "Choose your language 🌐",
        content:
          "Start your journey by picking from over 50 languages. Whether it’s Japanese, Spanish, or Thai — your universe awaits.",
        linkText: "See all available languages here",
        linkHref: "#",
      },
      {
        id: "tab2",
        title: "2. Enter the world",
        heading: "Meet your guides 🎭",
        content:
          "Chat with unique AI characters in a rich, explorable world. Each one brings culture, humor, and personality to your learning.",
        linkText: "Try it out yourself",
        linkHref: "#",
      },
      {
        id: "tab3",
        title: "3. Collect and train",
        heading: "Build your vocabulary deck 📥",
        content:
          "Tap any word to view its meaning, pronunciation, and usage. Add it to your flashcard deck and train using spaced repetition.",
        linkText: "Learn more here",
        linkHref: "#",
      },
      {
        id: "tab4",
        title: "4. Level up your fluency",
        heading: "Achieve your goals 🚀",
        content:
          "Return to old characters to test yourself again. Complete chat milestones, grow your deck, and track your real progress.",
        linkText: "Learn more here",
        linkHref: "#",
      },
    ],
  },

  downloadApp: {
    title: "Download the app",
    subtitle: brand.description,
    appStore: {
      apple: {
        url: "https://apps.apple.com/th/app/lexiquest/id6550892623",
        downloadText: "Download on the",
        storeText: "App Store",
      },
      google: {
        url: "https://play.google.com/store/apps/details?id=com.felixsebastian.lexiquest",
        downloadText: "Get it on",
        storeText: "Google Play",
      },
    },
  },

  footer: {
    credits: {
      text: "Made with ❤️ in Melbourne, Australia by Felix Sebastian",
      url: "https://felixsebastian.dev",
    },
    links: [
      {
        text: "Join the discord",
        url: "https://discord.gg/9bre4KeEGV",
      },
      {
        text: "Privacy policy",
        url: "/privacy",
      },
    ],
  },

  userRating: {
    defaultRating: 4.7,
    defaultReviews: 5500,
    ratingText: "Rated by {totalReviews} users",
  },

  appStoreButton: {
    apple: {
      downloadText: "Download on the",
      storeText: "App Store",
    },
    google: {
      downloadText: "Get it on",
      storeText: "Google Play",
    },
  },

  cta: {
    startFree: "Start for free",
    downloadApp: "Download the app",
  },

  assets: {
    logo: "/logo-t.png",
    mockups: {
      mockupsOne: "/home-cropped.jpg",
      mockupsTwo: "/practice-cropped.jpg",
      mockupsThree: "/chat-cropped.jpg",
      heroSectionOne: "/wordlists-cropped.jpg",
      heroSectionTwo: "/characters-cropped.jpg",
      footerOne: "/chat.jpg",
      footerTwo: "/home.jpg",
      footerThree: "/wordlists.jpg",
    },
    userPhotos: [
      "https://cdn.prod.website-files.com/688316b1ce3841ffc9403242/688316b1ce3841ffc94032b4_mobile-app-users-1.avif",
      "https://cdn.prod.website-files.com/688316b1ce3841ffc9403242/688316b1ce3841ffc94032b6_mobile-app-users-2.avif",
      "https://cdn.prod.website-files.com/688316b1ce3841ffc9403242/688316b1ce3841ffc94032b7_mobile-app-users-3.avif",
      "https://cdn.prod.website-files.com/688316b1ce3841ffc9403242/688316b1ce3841ffc94032b2_mobile-app-users-4.avif",
    ],
  },
};

export const getFeatures = () => contentConfig.features;
export const getHowItWorksSteps = () => contentConfig.howItWorks.steps;
export const getBrandInfo = () => contentConfig.brand;
export const getNavigation = () => contentConfig.navigation;
