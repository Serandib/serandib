"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/container";
import { playfair } from "@/styles/fonts/fonts";

export default function ThingsPage() {
  const things = [
    { name: "Hiking", image: "/assets/Images/Things/hikecard.jpg" },
    { name: "Whale", image: "/assets/Images/Things/whalecard.jpg" },
    { name: "Scuba", image: "/assets/Images/Things/divecard.jpg" },
    { name: "Cycling", image: "/assets/Images/Things/cyclecard.jpg" },
    { name: "Tea", image: "/assets/Images/Things/teacard.jpg" },
    { name: "Garden", image: "/assets/Images/Things/gardencard.jpg" },
    { name: "Bird", image: "/assets/Images/Things/birdcard.jpg" },
    { name: "Temple", image: "/assets/Images/Things/templecard.jpg" },
  ];

  return (
    <Container>
      <div className="p-8 md:p-16 mt-32">
        <div
          className={`${playfair.className} text-4xl md:text-5xl font-medium text-center text-primary mb-12`}
        >
          Things To Do
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {things.map((item) => (
            <motion.div
              key={item.name}
              className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={600}
                height={400}
                className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-110"
              />

              {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-3xl"></div>
                <h2 className="relative text-black text-2xl font-bold z-10">
                  {item.name}
                </h2>
              </div> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <motion.h3
                  className="text-2xl font-semibold mb-2 group-hover:text-white/90"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.name}
                </motion.h3>

                <motion.p
                  className=" leading-snug w-24 h-1 bg-white/70"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                ></motion.p>
              </div>

              <Link
                href={`/Explore/Things/${item.name}`}
                className="absolute inset-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
