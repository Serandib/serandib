"use client";
import { motion } from "framer-motion";
import Container from "@/components/common/container";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <Container>
      <div className="mt-32 flex flex-col gap-28">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/assets/Images/Pack/yala.jpg"
            alt="SerendibGo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
            >
              About <span className="text-primary2">SerendibGo</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl max-w-3xl"
            >
              Experience Sri Lanka like never before — where culture, nature,
              and community come together in every journey.
            </motion.p>
          </div>
        </section>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="flex-1 text-justify">
            <h2 className="font-bold text-4xl md:text-5xl mb-4">
              Our <span className="text-primary2">Story</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At <span className="font-bold text-primary">SerendibGo</span>, we
              believe travel can transform lives — not only for travelers but
              for communities, wildlife, and the environment. Every experience
              we design celebrates Sri Lanka’s heritage and preserves its
              future.
              <br />
              <br />
              We collaborate with local artisans, eco-lodges, and sustainable
              guides to ensure your journey enriches both you and the island you
              explore. Travel with purpose. Experience with heart. At
              SerendibGo, we take you from dreams to memories.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/Images//Pack/yala.jpg"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-primary2/10 rounded-3xl p-10 md:p-16 shadow-md"
        >
          <h2 className="font-bold text-4xl mb-6 text-center">
            Our <span className="text-primary">Mission</span>
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-3 max-w-3xl mx-auto">
            <li>
              Design authentic, meaningful, and personalized travel experiences.
            </li>
            <li>
              Ensure exceptional service through responsible tourism and
              innovation.
            </li>
            <li>Empower communities while preserving Sri Lanka’s heritage.</li>
            <li>
              Deliver journeys that go beyond sightseeing — creating memories
              for life.
            </li>
          </ul>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-bold text-4xl mb-4 text-primary2">Our Vision</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            &quot;To be Sri Lanka’s most trusted and transformative travel
            partner, crafting unforgettable journeys that celebrate culture,
            nature, and human connection — turning every traveler’s dream into
            timeless memories.&quot;
          </p>
        </motion.section>

        {/* Sustainability Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="flex-1 order-2 md:order-1 text-justify">
            <h2 className="font-bold text-4xl mb-4">
              Our <span className="text-primary2">Sustainability</span> Promise
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At SerendibGo, sustainability isn’t an option — it’s a promise. We
              work to protect Sri Lanka’s ecosystems, empower its communities,
              and preserve its traditions through conscious tourism. From
              eco-conscious lodging and waste reduction to responsible wildlife
              encounters and cultural preservation, every tour is a step toward
              a greener, fairer future. When you travel with us, you become part
              of this mission — creating change, connection, and conservation
              with every journey.
            </p>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <Image
              src="/assets/Images/Pack/yala.jpg"
              alt="Sustainability"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>
        </motion.section>
      </div>
    </Container>
  );
}
