"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/container";

export default function PackagesPage() {
  const packages = [
    {
      name: "Cultural Heritage Tour",
      image: "/assets/Images/UpgradePage/15.png",
    },
    { name: "Tea Country Escape", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Surf & Beach Holiday", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Wildlife Safari", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Pilgrimage Journey", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Adventure & Trekking", image: "/assets/Images/UpgradePage/2.jpg" },
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
          Packages
        </motion.h2>

        <div className="flex flex-col gap-10">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={pkg.image}
                alt={pkg.name}
                width={600}
                height={400}
                className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-3xl"></div>
                <h2 className="relative text-black text-2xl font-bold z-10 ">
                  {pkg.name}
                </h2>
              </div>

              <Link
                href={`/Packages/${pkg.name.replace(/\s+/g, "").toLowerCase()}`}
                className="absolute inset-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}


// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8