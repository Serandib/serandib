"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/container";

export default function AttractionPage() {
  const attractions = [
    {
      name: "Cultural - Heritage Attractions",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
    {
      name: "Hill Country - Scenic Escapes",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
    {
      name: "Wildlife - National Parks",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
    {
      name: "Beaches - Coastal Escapes",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
    {
      name: "Spiritual - Pilgrimage Sites",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
    {
      name: "Nature - Eco Attractions",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
    {
      name: "Festivals - Cultural Experiences",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
    {
      name: "Adventure - Outdoor Activities",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
  ];

  return (
    <Container>
      <div className="p-8 md:p-16 mt-32">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Attractions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <motion.div
              key={attraction.name}
              className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={attraction.image}
                alt={attraction.name}
                width={600}
                height={400}
                className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-110"
              />

              {/* Blurred overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-3xl"></div>
                <h2 className="relative text-black text-2xl font-bold text-center px-4 z-10">
                  {attraction.name}
                </h2>
              </div>

              <Link
                href={`/Explore/Attraction/${attraction.name.replace(/\s+/g, "")}`}
                className="absolute inset-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
