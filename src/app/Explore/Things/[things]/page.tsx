"use client";

import { useParams } from "next/navigation";
import Container from "@/components/common/container";
import Image from "next/image";
import { playfair } from "@/styles/fonts/fonts";

const thingsData: Record<
  string,
  {
    title: string;
    image: string;
    description: string;
    bestLocations: string[];
    thingsToRemember: string[];
    thingsToAvoid: string[];
  }
> = {
  hikingandtrekking: {
    title: "Hiking and Trekking",
    image: "/assets/Images/Things/hike.jpg",
    description:
      "Sri Lanka’s diverse landscapes offer an exceptional trekking experience from mist-draped mountain peaks to cloud forests and sacred pilgrimage trails. Whether it’s a sunrise hike up Adam’s Peak surrounded by chanting pilgrims or a scenic trail through the Horton Plains with views over dramatic escarpments, each journey reveals the island’s pristine natural beauty and spiritual essence.",
    bestLocations: [
      "Ella Rock",
      "Little Adam’s Peak",
      "Knuckles Range",
      "Horton Plains",
      "Adam’s Peak",
    ],
    thingsToRemember: [
      "Start early to avoid heat and crowds",
      "Wear proper hiking shoes and layered clothing",
      "Carry water, snacks, and a jacket (hill country can get windy)",
      "Hire a local guide for lesser-known trails",
    ],
    thingsToAvoid: [
      "Do not hike alone in remote areas",
      "Avoid littering—many areas are protected reserves",
      "Do not disturb wildlife or take plants/rocks as souvenirs",
    ],
  },
  whalewatching: {
    title: "Whale Watching",
    image: "/assets/Images/Desti/mirrisacard.jpg",
    description:
      "Sri Lanka is one of the world’s best whale-watching destinations, with nutrient-rich waters that attract magnificent blue whales, sperm whales, and pods of dolphins. Watching these giants breach and glide through the deep blue ocean is a once-in-a-lifetime encounter that brings you closer to nature’s most extraordinary marine life.",
    bestLocations: ["Mirissa", "Trincomalee", "Kalpitiya"],
    thingsToRemember: [
      "Choose a licensed, eco-friendly operator",
      "Carry sea-sickness tablets if you are prone to motion discomfort",
      "Early morning departures offer calmer seas and higher chances of sightings",
    ],
    thingsToAvoid: [
      "Do not lean over the boat railings recklessly",
      "Avoid feeding or touching marine animals",
      "Don’t board overcrowded or unlicensed boats",
    ],
  },
  scubadivingandsnorkeling: {
    title: "Scuba Diving & Snorkeling",
    image: "/assets/Images/Things/dive.jpg",
    description:
      "Dive beneath the Indian Ocean to uncover shipwrecks, coral gardens, schools of tropical fish, sea turtles, and hidden underwater caves. Whether you're a beginner or certified diver, Sri Lanka’s coastal reefs offer unforgettable marine biodiversity and exceptional visibility during the season.",
    bestLocations: ["Hikkaduwa", "Pigeon Island", "Trincomalee", "Kalpitiya"],
    thingsToRemember: [
      "Always dive with certified instructors",
      "Check equipment before entering the water",
      "Respect coral reefs—look, don’t touch",
    ],
    thingsToAvoid: [
      "Avoid diving during monsoon months",
      "Never touch marine life or remove corals",
      "Do not apply harmful sunscreen (use reef-safe products)",
    ],
  },
  cyclingexperiences: {
    title: "Cycling Experiences",
    image: "/assets/Images/Things/cycle.jpg",
    description:
      "Cycling through Sri Lanka’s countryside offers an authentic window into local life. Ride past lush paddy fields, ancient ruins, lake reservoirs, and smiling villagers. Whether cycling around Sigiriya or through Galle’s colonial lanes, it’s a tranquil and immersive way to explore the island.",
    bestLocations: [
      "Sigiriya",
      "Polonnaruwa",
      "Kandy",
      "Galle",
      "Anuradhapura",
    ],
    thingsToRemember: [
      "Wear a helmet and stay hydrated",
      "Start in the early morning to avoid mid-day heat",
      "Carry basic repair tools and sunscreen",
    ],
    thingsToAvoid: [
      "Avoid busy highways",
      "Don’t ignore traffic rules or local road etiquette",
      "Avoid wildlife paths without a guide",
    ],
  },
  teaestatewalks: {
    title: "Tea Estate Walks",
    image: "/assets/Images/Things/tea.jpg",
    description:
      "Stroll through emerald-green tea plantations set against stunning mountainous backdrops. Witness tea pluckers at work, learn centuries-old tea processing techniques inside colonial-era factories, and enjoy a tasting session of pure Ceylon tea straight from its origin.",
    bestLocations: ["Nuwara Eliya", "Ella", "Hatton", "Haputale"],
    thingsToRemember: [
      "Wear comfortable shoes paths can be steep",
      "Guided walks give deeper insights into tea culture",
      "Expect cooler climates",
    ],
    thingsToAvoid: [
      "Don’t trespass into restricted estate areas",
      "Avoid picking tea leaves unless invited by workers",
      "Be mindful of slippery terrain during rain",
    ],
  },
  gardenrambles: {
    title: "Garden Rambles",
    image: "/assets/Images/Things/garden.jpg",
    description:
      "Sri Lanka’s botanical gardens offer a peaceful escape into manicured landscapes brimming with exotic flora, orchids, bamboo forests, and spice groves. These gardens are perfect for leisurely strolls, photography, and understanding the island’s botanical heritage.",
    bestLocations: ["Peradeniya", "Hakgala", "Henarathgoda"],
    thingsToRemember: [
      "Visit in the morning for pleasant weather",
      "Carry insect repellent",
      "Respect protected plant species",
    ],
    thingsToAvoid: [
      "Do not pluck flowers or leaves",
      "Avoid noisy behavior that disturbs serenity",
      "Do not feed animals or birds",
    ],
  },
  birdwatching: {
    title: "Bird Watching",
    image: "/assets/Images/Things/bird.jpg",
    description:
      "Sri Lanka is a bird-watcher’s paradise with over 400 species, including rare endemics. Walk through tropical rainforests, wetlands, and mountain regions to spot colorful kingfishers, hornbills, and migratory species arriving from Siberia and Europe.",
    bestLocations: [
      "Sinharaja Rainforest",
      "Bundala",
      "Kumana",
      "Horton Plains",
    ],
    thingsToRemember: [
      "Carry binoculars and field guides",
      "Dress in natural colors for camouflage",
      "Maintain silence to not scare birds",
    ],
    thingsToAvoid: [
      "No flash photography",
      "Don’t disturb nests or feeding grounds",
      "Avoid walking off designated paths",
    ],
  },
  templetours: {
    title: "Temple Tours",
    image: "/assets/Images/Things/temple.jpg",
    description:
      "Temple tours allow you to connect deeply with Sri Lanka’s spiritual and cultural heritage. From ancient cave temples to sacred relic shrines, these sites reveal centuries of Buddhist devotion, intricate art, and timeless architecture.",
    bestLocations: [
      "Temple of the Tooth",
      "Dambulla Cave Temple",
      "Anuradhapura",
      "Kataragama",
    ],
    thingsToRemember: [
      "Dress modestly (shoulders and knees covered)",
      "Remove shoes and hats before entering temples",
      "Maintain silence and respect rituals",
    ],
    thingsToAvoid: [
      "No photography in restricted areas",
      "Never point your feet towards Buddha statues",
      "Avoid turning your back to statues when taking pictures",
    ],
  },
};

export default function ThingDetailsPage() {
  const params = useParams();
  const thing = (params.things as string)?.replace(/\s+/g, "").toLowerCase();
  const data = thingsData[thing];

  if (!data) {
    return (
      <Container>
        <div className="text-center py-10 text-2xl font-semibold text-gray-600">
          Thing not found.
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex flex-col items-start justify-start py-10 gap-6 mt-40">
        <h1
          className={`${playfair.className} text-3xl md:text-5xl font-medium text-primary`}
        >
          {data.title}
        </h1>

        {/* Image at the top */}
        <div className="w-full max-w-3xl h-80 relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4 text-justify">
          {data.description}
        </p>
        <div className="flex md:flex-row flex-col md:gap-40 gap-10 text-lg">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary">
              Best Locations
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {data.bestLocations.map((loc, index) => (
                <li key={index}>{loc}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-700">
              Things to Remember
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {data.thingsToRemember.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-red-700">
              Things to Avoid
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {data.thingsToAvoid.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
