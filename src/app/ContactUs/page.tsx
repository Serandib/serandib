"use client";

import Container from "@/components/common/container";
import { ChevronDown, ChevronUp, Mail, PhoneCall, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer as a travel agency?",
      answer:
        "We offer tour planning, hotel bookings, transportation, guided excursions, flight ticketing, visa assistance, safari tours, and 24/7 travel support to ensure a hassle-free vacation experience.",
    },
    {
      question: "Can I customize my travel itinerary?",
      answer:
        "Absolutely! We specialize in tailor-made packages based on your interests, preferred travel style, budget, and travel dates.",
    },
    {
      question: "Do you offer airport pick-up and drop-off services?",
      answer:
        "Yes, all our packages can include private airport transfers for your comfort and convenience.",
    },
    {
      question: "Are your tours suitable for families and children?",
      answer:
        "Yes, we create family-friendly itineraries with suitable accommodations, activities, and safe travel arrangements for children and seniors.",
    },
    {
      question: "How do I confirm a booking?",
      answer:
        "You can confirm your booking by making an initial deposit. Once the payment is received, we will provide you with all confirmations and travel documents.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, credit/debit cards, and online payment gateways. International clients can also pay via secure online platforms.",
    },
    {
      question: "Do I need a visa to visit Sri Lanka?",
      answer:
        "Yes, most travelers need an Electronic Travel Authorization (ETA) to enter Sri Lanka. We can assist you with the visa application process.",
    },
    {
      question: "Is travel insurance included in the package?",
      answer:
        "Travel insurance is optional but highly recommended. We can arrange it upon request.",
    },
    {
      question: "Can I make changes to my itinerary after booking?",
      answer:
        "Yes, modifications can be made depending on hotel and activity availability. Additional charges may apply based on the changes.",
    },
    {
      question: "What happens if my flight is delayed or canceled?",
      answer:
        "Our support team will assist you with rescheduling transfers and tour activities to ensure minimal disruption to your journey.",
    },
    {
      question: "Are meals included in the tour packages?",
      answer:
        "Meals depend on the package type. We offer options such as breakfast-only, half board, or full board. You can choose based on your preference.",
    },
    {
      question: "Do you provide tour guides?",
      answer:
        "Yes, we provide professional, multilingual licensed tour guides and chauffeur-guides knowledgeable about Sri Lanka’s history, culture, and nature.",
    },
    {
      question: "Is it safe to travel in Sri Lanka?",
      answer:
        "Yes, Sri Lanka is a safe and welcoming destination for tourists. We ensure all our travel arrangements meet safety and comfort standards.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellation terms depend on the package and time of cancellation. We will provide detailed policy information before booking confirmation.",
    },
    {
      question: "How do I contact you during my trip?",
      answer:
        "We offer 24/7 customer support via phone, WhatsApp, and email to assist you throughout your journey.",
    },
  ];

  return (
    <Container>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full mt-24 rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="/assets/Images/ContactUs/fish.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-center"
          >
            Get in <span className="text-primary2">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl max-w-2xl text-center"
          >
            We’re here to help you plan your dream holiday — wherever your
            journey takes you.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-32 flex flex-col lg:flex-row gap-20 items-center"
      >
        {/* Left Side Info */}
        <div className="flex flex-col gap-6 text-center lg:text-start flex-1">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s make your <span className="text-primary2">dream trip</span>{" "}
            real
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Reach out to our travel experts for personalized assistance. Whether
            you’re planning your honeymoon, an adventure escape, or a cultural
            exploration — we’re just a message away.
          </p>
          <div className="flex justify-center lg:justify-center mt-5">
            <Image
              src="/assets/Images/ContactUs/travel.png"
              alt="Travel Illustration"
              width={200}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 w-full">
          <div className="bg-white/80 backdrop-blur-md shadow-lg p-8 rounded-2xl border border-gray-200">
            <h3 className="text-3xl font-semibold mb-6 text-center">
              Send Us a Message
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-primary transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-primary transition"
              />
              <input
                type="text"
                placeholder="Your Country"
                className="p-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-primary transition"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="p-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-primary transition"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 rounded-xl border-2 border-gray-200 h-40 resize-none focus:outline-none focus:border-primary transition"
              />
              <div className="flex justify-end gap-4">
                <button
                  type="reset"
                  className="px-5 py-2 border-2 border-gray-400 rounded-xl hover:bg-gray-100 transition"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary text-white rounded-xl hover:bg-primary2 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        id="faq-section"
        className="mt-32"
      >
        <h2 className="text-4xl font-bold mb-10 text-center">
          Your <span className="text-primary2">Questions</span>, Answered.
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 ">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4 ">
              <div
                className="flex justify-between items-center cursor-pointer text-xl font-medium text-gray-700 hover:text-primary transition "
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={22} />
                ) : (
                  <ChevronDown size={22} />
                )}
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 mt-3 text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer Contact Info */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-32 mb-40 text-center"
      >
        <h3 className="text-3xl font-bold mb-2">
          SerendibGo (Private) Limited
        </h3>
        <p className="text-lg text-gray-600 mb-10">
          Let’s make your dream trip a reality.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 text-gray-700 text-lg">
          <div className="flex items-center gap-3">
            <PhoneCall size={28} />
            <div>
              <div>+94 76 123 4567</div>
              <div>+94 76 123 4567</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={28} />
            <div>info@serendibgo.com</div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={28} />
            <div className="text-center lg:text-start">
              No 220A 1/1,
              <br /> Bauddhaloka Mawatha,
              <br /> Colombo 07, Sri Lanka
            </div>
          </div>
        </div>
      </motion.section>
    </Container>
  );
}
