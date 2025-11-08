"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/container";
import { playfair } from "@/styles/fonts/fonts";

export default function EventsPage() {
  const events = [
    {
      name: "Kandy Esala Perahera",
      image: "/assets/Images/UpgradePage/15.png",
    },
    {
      name: "Sinhala - Tamil New Year",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
    { name: "Vesak Festival", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Poson Festival", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Deepavali", image: "/assets/Images/UpgradePage/2.jpg" },
    { name: "Kataragama Festival", image: "/assets/Images/UpgradePage/2.jpg" },
    {
      name: "Sri Lanka Tea Festival",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
    {
      name: "Negombo - Arugam Bay Beach Festivals",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
    { name: "Navarathri Festival", image: "/assets/Images/UpgradePage/2.jpg" },
    {
      name: "Galle Literary Festival",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
    {
      name: "World Surf League Arugam Bay Pro",
      image: "/assets/Images/UpgradePage/2.jpg",
    },
  ];

  return (
    <Container>
      <div className="p-8 md:p-16 mt-32">
        <div className={`${playfair.className} text-4xl md:text-5xl font-medium text-center text-primary mb-12`}>
          Events
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.name}
              className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={event.image}
                alt={event.name}
                width={600}
                height={400}
                className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-110"
              />

              {/* Blurred overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-3xl"></div>
                <h2 className="relative text-black text-2xl font-bold z-10">
                  {event.name}
                </h2>
              </div> */}
               <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <motion.h3
                  className="text-2xl font-semibold mb-2 group-hover:text-white/90"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {event.name}
                </motion.h3>

                <motion.p
                  className=" leading-snug w-24 h-1 bg-white/70"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                ></motion.p>
              </div>

              <Link
                href={`/Explore/Events/${event.name.replace(/\s+/g, "")}`}
                className="absolute inset-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
