"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "../common/container";
import navlinks from "@/data/navbar/nav-links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  fixed top-0 left-0 w-full z-50 h-28 shadow-md">
      <Container>
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/Logo.png"
                alt="Logo"
                width={150}
                height={100}
                className="w-28  md:w-36  h-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-row gap-12 items-center justify-center">
            <div className="flex gap-10">
              {navlinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="hover:text-primary hover:underline cursor-pointer text-lg"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex">
              <Link href="/ContactUs">
                <button className="bg-primary rounded-xl p-2 px-3 text-white cursor-pointer hover:bg-secondary2 text-lg">
                  {" "}
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 p-4 animate-slide-down bg-white rounded-2xl">
            {navlinks.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="hover:text-primary hover:underline cursor-pointer text-center"
                onClick={() => setIsOpen(false)} // close menu after click
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
}
