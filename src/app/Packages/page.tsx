"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/container";
import { playfair } from "@/styles/fonts/fonts";

export default function PackagesPage() {
  const packages = [
    {
      name: "Cultural - Heritage Tours",
      image: "/assets/Images/Pack/kandy.jpg",
    },
    { name: "Beach Holidays", image: "/assets/Images/Pack/seapack2.jpg" },
    {
      name: "Wildlife - Nature Tours",
      image: "/assets/Images/Pack/elephan.jpg",
    },
    {
      name: "Ayurveda and Wellness Tours",
      image: "/assets/Images/Pack/spa.jpg",
    },
    { name: "Ramayana Yathra", image: "/assets/Images/Pack/rama.jpg" },
    { name: "Adventure Tours", image: "/assets/Images/Pack/adve.jpg" },
    { name: "Dream Weddings", image: "/assets/Images/Pack/wedd.jpg" },
    { name: "Romantic Holidays", image: "/assets/Images/Pack/wed.jpg" },
    { name: "Northern Sri Lanka", image: "/assets/Images/Pack/noth.jpg" },
    { name: "Excursions", image: "/assets/Images/Pack/excus.jpg" },
  ];

  return (
    <div>
      <Container>
        <div
          className=" bg- bg-center bg-no-repeat py-24 h-[700] lg:mb-[1500] md:mb-[1500] mb-[3500] relative "
          // style={{
          //   backgroundImage: "url('/assets/Images/Desti/ellacard.jpg')",
          // }}
        >
          <Image
            src="/assets/Images/Desti/ellacard.jpg"
            alt="background"
            fill
            priority
            className="object-cover brightness-75 md:flex hidden"
          />
          <div className="absolute inset-0 "></div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${playfair.className} relative text-4xl md:text-7xl md:text-right text-center md:text-white text-primary font-bold md:mt-36 mt-10 md:mr-20 font-sans3 `}
          >
            Discover <br /> Our Packages
          </motion.h1>
          <div className="flex justify-center md:mt-60 relative ">
            <div className="bg-white w-[1200] ">
              <div className="px-6 md:px-16   mt-10 ">
                {/* Heading */}

                <div>
                  {/* Grid Layout */}
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 "
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
                            className=" leading-snug w-24 h-1 bg-white/70"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          ></motion.p>
                        </div>

                        {/* Glass Hover Layer */}
                        {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center">
                          <span className="text-white text-lg font-medium tracking-wide bg-white/20 px-5 py-2 rounded-full border border-white/30 backdrop-blur-md shadow-sm">
                            View Details →
                          </span>
                        </div> */}

                        {/* Clickable Link */}
                        <Link
                          href={`/Packages/${pkg.name
                            .replace(/\s+/g, "")
                            .toLowerCase()}`}
                          className="absolute inset-0"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
