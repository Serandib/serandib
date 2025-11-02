import Image from "next/image";
import { notFound } from "next/navigation";

const attractionsData: Record<
  string,
  { title: string; description: string; topPlaces: string[]; image: string }
> = {
  "cultural-heritageattractions": {
    title: "Cultural & Heritage A.",
    description:
      "Sri Lanka is home to some of the oldest civilizations in the world, where ancient kingdoms, sacred temples, and UNESCO World Heritage Sites reflect the island’s deep spiritual and historical significance. From majestic rock fortresses to royal palaces and ancient stupas, these sites showcase the craftsmanship, mythology, and enduring cultural legacy of the country.",
    topPlaces: [
      "Sigiriya Rock Fortress",
      "Anuradhapura Sacred City",
      "Polonnaruwa Ancient Kingdom",
      "Temple of the Tooth Relic – Kandy",
      "Dambulla Cave Temple",
      "Galle Dutch Fort",
    ],
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  "hillcountry-scenicescapes": {
    title: "Hill Country & Scenic",
    description:
      "Nestled in misty mountains, Sri Lanka’s hill country offers cool climates, lush tea plantations, cascading waterfalls, and panoramic viewpoints. This region is perfect for scenic journeys, relaxing retreats, and nature exploration, offering a refreshing contrast to the tropical coastlines.",
    topPlaces: [
      "Nuwara Eliya",
      "Ella",
      "Horton Plains & World’s End",
      "Gregory Lake",
      "Knuckles Mountain Range",
    ],
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  "wildlife-nationalparks": {
    title: "Wildlife & National",
    description:
      "Sri Lanka is one of the world’s best wildlife destinations, with an incredible diversity of mammals, birds, and marine life. Its national parks offer thrilling safaris where you can witness elephants, leopards, sloth bears, crocodiles, and exotic birdlife in their natural habitat.",
    topPlaces: [
      "Yala National Park",
      "Udawalawe National Park",
      "Minneriya National Park",
      "Wilpattu National Park",
      "Sinharaja Rainforest",
    ],
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  "beaches-coastalescapes": {
    title: "Beaches & Coastal",
    description:
      "With palm-fringed shores and crystal-clear waters, Sri Lanka boasts some of the most beautiful beaches in Asia. From tranquil bays ideal for relaxation to vibrant surf spots and luxury beach resorts, the coastline offers something for every kind of traveler.",
    topPlaces: [
      "Bentota",
      "Mirissa",
      "Unawatuna",
      "Trincomalee",
      "Pasikudah",
      "Arugam Bay",
    ],
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  "spiritual-pilgrimagesites": {
    title: "Spiritual &",
    description:
      "Sri Lanka is a sacred land revered by Buddhists, Hindus, Christians, and Muslims alike. Its temples and shrines are not only places of worship but also architectural marvels and symbols of peace, devotion, and ancient wisdom.",
    topPlaces: [
      "Sri Maha Bodhi – Anuradhapura",
      "Kataragama Temple",
      "Kelaniya Temple",
      "Munneswaram Temple – Chilaw",
      "Seetha Amman Temple – Nuwara Eliya",
      "Nallur Temple - Jaffna",
    ],
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  "nature-ecoattractions": {
    title: "Nature & Eco Attracti.„",
    description:
      "For travelers seeking tranquility and scenic beauty, Sri Lanka’s nature attractions offer pristine landscapes, rainforests, lakes, and botanical gardens. These eco-friendly destinations are ideal for walking trails, bird-watching, and reconnecting with nature.",
    topPlaces: [
      "Sinharaja Rainforest",
      "Peradeniya Botanical Gardens",
      "Hakgala Botanical Gardens",
      "Gregory Lake",
      "Madu River Wetlands",
    ],
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  "festivals-culturalexperiences": {
    title: "Festivals & Cultural",
    description:
      "Sri Lanka’s vibrant festival calendar reflects its multicultural heritage, where age-old traditions, rituals, music, and dance come to life. These festivals offer travelers the chance to immerse themselves in local customs and witness spectacular processions.",
    topPlaces: [
      "Kandy Esala Perahera",
      "Sinhala & Tamil New Year",
      "Vesak",
      "Deepavali",
      "Kataragama Festival",
    ],
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  "adventure-outdooractivities": {
    title: "Adventure & Outdoor",
    description:
      "Sri Lanka is a haven for adventure seekers, offering adrenaline-filled experiences in diverse terrains—from mountain trails and jungle treks to river rapids and ocean safaris. Perfect for active travelers, this category combines excitement with natural beauty.",
    topPlaces: [
      "Adam’s Peak (Pilgrimage hike)",
      "Kitulgala (White-water rafting)",
      "Ella (Hiking & Zip lining)",
      "Arugam Bay (Surfing)",
      "Horton Plains (Trekking)",
    ],
    image: "/assets/Images/UpgradePage/2.jpg",
  },
};

interface Props {
  params: { attraction: string };
}

export default async function AttractionItemPage({ params }: Props) {
  const resolvedParams = await params;
  const key = resolvedParams.attraction.replace(/\s+/g, "").toLowerCase();
  const attraction = attractionsData[key];

  if (!attraction) notFound();

  return (
    <div className="p-10 flex flex-col items-center mt-40">
      <h1 className="text-4xl font-bold text-primary mb-5">
        {attraction.title}
      </h1>
      <Image
        width={200}
        height={200}
        src={attraction.image}
        alt={attraction.title}
        className="rounded-2xl w-full max-w-2xl shadow-lg"
      />
      <p className="mt-5 text-lg text-center max-w-3xl">
        {attraction.description}
      </p>

      <div className="mt-8 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-3">Top Places:</h2>
        <ul className="list-disc list-inside text-lg">
          {attraction.topPlaces.map((place, idx) => (
            <li key={idx}>{place}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { attraction: "culturalheritage" },
    { attraction: "hillcountry" },
    { attraction: "wildlife" },
    { attraction: "beaches" },
    { attraction: "spiritual" },
    { attraction: "natureeco" },
    { attraction: "festivals" },
    { attraction: "adventure" },
  ];
}
