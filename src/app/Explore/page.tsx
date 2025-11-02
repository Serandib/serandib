"use client";
import Button from "@/components/common/button";
import Container from "@/components/common/container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ExplorePage() {
  const router = useRouter();

  const exploreSections = [
    {
      title: "Destinations",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/assets/Images/UpgradePage/56.png",
      reverse: false,
      link: "/Explore/Destinations",
    },
    {
      title: "Things to Do",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          <h1 className="font-extrabold md:text-6xl text-4xl text-primary mb-5 mt-5 font-[Momo_Signature]">
            Explore Sri Lanka
          </h1>
          <p className="text-gray-600 md:w-2/3 w-full text-lg leading-relaxed font-[Times_New_Roman]">
            Discover the beauty, culture, and charm of Sri Lanka — where every
            journey unveils a new story waiting to be told.
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
                <h2 className="font-bold text-3xl text-gray-900 font-[Times_New_Roman]">
                  {section.title}
                </h2>
                <p className="text-gray-600 mt-5 text-lg leading-relaxed">
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
