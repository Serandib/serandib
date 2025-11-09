import { playfair, sans3 } from "@/styles/fonts/fonts";
import Image from "next/image";
import { notFound } from "next/navigation";

const destinationsData: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    topPlaces?: string[];
    bestTimeToVisit?: string;
  }
> = {
  kandy: {
    title: "Kandy – The Cultural Heart of Sri Lanka",
    description:
      "Nestled among misty hills, Kandy is the cultural capital of Sri Lanka and home to the sacred Temple of the Tooth Relic, one of the most revered Buddhist pilgrimage sites in the world. With scenic lakes, royal botanical gardens, and rich cultural heritage, this UNESCO World Heritage city is where tradition, spirituality, and nature come together in perfect harmony.",
    image: "/assets/Images/Desti/kandy.jpg",
    topPlaces: [
      "Temple of the Sacred Tooth Relic – A spiritual site of global Buddhist significance.",
      "Royal Botanical Gardens (Peradeniya) – Renowned for its orchid collection and exotic flora.",
      "Kandy Lake – Serene walk with beautiful viewpoints.",
      "Cultural Dance Show – Experience traditional music, drumming, and Kandyan dance.",
    ],
    bestTimeToVisit:
      "📅 January to April & July to August – Dry and pleasant weather. The Esala Perahera Festival (July/August) is a major cultural highlight.",
  },
  nuwaraeliya: {
    title: "Nuwara Eliya – The Misty Tea Highlands",
    description:
      "Known as “Little England”, Nuwara Eliya is a breathtaking highland retreat set among rolling tea plantations, misty mountains, and cascading waterfalls. With colonial-era charm and cool climates, it is the heart of Sri Lanka’s tea-growing region and a highlight for nature lovers and scenic explorers.",
    image: "/assets/Images/Desti/nuwara.jpg",
    topPlaces: [
      "Tea Plantations & Factories – Experience tea plucking and tasting world-famous Ceylon tea.",
      "Gregory Lake – Picturesque spot for boating and relaxation.",
      "Horton Plains National Park – Home to World’s End cliff and endemic wildlife.",
      "Seetha Amman Temple – A sacred Ramayana site surrounded by forests.",
    ],
    bestTimeToVisit:
      "📅 February to April & August to September – Clear skies and cool weather, ideal for hiking and sightseeing.",
  },
  ella: {
    title: "Ella – The Scenic Mountain Escape",
    description:
      "Ella is a charming hill-country village surrounded by lush greenery, iconic viewpoints, cascading waterfalls, and tea estates. Known for its relaxed atmosphere and adventure-friendly landscapes, Ella is an essential stop for photographers, trekkers, and nature lovers.",
    image: "/assets/Images/Desti/ella.jpg",
    topPlaces: [
      "Nine Arch Bridge – An architectural marvel amidst cloud forests.",
      "Little Adam’s Peak – A short hike with stunning mountain views.",
      "Ella Rock – A moderately challenging trek rewarding you with panoramic vistas.",
      "Ravana Falls – A majestic waterfall connected to Ramayana legends.",
    ],
    bestTimeToVisit:
      "📅 January to April & August to September – Perfect for clear views and hiking.",
  },
  colombo: {
    title: "Colombo – The Vibrant Capital of Sri Lanka",
    description:
      "Colombo is a dynamic blend of modern city life and colonial charm. As Sri Lanka’s commercial capital, it offers luxury shopping, fine dining, historic architecture, beachfront promenades, and cultural landmarks. From bustling markets to serene temples, Colombo provides the perfect beginning or end to your Sri Lankan journey.",
    image: "/assets/Images/Desti/colombo.jpg",
    topPlaces: [
      "Galle Face Green – Oceanfront promenade ideal for sunset views.",
      "Gangaramaya Temple & Beira Lake – A spiritual and cultural landmark.",
      "Colombo National Museum – Showcasing Sri Lanka’s history and royal artifacts.",
      "Pettah Market – A lively bazaar for spices, textiles, and local life.",
      "Lotus Tower & Port City – Modern icons for entertainment and luxury experiences.",
    ],
    bestTimeToVisit:
      "📅 January to April & November to December – Less rainfall and pleasant temperature.",
  },
  galle: {
    title: "Galle – Colonial Charm by the Sea",
    description:
      "Galle is a UNESCO World Heritage city where European history meets tropical paradise. Its iconic 17th-century Dutch Fort overlooks the Indian Ocean and is filled with boutique hotels, art galleries, cafes, and cobblestone streets. Galle is a haven for history lovers, culture seekers, and coastal explorers.",
    image: "/assets/Images/Desti/gallecard.jpg",
    topPlaces: [
      "Galle Fort & Lighthouse – Beautiful walks with panoramic coastal views.",
      "Dutch Reformed Church – A historic colonial landmark.",
      "Maritime Museum – Showcasing shipwrecks and marine history.",
      "Unawatuna Beach – Popular for relaxation and snorkeling.",
      "Jungle Beach – A hidden gem for nature lovers.",
    ],
    bestTimeToVisit:
      "📅 December to April – Ideal beach weather and calm seas.",
  },
  yala: {
    title: "Yala – The Wildlife Kingdom",
    description:
      "Yala National Park is Sri Lanka’s premier wildlife destination, home to the highest density of leopards in the world. With diverse ecosystems ranging from forests to wetlands, Yala offers thrilling safari encounters featuring elephants, sloth bears, crocodiles, and exotic birdlife.",
    image: "/assets/Images/Desti/yalacard.jpg",
    topPlaces: [
      "Safari Game Drives – Morning and evening safaris for wildlife sightings.",
      "Leopard Watching Zones (Block 1) – Famous for frequent leopard sightings.",
      "Bundala National Park (Nearby) – Ideal for bird watching.",
      "Kataragama Temple – A sacred pilgrimage site near the park.",
    ],
    bestTimeToVisit:
      "📅 February to July – Dry season when animals gather around waterholes.",
  },
  bentota: {
    title: "Bentota – Luxury Beach Escape",
    description:
      "Bentota is one of Sri Lanka’s most exclusive coastal destinations, known for its golden beaches, luxury resorts, and tranquil river landscapes. It is the perfect destination for relaxation, water sports, and romantic getaways.",
    image: "/assets/Images/Desti/bentota.jpg",
    topPlaces: [
      "Bentota Beach – Ideal for swimming, sunbathing, and sunset strolls.",
      "Madu River Safari – Explore mangrove forests and cinnamon islands.",
      "Kosgoda Turtle Hatchery – Witness turtle conservation efforts.",
      "Brief Garden & Lunuganga Estate – Architectural masterpieces by Geoffrey Bawa.",
    ],
    bestTimeToVisit: "📅 November to April – Calm seas and sunny weather.",
  },
  sigiriya: {
    title: "Sigiriya – The Iconic Lion Rock Fortress",
    description:
      "Sigiriya, often called the “Eighth Wonder of the World,” is an ancient rock fortress rising majestically above the central plains of Sri Lanka. This UNESCO World Heritage Site is famed for its dramatic rock palace, landscaped water gardens, mirror wall, and well-preserved frescoes. Sigiriya blends mystery, engineering marvel, and royal heritage, making it one of Sri Lanka’s most iconic destinations.",
    image: "/assets/Images/Desti/sigiriya.jpg",
    topPlaces: [
      "Sigiriya Rock Fortress – Climb 1,200 steps to explore ancient ruins and stunning panoramic views.",
      "Sigiriya Frescoes – Intricate wall paintings of celestial maidens.",
      "Pidurangala Rock – Popular sunrise viewpoint overlooking Sigiriya Rock.",
      "Sigiriya Museum – Insight into the ancient royal city and its archaeological history.",
    ],
    bestTimeToVisit:
      "📅 January to April & July to September – Clear skies and ideal for hiking early mornings.",
  },
  dambulla: {
    title: "Dambulla – The Cave Temple Kingdom",
    description:
      "Dambulla is a spiritual and historical treasure, home to the largest and best-preserved cave temple complex in Sri Lanka. This UNESCO World Heritage Site features ancient murals, Buddha statues, and meditation chambers carved into rock. It is a central point in the Cultural Triangle, connecting heritage with serenity.",
    image: "/assets/Images/Desti/dambu.jpg",
    topPlaces: [
      "Dambulla Cave Temple (Golden Temple) – Five caves filled with over 150 Buddha statues.",
      "Iron Wood Forest (Namal Uyana) – World’s largest ironwood forest and pink quartz mountain.",
      "Dambulla Market – Sri Lanka’s largest wholesale produce market.",
    ],
    bestTimeToVisit:
      "📅 Year-round, but January to April offers the most pleasant climate.",
  },
  trincomalee: {
    title: "Trincomalee – Coastal Serenity & Marine Wonders",
    description:
      "Trincomalee, located on the east coast, is renowned for its pristine beaches, coral reefs, and natural deep-water harbor. It is a hub for marine adventures, whale watching, and cultural exploration, offering a tranquil alternative to the southern coast.",
    image: "/assets/Images/Desti/trinco.jpg",
    topPlaces: [
      "Nilaveli & Uppuveli Beaches – Ideal for relaxation and swimming.",
      "Pigeon Island National Park – Snorkeling paradise with coral reefs and reef sharks.",
      "Koneswaram Temple – A revered Hindu temple overlooking the ocean cliffs.",
      "Fort Frederick – Colonial fortress with scenic viewpoints.",
    ],
    bestTimeToVisit:
      "📅 May to September – Peak season with calm seas and sunny weather.",
  },
  jaffna: {
    title: "Jaffna – The Northern Cultural Jewel",
    description:
      "Jaffna is the cultural heart of Sri Lanka’s Northern Province, offering a unique blend of Tamil heritage, colonial history, and untouched coastal beauty. Recently reopened to tourism, it provides authentic cultural immersion, ancient temples, and island excursions unlike anywhere else in the country.",
    image: "/assets/Images/Desti/jaffna.jpg",
    topPlaces: [
      "Nallur Kandaswamy Temple – A magnificent Hindu temple of deep spiritual significance.",
      "Jaffna Fort – Dutch-built fortress with sea views.",
      "Delft Island – Remote island with wild ponies and colonial ruins.",
      "Casuarina Beach – Calm and shallow waters perfect for families.",
    ],
    bestTimeToVisit:
      "📅 January to April & August to September – Dry weather and cultural festivals.",
  },
  polonnaruwa: {
    title: "Polonnaruwa – The Ancient Royal Capital",
    description:
      "Polonnaruwa, a UNESCO World Heritage Site, is one of Sri Lanka’s most beautifully preserved ancient cities. Once a thriving commercial and religious hub, it showcases remarkable stone temples, royal baths, moonstones, and colossal Buddha statues. This archaeological treasure offers a journey back in time to the island’s golden age of civilization.",
    image: "/assets/Images/Desti/polo.jpg",
    topPlaces: [
      "Gal Vihara – Four magnificent Buddha statues carved into a single granite rock.",
      "Royal Palace Complex – The remnants of an ancient seven-story palace.",
      "Vatadage (Circular Relic House) – Intricate structure believed to house the Sacred Tooth Relic.",
      "Parakrama Samudra – An ancient man-made lake built by King Parakramabahu.",
    ],
    bestTimeToVisit:
      "📅 June to September & January to April – Dry and ideal for exploring archaeological sites.",
  },
  anuradhapura: {
    title: "Anuradhapura – The Cradle of Buddhism in Sri Lanka",
    description:
      "Anuradhapura is Sri Lanka’s first capital and one of the oldest continuously inhabited cities in the world. This sacred city is home to ancient stupas, monastic complexes, and the revered Sri Maha Bodhi tree—brought from India over 2,000 years ago. It is a spiritual haven that showcases the roots of Buddhism and the island’s royal legacy.",
    image: "/assets/Images/Desti/anura.jpg",
    topPlaces: [
      "Sri Maha Bodhi Tree – Sacred fig tree believed to be a sapling from the original tree under which Buddha attained enlightenment.",
      "Ruwanwelisaya Stupa – A towering stupa of remarkable architectural significance.",
      "Jetavana Monastery – One of the tallest brick structures of the ancient world.",
      "Isurumuniya Temple – Famous for its rock carvings and lake serenity.",
    ],
    bestTimeToVisit:
      "📅 January to April – Most pleasant weather for exploration.",
  },
  mirissa: {
    title: "Mirissa – Sri Lanka’s Whale-Watching Paradise",
    description:
      "Mirissa is a tropical haven on the southern coast, renowned for its golden beaches, vibrant nightlife, and world-class whale-watching experiences. With palm-fringed shores and azure waters, Mirissa is the perfect retreat for ocean lovers, honeymooners, and adventure seekers.",
    image: "/assets/Images/Desti/mirrisa.jpg",
    topPlaces: [
      "🐋 Whale Watching Excursions – Spot blue whales, sperm whales, and dolphins.",
      "🏖️ Mirissa Beach – Ideal for sunbathing, swimming, and beach relaxation.",
      "🌅 Parrot Rock Bridge – Offers scenic views of the coastline.",
      "🌴 Secret Beach – A secluded paradise for peaceful retreats.",
    ],
    bestTimeToVisit:
      "📅 November to April – Calm seas and peak whale-watching season.",
  },
};

interface Props {
  params: Promise<{ place: string }>;
}

export default async function DestinationPage({ params }: Props) {
  const resolvedParams = await params;
  const placeKey = resolvedParams.place.replace(/\s+/g, "").toLowerCase();
  const destination = destinationsData[placeKey];

  if (!destination) notFound();

  return (
    <div className="p-10 flex flex-col items-center mt-32">
      <h1
        className={`${playfair.className} text-4xl font-bold text-primary mb-5 text-center`}
      >
        {destination.title}
      </h1>
      <div className="flex md:flex-row md:gap-20 flex-col gap-16 ">
        <div className="flex">
          <Image
            width={250}
            height={250}
            src={destination.image}
            alt={destination.title}
            className="rounded-2xl w-[500px] h-[500px] shadow-lg"
          />
        </div>
        <div className={` flex flex-col`}>
          <p className={`mt-5 text-lg max-w-3xl text-justify `}>
            {destination.description}
          </p>

          {destination.topPlaces && (
            <div className="mt-10 text-left max-w-3xl">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Top Places to Visit:
              </h2>
              <ul className="list-disc list-inside text-lg space-y-2">
                {destination.topPlaces.map((place, index) => (
                  <li key={index}>{place}</li>
                ))}
              </ul>
            </div>
          )}

          {destination.bestTimeToVisit && (
            <div className="mt-8 text-left max-w-3xl">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Best Time to Visit:
              </h2>
              <p className="text-lg">{destination.bestTimeToVisit}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(destinationsData).map((key) => ({ place: key }));
}
