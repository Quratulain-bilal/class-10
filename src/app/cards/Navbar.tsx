import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-pink-400 text-white shadow-lg font-serif">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-4xl font-extrabold font-serif  cursor-pointer">Card Collections</div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="#h1" className="hover:text-yellow-400">
              Flower Cards
            </Link>
            <Link href={"#h2"} className="hover:text-yellow-400">
                Shirts cards
            </Link>
            <Link href={"#h3"} className="hover:text-yellow-400">
              Furniture cards
            </Link>
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-700 p-2 rounded-md text-white hover:bg-gray-600"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;