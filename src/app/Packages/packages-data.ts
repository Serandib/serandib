export const packagesData: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    children?: Record<
      string,
      {
        title: string;
        description: string;
        description2: string;
        image: string;
        image2: string;
        image3: string;
        image4: string;
        image5: string;
         bannerImage: string ;
      }
    >;
  }
> = {
  culturalheritagetour: {
    title: "Cultural Heritage Tour",
    description:
      "Explore ancient temples, colonial forts, and traditional villages to experience Sri Lanka’s rich cultural tapestry. This package combines historical sites, local cuisine, and curated guided experiences.",
    image: "/assets/Images/UpgradePage/3.jpg",
    children: {
      templewalks: {
        title: "Temple Walks",
        description:
          "Guided walks through the island’s most sacred temples with a focus on history, architecture and rituals.Guided walks through the island’s most sacred temples with a focus on history, architecture and ritualsGuided walks through the island’s most sacred temples with a focus on history, architecture and ritualsGuided walks through the island’s most sacred temples with a focus on history, architecture and ritualsGuided walks through the island’s most sacred temples with a focus on history, architecture and rituals",
        description2:
          "This extended description includes suggested itineraries, recommended timings, dress code and nearby activities. Ideal for travellers who want an immersive cultural experience.",
        image: "/assets/Images/UpgradePage/15.png",
        image2: "/assets/Images/UpgradePage/15.png",
        image3: "/assets/Images/UpgradePage/7.png",
        image4: "/assets/Images/UpgradePage/15.png",
        image5: "/assets/Images/UpgradePage/31.png",
         bannerImage:"/assets/Images/UpgradePage/31.png",
      },
      colonialforts: {
        title: "Colonial Forts",
        description:
          "Explore coastal forts, colonial-era towns and museums highlighting Sri Lanka’s maritime history.",
        description2:
          "Learn about the colonial rulers, strategic architecture and how these forts shaped trade routes. Includes recommended walking routes and museum highlights.",
        image: "/assets/Images/UpgradePage/15.png",
        image2: "/assets/Images/UpgradePage/3.jpg",
        image3: "/assets/Images/UpgradePage/3.jpg",
        image4: "/assets/Images/UpgradePage/3.jpg",
        image5: "/assets/Images/UpgradePage/3.jpg",
        bannerImage:"/assets/Images/UpgradePage/15.png",
      },
    },
  },
  teacountryescape: {
    title: "Tea Country Escape",
    description:
      "Wander through misty tea plantations, visit a working tea factory, and stay in charming hill-country accommodations. Perfect for a relaxed, scenic getaway.",
    image: "/assets/Images/UpgradePage/2.jpg",
    children: {
      plantationstay: {
        title: "Plantation Stay",
        description:
          "Overnight stays on a working tea estate with guided walks and tastings at sunrise.",
        description2:
          "Includes suggested packing list, approximate schedules, estate etiquette, and sample menus. Great for photographers and slow-travel enthusiasts.",
        image: "/assets/Images/UpgradePage/2.jpg",
        image2: "/assets/Images/UpgradePage/3.jpg",
        image3: "/assets/Images/UpgradePage/3.jpg",
        image4: "/assets/Images/UpgradePage/3.jpg",
        image5: "/assets/Images/UpgradePage/3.jpg",
        bannerImage:"/assets/Images/UpgradePage/15.png",
      },
      factorytour: {
        title: "Factory Tour",
        description:
          "A behind-the-scenes tour of a tea factory explaining the processing from leaf to cup.",
        description2:
          "Recommended for food and beverage enthusiasts — includes tasting notes, the best times for harvest visits, and a short Q&A with plantation staff.",
        image: "/assets/Images/UpgradePage/2.jpg",
        image2: "/assets/Images/UpgradePage/3.jpg",
        image3: "/assets/Images/UpgradePage/3.jpg",
        image4: "/assets/Images/UpgradePage/3.jpg",
        image5: "/assets/Images/UpgradePage/3.jpg",
        bannerImage:"/assets/Images/UpgradePage/15.png",
      },
    },
  },
  surfbeachholiday: {
    title: "Surf & Beach Holiday",
    description:
      "Catch waves at world-class breaks, enjoy beachside stays, and unwind with coastal cuisine and nightlife. Great for surf lovers and sun-seekers.",
    image: "/assets/Images/UpgradePage/2.jpg",
    children: {
      beginnersurf: {
        title: "Beginner Surf Package",
        description:
          "Introductory lessons, board rental and gentle breaks ideal for first-timers.",
        description2:
          "Includes suggested fitness prep, what to bring, lesson breakdowns, safety briefings and instructor profiles. Suitable for ages 10+ with basic swimming ability.",
        image: "/assets/Images/UpgradePage/2.jpg",
        image2: "/assets/Images/UpgradePage/3.jpg",
        image3: "/assets/Images/UpgradePage/3.jpg",
        image4: "/assets/Images/UpgradePage/3.jpg",
        image5: "/assets/Images/UpgradePage/3.jpg",
        bannerImage:"/assets/Images/UpgradePage/15.png",
      },
      advancedsurf: {
        title: "Advanced Surf Package",
        description:
          "Guided sessions at the best breaks, board coaching and video analysis for confident surfers.",
        description2:
          "Includes coach profiles, recommended equipment, transport windows for the best swell and video review sessions for technique improvement.",
        image: "/assets/Images/UpgradePage/2.jpg",
        image2: "/assets/Images/UpgradePage/3.jpg",
        image3: "/assets/Images/UpgradePage/3.jpg",
        image4: "/assets/Images/UpgradePage/3.jpg",
        image5: "/assets/Images/UpgradePage/3.jpg",
        bannerImage:"/assets/Images/UpgradePage/15.png",
      },
    },
  },
  wildlifesafari: {
    title: "Wildlife Safari",
    description:
      "Track elephants, leopards, and diverse birdlife across national parks. Includes guided safaris and recommended photography spots.",
    image: "/assets/Images/UpgradePage/2.jpg",
    children: {
      elephantsafari: {
        title: "Elephant Safari",
        description:
          "An up-close encounter with majestic elephants in their natural habitat — perfect for photography and wildlife lovers. Includes jeep safaris and guided walks.",
        description2:
          "Best times are early morning and late afternoon. Includes guidance on ethical viewing, recommended camera settings, and nearby accommodation options.",
        image: "/assets/Images/UpgradePage/2.jpg",
        image2: "/assets/Images/UpgradePage/3.jpg",
        image3: "/assets/Images/UpgradePage/3.jpg",
        image4: "/assets/Images/UpgradePage/3.jpg",
        image5: "/assets/Images/UpgradePage/3.jpg",
        bannerImage:"/assets/Images/UpgradePage/15.png",
      },
      birdwatchingexpedition: {
        title: "Birdwatching Expedition",
        description:
          "Discover rare and endemic bird species with experienced guides. Best for early-morning walks and wetland hides.",
        description2:
          "Includes a list of target species, recommended optics, seasonal migration notes and comfortable hide locations. Ideal for specialist birders.",
        image: "/assets/Images/UpgradePage/2.jpg",
        image2: "/assets/Images/UpgradePage/3.jpg",
        image3: "/assets/Images/UpgradePage/3.jpg",
        image4: "/assets/Images/UpgradePage/3.jpg",
        image5: "/assets/Images/UpgradePage/3.jpg",
        bannerImage:"/assets/Images/UpgradePage/15.png",
      },
    },
  },
  pilgrimagejourney: {
    title: "Pilgrimage Journey",
    description:
      "Visit sacred sites and participate in local rituals. A thoughtful route for spiritual travelers and those interested in religious heritage.",
    image: "/assets/Images/UpgradePage/2.jpg",
    children: {
      templepilgrimage: {
        title: "Temple Pilgrimage",
        description:
          "A curated route visiting major pilgrimage sites, with guidance on rituals and timings.",
        description2:
          "Includes best-practice notes for respectful visiting, shuttle options between sites, and suggested local guides who can explain ritual significance.",
        image: "/assets/Images/UpgradePage/2.jpg",
        image2: "/assets/Images/UpgradePage/3.jpg",
        image3: "/assets/Images/UpgradePage/3.jpg",
        image4: "/assets/Images/UpgradePage/3.jpg",
        image5: "/assets/Images/UpgradePage/3.jpg",
        bannerImage:"/assets/Images/UpgradePage/15.png",
      },
      meditationretreat: {
        title: "Meditation Retreat",
        description:
          "Short retreats focusing on meditation, mindfulness and participation in local monastic practices.",
        description2:
          "Provides daily schedules, dietary considerations, and an outline of meditation techniques used during the retreat. Includes options for beginners.",
        image: "/assets/Images/UpgradePage/2.jpg",
        image2: "/assets/Images/UpgradePage/3.jpg",
        image3: "/assets/Images/UpgradePage/3.jpg",
        image4: "/assets/Images/UpgradePage/3.jpg",
        image5: "/assets/Images/UpgradePage/3.jpg",
        bannerImage:"/assets/Images/UpgradePage/10.png",
      },
    },
  },
  adventuretrekking: {
    title: "Adventure & Trekking",
    description:
      "Hike scenic trails, discover waterfalls and remote villages, and experience the island’s dramatic landscapes on foot.",
    image: "/assets/Images/UpgradePage/2.jpg",
    children: {
      waterfallhike: {
        title: "Waterfall Hike",
        description:
          "Day hikes to spectacular waterfalls, including picnic stops and swimming where safe.",
        description2:
          "Includes recommended footwear, difficulty grading, water safety tips and seasonal flow information to help choose the best time to visit.",
        image: "/assets/Images/UpgradePage/2.jpg",
        image2: "/assets/Images/UpgradePage/3.jpg",
        image3: "/assets/Images/UpgradePage/3.jpg",
        image4: "/assets/Images/UpgradePage/3.jpg",
        image5: "/assets/Images/UpgradePage/3.jpg",
        bannerImage:"/assets/Images/UpgradePage/15.png",
      },
      mountaintrail: {
        title: "Mountain Trail",
        description:
          "Multi-day treks across mountain ridges with local guides and overnight camping.",
        description2:
          "Details include trek length, elevation changes, pack lists, campsite facilities and altitude considerations for longer treks.",
        image: "/assets/Images/UpgradePage/2.jpg",
        image2: "/assets/Images/UpgradePage/3.jpg",
        image3: "/assets/Images/UpgradePage/3.jpg",
        image4: "/assets/Images/UpgradePage/3.jpg",
        image5: "/assets/Images/UpgradePage/3.jpg",
        bannerImage:"/assets/Images/UpgradePage/15.png",
      },
    },
  },
};

export default packagesData;
