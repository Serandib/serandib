"use client";
import Button from "@/components/common/button";
import Container from "@/components/common/container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { lato, playfair } from "@/styles/fonts/fonts";

export default function ExplorePage() {
  const router = useRouter();

  const exploreSections = [
    {
      title: "Destinations",
      text: "Discover Sri Lanka’s diverse destinations, each offering something uniquely magical. Wander through the misty highlands of Nuwara Eliya, marvel at the sacred temples of Kandy, explore the cultural triangle’s ancient cities, or relax along the palm-fringed southern coast. Venture into the wilderness of Yala or Wilpattu for a glimpse of majestic wildlife, or sail through the calm lagoons of the east. Wherever you go, you’ll find beauty, history, and authentic island charm.",
      image: "/assets/Images/UpgradePage/56.png",
      reverse: false,
      link: "/Explore/Destinations",
    },
    {
      title: "Things to Do",
      text: "Sri Lanka is a playground of experiences for every kind of traveler. Trek through rainforest trails, go white-water rafting in Kitulgala, or take a scenic train ride through the hills. Indulge in a rejuvenating ayurvedic spa, taste flavorful local cuisine, or join a traditional cooking class. Witness majestic elephants on safari, watch whales in the deep blue seas, or simply unwind with a sunset on the beach. Every moment here is an adventure, every experience, a memory to cherish.",
      image: "/assets/Images/UpgradePage/56.png",
      reverse: true,
      link: "/Explore/Things",
    },
    {
      title: "Sri Lankan Events",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/assets/Images/UpgradePage/56.png",
      reverse: false,
      link: "/Explore/Events",
    },
    {
      title: "Attractions",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/assets/Images/UpgradePage/56.png",
      reverse: true,
      link: "/Explore/Attraction",
    },
  ];

  return (
    <Container>
      <div className="mt-32 mb-20">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className={`${playfair.className} font-medium md:text-6xl text-4xl text-primary mb-5 mt-5`}
          >
            Explore Sri Lanka
          </h1>
          <p
            className={`${lato.className} text-gray-600 w-full text-lg leading-relaxed `}
          >
            Step into the heart of Sri Lanka, an island of timeless beauty and
            endless wonder. From golden beaches kissed by the Indian Ocean to
            emerald tea-carpeted hills and ancient cities whispering stories of
            glorious kingdoms, every landscape has its own rhythm. Explore the
            warmth of the people, the richness of the culture, and the island’s
            vibrant mix of nature and heritage. Sri Lanka isn’t just a
            destination, it’s a journey that stays with you forever.
          </p>
        </motion.div>

        <div className="mt-24 flex flex-col gap-28">
          {exploreSections.map((section, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                section.reverse ? "md:flex-row-reverse" : ""
              } items-center gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl"
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[350px]"
                />
              </motion.div>

              <div
                className={`flex flex-col md:w-1/2 ${
                  section.reverse ? "text-left" : "text-right"
                }`}
              >
                <h2 className={`${lato.className} font-bold text-3xl text-gray-900 `}>
                  {section.title}
                </h2>
                <p className={`${lato.className} text-gray-600 mt-5 text-lg leading-relaxed `}>
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
    </Container>
  );
}
