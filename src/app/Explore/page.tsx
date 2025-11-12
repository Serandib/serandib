"use client";
import Button from "@/components/common/button";
import Container from "@/components/common/container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { sans3, playfair } from "@/styles/fonts/fonts";

export default function ExplorePage() {
  const router = useRouter();

  const exploreSections = [
    {
      title: "Destinations",
      text: "Discover Sri Lanka’s diverse destinations, each offering something uniquely magical. Wander through the misty highlands of Nuwara Eliya, marvel at the sacred temples of Kandy, explore the cultural triangle’s ancient cities, or relax along the palm-fringed southern coast. Venture into the wilderness of Yala or Wilpattu for a glimpse of majestic wildlife, or sail through the calm lagoons of the east. Wherever you go, you’ll find beauty, history, and authentic island charm.",
      image: "/assets/Images/Desti/explore1.jpg",
      reverse: false,
      link: "/Explore/Destinations",
    },
    {
      title: "Sri Lankan Events",
      text: "Sri Lanka is a land of celebration, where every month brings a new reason to gather, rejoice, and share in centuries-old traditions. From the vibrant Kandy Esala Perahera, with its majestic elephants and dazzling processions, to the soulful Vesak lanterns lighting up the night sky, each event reflects the island’s rich cultural spirit. Experience the colorful pageantry of local festivals, traditional dance performances, and cultural fairs that showcase the warmth, devotion, and joy of its people. Whether it’s a grand national festival or a village ceremony, every celebration invites you to be part of Sri Lanka’s living heritage.",
      image: "/assets/Images/UpgradePage/56.png",
      reverse: true,
      link: "/Explore/Events",
    },
    {
      title: "Things to Do",
      text: "Sri Lanka is a playground of experiences for every kind of traveler. Trek through rainforest trails, go white-water rafting in Kitulgala, or take a scenic train ride through the hills. Indulge in a rejuvenating ayurvedic spa, taste flavorful local cuisine, or join a traditional cooking class. Witness majestic elephants on safari, watch whales in the deep blue seas, or simply unwind with a sunset on the beach. Every moment here is an adventure, every experience, a memory to cherish.",
      image: "/assets/Images/Things/things.jpg",
      reverse: false,
      link: "/Explore/Things",
    },

    {
      title: "Attractions",
      text: "From ancient cities to natural wonders, Sri Lanka’s attractions promise to captivate every traveler. Explore the UNESCO World Heritage sites of Sigiriya, Polonnaruwa, and Anuradhapura, each echoing the island’s royal past. Wander through lush tea plantations, mist-covered mountains, and wildlife sanctuaries teeming with life. Discover the architectural beauty of colonial towns, sacred temples, and golden beaches that stretch for miles. Whether you’re seeking history, nature, or adventure, Sri Lanka’s attractions offer a perfect balance of serenity, excitement, and timeless beauty.",
      image: "/assets/Images/Attra/attra.jpg",
      reverse: true,
      link: "/Explore/Attraction",
    },
  ];

  return (
    <Container>
      <div
        className="bg- bg-center bg-no-repeat py-24 md:h-[700] h-[500] lg:mb-[2300] md:mb-[1500] mb-[3800] relative "
        style={{
          backgroundImage: "url('/assets/Images/Desti/explore.jpg')",
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="mt-32 mb-20 relative z-10">
          <div className="flex md:flex-row  flex-col gap-32 ">
            <div className="flex-1 flex-col">
              <h1
                className={`${playfair.className} font-medium md:text-7xl text-4xl text-white mr-10 mt-5 text-right`}
              >
                Explore <br /> Sri Lanka
              </h1>
              
            </div>
            {/* <div className="md:flex mt-5 hidden">
              <Image
                src="/assets/Images/Desti/explore.jpg"
                alt=""
                width={800}
                height={800}
                className="rounded-2xl w-[800px] h-[600px] "
              ></Image>
            </div> */}
          </div>

          <div className="mt-96 flex flex-col gap-28">
            {exploreSections.map((section, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row ${
                  section.reverse ? "md:flex-row-reverse" : ""
                } items-center justify-between gap-10 `}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className=" rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl"
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={200}
                    height={200}
                    className="object-cover w-[650px] h-[350px]"
                  />
                </motion.div>

                <div
                  className={`flex flex-col md:w-1/2 ${
                    section.reverse ? "text-left" : "text-right"
                  }`}
                >
                  <h2
                    className={`${playfair.className} font-bold text-3xl text-gray-900 mt-5 `}
                  >
                    {section.title}
                  </h2>
                  <p
                    className={`${sans3.className} text-gray-600 mt-5 md:text-xl leading-relaxed text-justify`}
                  >
                    {section.text}
                  </p>
                  <div
                    className={`mt-8 ${
                      section.reverse ? "justify-start" : "justify-end"
                    } flex`}
                  >
                    <Button
                      label="Explore More"
                      variant="secondary"
                      size="md"
                      onClick={() => router.push(section.link)}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
