// Header.jsx
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 cursor-default">
          Med Clinic
        </div>

        {/* ===== DESKTOP MENU ===== */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <a href="/" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#services" className="hover:text-blue-500 transition">Services</a>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Book Appointment
          </a>

        </nav>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button
          className="md:hidden text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ===== MOBILE MENU (FIXED) ===== */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col gap-4 px-6 py-6 text-center font-medium">
            <a
              href="/"
              className="py-3 rounded-lg hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="py-3 rounded-lg hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="py-3 rounded-lg hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="/contact"
              className="py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
