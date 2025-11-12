"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/container";
import { playfair } from "@/styles/fonts/fonts";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LocationEdit,
  Mail,
  PhoneCall,
  Truck,
} from "lucide-react";

export default function Homepage() {
  const [guides, setGuides] = useState(0);
  const [experience, setExperience] = useState(0);

  // Animate the numbers
  useEffect(() => {
    let guidesStart = 0;
    let expStart = 0;
    const guidesEnd = 50;
    const expEnd = 10;

    const duration = 2000; // 2 seconds
    const interval = 20; // update every 20ms
    const guidesStep = (guidesEnd / duration) * interval;
    const expStep = (expEnd / duration) * interval;

    const timer = setInterval(() => {
      guidesStart += guidesStep;
      expStart += expStep;
      if (guidesStart >= guidesEnd) guidesStart = guidesEnd;
      if (expStart >= expEnd) expStart = expEnd;

      setGuides(Math.floor(guidesStart));
      setExperience(Math.floor(expStart));

      if (guidesStart === guidesEnd && expStart === expEnd)
        clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);
  const packages = [
    {
      name: "Cultural - Heritage Tours",
      image: "/assets/Images/Desti/kandycard.jpg",
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
    { name: "Dream Weddings", image: "/assets/Images/Pack/.jpg" },
    { name: "Romantic Holidays", image: "/assets/Images/Pack/roma.jpg" },
    { name: "Northern Sri Lanka", image: "/assets/Images/Pack/.jpg" },
    { name: "Excursions", image: "/assets/Images/Pack/excus.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
  };

  const visiblePackages = [
    packages[currentIndex],
    packages[(currentIndex + 1) % packages.length],
    packages[(currentIndex + 2) % packages.length],
  ];

  // Destinations (mirror of the Packages carousel)
  const destinations = [
    { name: "Kandy", image: "/assets/Images/Desti/kandycard.jpg" },
    { name: "Nuwara Eliya", image: "/assets/Images/Desti/nuwaracard.jpg" },
    { name: "Ella", image: "/assets/Images/Desti/ellacard.jpg" },
    { name: "Colombo", image: "/assets/Images/Desti/colombocard.jpg" },
    { name: "Galle", image: "/assets/Images/Desti/galle.jpg" },
    { name: "Yala", image: "/assets/Images/Desti/yala.jpg" },
    { name: "Bentota", image: "/assets/Images/Desti/bentotacard.jpg" },
    { name: "Sigiriya", image: "/assets/Images/Desti/sigiriyacard.jpg" },
    { name: "Dambulla", image: "/assets/Images/Desti/dambucard.jpg" },
    { name: "Trincomalee", image: "/assets/Images/Desti/trincocard.jpg" },
    { name: "Jaffna", image: "/assets/Images/Desti/jaffnacard.jpg" },
    { name: "Polonnaruwa", image: "/assets/Images/Desti/polocard.jpg" },
    { name: "Anuradhapura", image: "/assets/Images/Desti/anuracard.jpg" },
    { name: "Mirissa", image: "/assets/Images/Desti/mirrisacard.jpg" },
  ];

  const [currentDestIndex, setCurrentDestIndex] = useState(0);
  const [destDirection, setDestDirection] = useState(1);

  const prevDest = () => {
    setDestDirection(-1);
    setCurrentDestIndex((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1
    );
  };

  const nextDest = () => {
    setDestDirection(1);
    setCurrentDestIndex((prev) =>
      prev === destinations.length - 1 ? 0 : prev + 1
    );
  };

  const visibleDestinations = [
    destinations[currentDestIndex],
    destinations[(currentDestIndex + 1) % destinations.length],
    destinations[(currentDestIndex + 2) % destinations.length],
  ];

  // Subtle horizontal spring animation
  const cardVariants = {
    initial: (dir: number) => ({ x: dir * 50, opacity: 0.8 }),
    animate: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: -dir * 50, opacity: 0.8 }),
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[100vh]">
        <Image
          src="/assets/Images/Desti/explore1.jpg"
          alt="background"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <Container>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Explore the World
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Discover destinations and experiences.
            </p>
          </Container>
        </div>
      </div>

      {/* Package Carousel Section */}
      <Container>
        <div className="mt-24 mb-24 relative">
          <h2
            className={`${playfair.className} text-4xl md:text-5xl text-center font-semibold text-primary mb-12`}
          >
            Our Popular Packages
          </h2>

          <div className="flex items-center justify-center relative">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 bg-primary p-3 rounded-full shadow-md hover:bg-white transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white hover:text-primary" />
            </button>

            {/* Package Cards */}
            <div className="flex gap-8 overflow-hidden w-full justify-center">
              <AnimatePresence initial={false} custom={direction}>
                {visiblePackages.map((pkg) => (
                  <motion.div
                    key={pkg.name + currentIndex}
                    className="relative group rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)] transition-all duration-500 min-w-[300px]"
                    custom={direction}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ type: "tween", stiffness: 250, damping: 25 }}
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-80 md:h-72 lg:h-80 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                      <h3 className="text-2xl font-semibold mb-2">
                        {pkg.name}
                      </h3>
                      <div className="w-24 h-1 bg-white/70" />
                    </div>
                    <Link
                      href={`/Packages/${pkg.name
                        .replace(/\s+/g, "")
                        .toLowerCase()}`}
                      className="absolute inset-0"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-20 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* View All Button */}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/Packages"
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/80 transition"
            >
              View All Packages →
            </Link>
          </div>

          {/* Destinations Carousel (mirrors packages) */}
          <div className="mt-16 mb-8 relative">
            <h2
              className={`${playfair.className} text-3xl md:text-4xl text-center font-semibold text-primary mb-8`}
            >
              Popular Destinations
            </h2>

            <div className="flex items-center justify-center relative">
              {/* Left Arrow */}
              <button
                onClick={prevDest}
                className="absolute left-0 z-20 bg-primary p-3 rounded-full shadow-md hover:bg-white transition"
                aria-label="Previous destination"
              >
                <ChevronLeft className="w-6 h-6 text-white hover:text-primary" />
              </button>

              {/* Destination Cards */}
              <div className="flex gap-8 overflow-hidden w-full justify-center">
                <AnimatePresence initial={false} custom={destDirection}>
                  {visibleDestinations.map((place) => (
                    <motion.div
                      key={place.name + currentDestIndex}
                      className="relative group rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)] transition-all duration-500 min-w-[300px]"
                      custom={destDirection}
                      variants={cardVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        type: "tween",
                        stiffness: 250,
                        damping: 25,
                      }}
                    >
                      <Image
                        src={place.image}
                        alt={place.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-80 md:h-72 lg:h-80 transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                        <h3 className="text-2xl font-semibold mb-2">
                          {place.name}
                        </h3>
                        <div className="w-24 h-1 bg-white/70" />
                      </div>

                      <Link
                        href={`/Explore/Destinations/${place.name.replace(
                          /\s+/g,
                          ""
                        )}`}
                        className="absolute inset-0"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextDest}
                className="absolute right-0 z-20 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
                aria-label="Next destination"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>

            <div className="flex justify-center mt-8">
              <Link
                href="/Explore/Destinations"
                className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/80 transition"
              >
                View All Destinations →
              </Link>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:mt-28 mt-10">
            <div className="flex-1 text-center text-primary md:text-5xl text-2xl md:text-left">
              Why Choose <span className="font-bold">Serendib</span>
              <span className="text-primary2 font-bold">GO?</span>
            </div>
            <div className="flex-1  text-xl text-justify">
              At SerendibGo, we design journeys that awaken your sense of
              wonder. Born from a love for our island home, we combine insider
              knowledge, heartfelt hospitality, and attention to detail to
              create experiences that feel personal and unforgettable. From
              sunrise over ancient ruins to sunset on untouched shores, every
              moment is crafted to tell a story, your story. With SerendibGo,
              you travel not as a visitor, but as part of Sri Lanka’s living
              rhythm, authentic, inspiring, and truly serendipitous.
            </div>
          </div>

          <div className=" flex md:flex-row flex-col md:mt-28 mt-10">
            <div className="flex flex-col md:gap-20 gap-10">
              <div className="flex text-xl text-justify ">
                In tincidunt egestas purus, vitae tincidunt dolor lobortis ac.
                Lorem ipsum dolor sit amet.
              </div>
              <div className="flex md:flex-row flex-col justify-center md:gap-32 gap-10 items-center ">
                <div className="flex flex-col text-4xl font-bold  ">
                  <div className="">Tour Guides</div>
                  <div className="text-center text-primary">{guides}+</div>
                </div>
                <div className="flex flex-col text-4xl font-bold">
                  <div>Experience</div>
                  <div className="text-center text-primary">
                    {experience}+ years
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-20">
              <div className="md:text-5xl text-2xl text-primary2 font-semibold md:text-right text-center flex flex-col">
                {" "}
                Travel Services
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <div className="border-2 rounded-xl w-80 h-16  border-primary2 md:ml-[500px] flex flex-row items-center justify-center gap-2">
                  <div className="text-center flex text-xl ">
                    Island Wide Transport
                  </div>
                  <Truck className="flex text-primary2" size={40} />
                </div>
                <div className="border-2 rounded-xl w-80 h-16  border-primary2 md:ml-[400px] flex flex-row items-center justify-center gap-2">
                  <div className="text-center flex text-xl ">
                    Island Wide Transport
                  </div>
                  <Truck className="flex text-primary2" size={40} />
                </div>
                <div className="border-2 rounded-xl w-80 h-16  border-primary2 md:ml-[300px] flex flex-row items-center justify-center gap-2">
                  <div className="text-center flex text-xl ">
                    Island Wide Transport
                  </div>
                  <Truck className="flex text-primary2" size={40} />
                </div>
              </div>
            </div>
          </div>

          <div className="md:mt-28 mt-16 ">
            <div className="flex items-center justify-center md:text-4xl text-2xl font-medium">
              SerendibGo (Private) Limited
            </div>
            <div className="flex justify-center md:text-2xl text-xl">
              Let’s make your dream trip a reality.
            </div>
            <div className="flex lg:flex-row lg:justify-between mt-8 md:text-2xl text-xl flex-col items-center gap-5 ">
              <div className="flex flex-row  items-center gap-5 ">
                <div className="flex">
                  <PhoneCall size={40} />{" "}
                </div>
                <div className="flex flex-col">
                  <div className="flex">+94 76 123 4567</div>
                  <div className="flex">+94 76 123 4567</div>
                </div>
              </div>
              <div className="flex-row flex items-center gap-5 ">
                <div className="flex">
                  <Mail size={40} />
                </div>
                <div className="flex">info@serendibgo.com</div>
              </div>
              <div className="flex-row flex items-center gap-5 ">
                <div className="flex">
                  <LocationEdit size={40} />
                </div>
                <div className="flex">
                  No 220A 1/1,
                  <br /> Bauddhaloka Mawatha,
                  <br /> Colombo 07, Sri Lanka
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
