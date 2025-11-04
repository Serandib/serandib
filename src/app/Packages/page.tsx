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
      <div className="px-6 md:px-16 mt-28 md:mt-36">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-center text-primary tracking-tight mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Discover Our Packages
        </motion.h2>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className="relative group rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)] transition-all duration-500"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              {/* Image */}
              <Image
                src={pkg.image}
                alt={pkg.name}
                width={600}
                height={400}
                className="object-cover w-full h-80 md:h-72 lg:h-80 transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <motion.h3
                  className="text-2xl font-semibold mb-2 group-hover:text-white/90"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {pkg.name}
                </motion.h3>

                <motion.p
                  className="text-sm text-white/70 leading-snug"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Embark on an unforgettable journey filled with unique
                  experiences and breathtaking moments.
                </motion.p>
              </div>

              {/* Glass Hover Layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center">
                <span className="text-white text-lg font-medium tracking-wide bg-white/20 px-5 py-2 rounded-full border border-white/30 backdrop-blur-md shadow-sm">
                  View Details →
                </span>
              </div>

              {/* Clickable Link */}
              <Link
                href={`/Packages/${pkg.name.replace(/\s+/g, "").toLowerCase()}`}
                className="absolute inset-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
