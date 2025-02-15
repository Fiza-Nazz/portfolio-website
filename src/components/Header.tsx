"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Skills", href: "/skills" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scrolling to adjust header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Header Container */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black shadow-xl py-2" : "bg-black bg-opacity-95 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/">
                {/* Name with a happy emoji */}
                <span className="text-3xl font-extrabold text-yellow-500 hover:text-yellow-400 transition-colors cursor-pointer">
                  Fiza😊
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`text-lg font-medium transition-colors ${
                      pathname === item.href
                        ? "text-yellow-500"
                        : "text-gray-300 hover:text-yellow-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </div>
              ))}
            </nav>

            {/* Mobile Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-300 hover:text-yellow-500 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
                aria-label="Toggle navigation menu"
              >
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-current transition-transform duration-300"></span>
                  <span className="block w-6 h-0.5 bg-current transition-transform duration-300"></span>
                  <span className="block w-6 h-0.5 bg-current transition-transform duration-300"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
          }`}
        >
          <nav className="px-4 pt-2 pb-4 space-y-2 bg-black">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className={`block text-lg font-medium transition-colors ${
                  pathname === item.href
                    ? "text-yellow-500"
                    : "text-gray-300 hover:text-yellow-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
