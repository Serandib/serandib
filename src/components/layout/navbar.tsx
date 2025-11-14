"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "../common/container";
import navlinks from "@/data/navbar/nav-links";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/"|| pathname === "/Packages"|| pathname === "/Explore"; // Check if current page is Home

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true); // For other pages, always show white navbar
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-24 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/Logo.png"
                alt="Logo"
                width={150}
                height={100}
                className="w-28 md:w-32 h-auto"
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
                  className={`cursor-pointer text-lg transition-colors duration-300 ${
                    isScrolled
                      ? "text-primary hover:underline"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div>
              <Link href="/ContactUs">
                <button
                  className={`rounded-xl p-2 px-3 transition-all duration-300 ${
                    isScrolled
                      ? "bg-primary text-white hover:bg-secondary2"
                      : "border border-white text-white hover:bg-primary/80"
                  }`}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Button */}
          <div
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 p-4 bg-white rounded-2xl items-center">
            {navlinks.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="hover:text-primary text-center text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div>
              <Link href="/ContactUs">
                <button
                  className={`rounded-xl p-2 px-3 transition-all duration-300 ${
                    isScrolled
                      ? "bg-primary text-white hover:bg-secondary2"
                      : "border border-white text-white hover:bg-primary/80"
                  }`}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          
        )}
      </Container>
    </nav>
  );
}
