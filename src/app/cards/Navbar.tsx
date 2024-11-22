
"use client"
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  // State to toggle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <nav className="bg-pink-400 text-white shadow-lg font-serif">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-4xl font-extrabold font-serif cursor-pointer">
            Card Collections
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="#h1" className="hover:text-yellow-400">
              Flower Cards
            </Link>
            <Link href="#h2" className="hover:text-yellow-400">
              Shirts Cards
            </Link>
            <Link href="#h3" className="hover:text-yellow-400">
              Furniture Cards
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-red-300 p-2 rounded-md text-white hover:bg-orange-400"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
            >
              ☰
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isDropdownOpen && (
          <div className="md:hidden bg-pink-500">
            <ul className="space-y-2 px-4 py-2">
              <li>
                <Link href="#h1" className="block hover:text-yellow-400">
                  Flower Cards
                </Link>
              </li>
              <li>
                <Link href="#h2" className="block hover:text-yellow-400">
                  Shirts Cards
                </Link>
              </li>
              <li>
                <Link href="#h3" className="block hover:text-yellow-400">
                  Furniture Cards
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
