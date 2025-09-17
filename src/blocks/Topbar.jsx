// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-md sticky top-0  z-2  trans text-white bg-transparent backdrop-blur-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center text-xl text-white-500 font-bold">
            <Link href="/">TheGajendra</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center gap-3 text-white">
            <Link href="/" className=" hover:text-black">
              Home
            </Link>
            <Link href="/about" className=" hover:text-black">
              About
            </Link>
            <Link href="/projects" className=" hover:text-black">
              Projects
            </Link>
            <Link href="/contact" className=" hover:text-black">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? "👀" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 text-white">
          <Link
            href="/"
            className="block  hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block  hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block  hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block  hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
