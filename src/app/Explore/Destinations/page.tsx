"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/container";

export default function DestinationsPage() {
  const destinations = [
    { name: "Kandy", image: "/assets/Images/UpgradePage/15.png" },
    { name: "Nuwara Eliya", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Ella", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Colombo", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Galle", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Yala", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Bentota", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Sigiriya", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Dambulla", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Trincomalee", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Jaffna", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Polonnaruwa", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Anuradhapura", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Mirissa", image: "/assets/Images/UpgradePage/2.jpg" },
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
          Popular Destinations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((place) => (
            <motion.div
              key={place.name}
              className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={place.image}
                alt={place.name}
                width={600}
                height={400}
                className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-110"
              />

              {/* Blurred overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-3xl"></div>
                <h2 className="relative text-black text-2xl font-bold z-10">
                  {place.name}
                </h2>
              </div>

              <Link
                href={`/Explore/Destinations/${place.name.replace(/\s+/g, "")}`}
                className="absolute inset-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
