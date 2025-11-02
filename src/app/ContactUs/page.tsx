"use client";
import Container from "@/components/common/container";
import {
  ChevronDown,
  ChevronUp,
  LocationEdit,
  Mail,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactUsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "This is your answer! You can write the detailed explanation or response here. It appears smoothly when you click the question.",
    },
    {
      question: "How can I contact your support team?",
      answer:
        "You can contact us via email or through our website contact form. We're always happy to help!",
    },
    {
      question: "Do you offer group travel packages?",
      answer:
        "Yes! We provide special packages and discounts for groups. Contact us for more details.",
    },
    {
      question: "Can I customize my travel plan?",
      answer:
        "Absolutely. Our team will help you build a personalized itinerary according to your preferences.",
    },
  ];

  return (
    <Container>
      <div>
        <div className="mt-56 flex lg:flex-row flex-col lg:gap-60 gap-20">
          {/* Contactus */}
          <div className="flex flex-col text-center lg:text-start">
            <div className="font-bold text-primary2 md:text-8xl text-4xl">
              Contact
            </div>
            <div className="flex flex-row items-center gap-7 justify-center lg:justify-start">
              <div className="md:w-64 w-20 h-1 bg-primary flex"></div>
              <div className="text-secondary font-bold md:text-8xl text-4xl flex">
                Us
              </div>
            </div>
            <div className="font-medium text-center">
              We’re here to help you plan <br /> your dream holiday.
            </div>
            <div className="flex justify-center">
              <Image
                src="/assets/Images/ContactUs/travel.png"
                alt=""
                width={200}
                height={200}
                className="w-32 h-32 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain"
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex border-gray-300 border-2 rounded-xl">
            <div className="flex flex-col gap-5">
              <div className="flex font-semibold md:text-4xl text-2xl px-10 mt-10">
                Get in Touch
              </div>
              <div className="px-10">
                <div className="font-medium">Name</div>
                <input
                  type="text"
                  className="border-gray-300 border-2 mb-5 mt-2 p-2 rounded-xl lg:w-[600px] w-auto"
                  placeholder="Enter your name"
                />
                <div className="font-medium">Email</div>
                <input
                  type="email"
                  className="border-gray-300 border-2 mb-5 mt-2 p-2 rounded-xl lg:w-[600px] w-auto"
                  placeholder="Enter your email"
                />
                <div className="font-medium">Country</div>
                <input
                  type="text"
                  className="border-gray-300 border-2 mb-5 mt-2 p-2 rounded-xl lg:w-[600px] w-auto"
                  placeholder="Enter your country"
                />
                <div className="font-medium">Phone number</div>
                <input
                  type="tel"
                  className="border-gray-300 border-2 mb-5 mt-2 p-2 rounded-xl lg:w-[600px] w-auto"
                  placeholder="Enter your number"
                />
                <div className="font-medium">Message</div>
                <textarea
                  className="border-gray-300 border-2 mb-5 mt-2 p-3 rounded-xl lg:w-[600px] w-56 h-52 placeholder:text-gray-400 resize-none "
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="flex flex-row gap-5 justify-end mr-3 mb-3">
                <button className="border-2 border-gray-700 rounded-xl md:p-2 md:px-4 px-2">Clear </button>
                <button className="border-2 bg-black text-white rounded-xl md:p-2 md:px-4 px-2 p-1">Submit </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex md:flex-row lg:justify-between mt-20 flex-wrap gap-10 flex-col " id="faq-section">
          <div className="flex flex-row font-bold md:text-5xl text-3xl">
            Your questions, <br /> answered.
          </div>

          <div className="flex flex-col w-full lg:w-[600px]">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <div
                  className="flex flex-row justify-between items-center mt-6 cursor-pointer text-gray-700 hover:text-primary"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="text-base md:text-lg">{faq.question}</div>
                  {openIndex === index ? (
                    <ChevronUp size={22} />
                  ) : (
                    <ChevronDown size={22} />
                  )}
                </div>

                {openIndex === index && (
                  <div className="mt-4 text-gray-600 text-sm md:text-base animate-fadeIn text-end">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="my-40 ">
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
                No 220A 1/1,<br /> Bauddhaloka Mawatha,<br /> Colombo 07, Sri Lanka
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
