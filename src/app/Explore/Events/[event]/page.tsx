import { playfair } from "@/styles/fonts/fonts";
import Image from "next/image";
import { notFound } from "next/navigation";

const eventsData: Record<
  string,
  { title: string; description: string; image: string }
> = {
  kandyesalaperahera: {
    title: "Kandy Esala Perahera",
    description:
      "One of Asia’s grandest cultural spectacles, the Kandy Esala Perahera is a breathtaking procession held in honor of the Sacred Tooth Relic of Lord Buddha. The streets of Kandy come alive with traditional dancers, fire-breathers, whip-crackers, drummers, and beautifully adorned elephants carrying sacred relics. It is a profound display of devotion, heritage, and living culture.",
    image: "/assets/Images/UpgradePage/15.png",
  },
  "sinhala-tamilnewyear": {
    title: "Sinhala & Tamil New Year",
    description:
      "Celebrated island-wide, the Sinhala and Tamil New Year marks the end of the harvest season and the beginning of a new astrological cycle. Families engage in age-old customs, prepare traditional sweetmeats, light the hearth at auspicious times, and participate in joyful games and rituals that symbolize prosperity, unity, and renewal.",
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  vesakfestival: {
    title: "Vesak Festival",
    description:
      "Vesak commemorates the birth, enlightenment, and passing of Lord Buddha. The country is transformed into a spiritual wonderland with lanterns, illuminated pandals (storyboards), and free food stalls called “dansals” offering meals to all. It is a moment of peace, generosity, and reflection on compassion and simplicity.",
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  posonfestival: {
    title: "Poson Festival",
    description:
      "Poson marks the introduction of Buddhism to Sri Lanka in the 3rd century BCE. The sacred city of Anuradhapura becomes the epicenter of the celebrations, with thousands of pilgrims lighting oil lamps, meditating, and taking part in almsgiving ceremonies. The atmosphere is deeply spiritual and serene.",
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  deepavali: {
    title: "Deepavali",
    description:
      "Also known as the Festival of Lights, Deepavali is celebrated by Sri Lankan Hindus to honor the triumph of light over darkness. Homes are decorated with lamps, colorful kolam patterns, and fireworks fill the sky as families come together for rituals, feasts, and blessings from Lakshmi, the goddess of prosperity.",
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  kataragamafestival: {
    title: "Kataragama Festival",
    description:
      "Held in one of Sri Lanka’s holiest multi-religious pilgrimage sites, the Kataragama Esala Festival draws Buddhists, Hindus, and indigenous communities. The festival features fire walking, kavadi dance rituals, and nightly processions dedicated to Lord Kataragama Skanda. The energy is spiritual, passionate, and deeply traditional.",
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  srilankateafestival: {
    title: "Sri Lanka Tea Festival",
    description:
      "A celebration of the island’s renowned tea heritage, this festival features tea tastings, factory tours, estate walks, and cultural performances in the hill country. It showcases the journey of Ceylon Tea from leaf to cup, honoring the craftsmanship and legacy behind one of the world’s finest beverages.",
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  "negombo-arugambaybeachfestivals": {
    title: "Negombo & Arugam Bay Beach Festivals",
    description:
      "These coastal celebrations highlight Sri Lanka’s vibrant beach culture with music, surfing competitions, seafood feasts, and water sports activities. It’s where the island’s youthful spirit, nightlife, and laid-back lifestyle come to life.",
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  navarathrifestival: {
    title: "Navarathri Festival",
    description:
      "This nine-night Hindu festival honors the divine feminine through music, dance, and temple offerings. It’s celebrated across major Hindu temples in Sri Lanka and showcases classical dance performances and devotion to goddess Durga, Lakshmi, and Saraswathi.",
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  galleliteraryfestival: {
    title: "Galle Literary Festival",
    description:
      "A global platform for literature, this prestigious festival attracts world-renowned authors, poets, journalists, and thinkers. Held within the UNESCO-listed Galle Fort, it combines intellectual inspiration with stunning coastal charm and artistic experiences.",
    image: "/assets/Images/UpgradePage/2.jpg",
  },
  worldsurfleaguearugambaypro: {
    title: "World Surf League – Arugam Bay Pro",
    description:
      "This international surfing event positions Sri Lanka as a world-class surfing destination. Professional surfers compete against the backdrop of golden beaches, palm trees, and vibrant island culture.",
    image: "/assets/Images/UpgradePage/2.jpg",
  },
};

interface Props {
  params: Promise<{ event: string }>;
}

export default async function EventPage({ params }: Props) {
  const resolvedParams = await params;
  const key = resolvedParams.event.replace(/\s+/g, "").toLowerCase();
  const event = eventsData[key];

  if (!event) {
    notFound();
  }

  return (
    <div className="p-10 flex flex-col items-center mt-32">
      <h1 className={`${playfair.className} text-4xl font-bold text-primary mb-5`}>{event.title}</h1>
      <div className="flex md:flex-row gap-10 flex-col">
        <p className="mt-5 text-lg  max-w-3xl flex text-justify ">
          {event.description}
        </p>
        <Image
          width={200}
          height={200}
          src={event.image}
          alt={event.title}
          className="rounded-2xl w-md max-w- shadow-lg flex"
        />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(eventsData).map((event) => ({ event }));
}
