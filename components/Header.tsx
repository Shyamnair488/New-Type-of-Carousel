'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdMiscellaneousServices } from 'react-icons/md';
import { RiContactsLine, RiLoginBoxLine } from 'react-icons/ri';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full">
      {/* Navbar Container */}
      <nav className="bg-white shadow-xl h-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-900 hover:text-black p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AiOutlineMenu className="text-2xl" />
            </button>

            {/* Left side menu items - Desktop */}
            <div className="hidden lg:flex space-x-2 ml-1 mr-2">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-black text-xl font-semibold tracking-wide transition-all duration-300 hover:scale-105 no-underline flex items-center gap-2"
              >
                <AiOutlineHome className="text-2xl" />
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-900 hover:text-black text-xl font-semibold tracking-wide transition-all duration-300 hover:scale-105 no-underline flex items-center gap-2"
              >
                <BsInfoCircle className="text-2xl" />
                About
              </Link>
              <Link 
                href="/services" 
                className="text-gray-900 hover:text-black text-xl font-semibold tracking-wide transition-all duration-300 hover:scale-105 no-underline flex items-center gap-2"
              >
                <MdMiscellaneousServices className="text-2xl" />
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-900 hover:text-black text-xl font-semibold tracking-wide transition-all duration-300 hover:scale-105 no-underline flex items-center gap-2"
              >
                <RiContactsLine className="text-2xl" />
                Contact
              </Link>
            </div>

            {/* Right side menu items - Desktop */}
            <div className="hidden lg:flex space-x-8 mr-8">
              <Link 
                href="/user-login" 
                className="text-gray-900 hover:text-white text-xl font-semibold tracking-wide no-underline transition-all duration-300 hover:scale-105 bg-white hover:bg-gray-800 rounded-lg px-6 py-2 border-2 border-gray-700 hover:border-gray-800 shadow-md flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <RiLoginBoxLine className="text-xl" />
                User Login
              </Link>
              <Link 
                href="/farm-login" 
                className="text-white hover:text-white text-xl font-semibold tracking-wide no-underline transition-all duration-300 hover:scale-105 bg-gray-800 hover:bg-black rounded-lg px-6 py-2 border-2 border-gray-800 hover:border-black shadow-md flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <RiLoginBoxLine className="text-xl" />
                Farm Login
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slide Out */}
        <div className={`lg:hidden fixed inset-0 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="bg-white h-full w-64 shadow-lg p-6">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-black text-xl font-semibold tracking-wide transition-all duration-300 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <AiOutlineHome className="text-2xl" />
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-900 hover:text-black text-xl font-semibold tracking-wide transition-all duration-300 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BsInfoCircle className="text-2xl" />
                About
              </Link>
              <Link 
                href="/services" 
                className="text-gray-900 hover:text-black text-xl font-semibold tracking-wide transition-all duration-300 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MdMiscellaneousServices className="text-2xl" />
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-900 hover:text-black text-xl font-semibold tracking-wide transition-all duration-300 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <RiContactsLine className="text-2xl" />
                Contact
              </Link>
              <div className="pt-4 space-y-4">
                <Link 
                  href="/user-login" 
                  className="text-gray-900 hover:text-white text-xl font-semibold tracking-wide w-full bg-white hover:bg-gray-800 rounded-lg px-4 py-2 border-2 border-gray-700 hover:border-gray-800 shadow-md flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <RiLoginBoxLine className="text-xl" />
                  User Login
                </Link>
                <Link 
                  href="/farm-login" 
                  className="text-white hover:text-white text-xl font-semibold tracking-wide w-full bg-gray-800 hover:bg-black rounded-lg px-4 py-2 border-2 border-gray-800 hover:border-black shadow-md flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <RiLoginBoxLine className="text-xl" />
                  Farm Login
                </Link>
              </div>
            </div>
          </div>
          {/* Overlay */}
          <div 
            className="bg-black bg-opacity-50 absolute inset-0 -z-10"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        </div>

        {/* Logo - Centered and extending below navbar */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-[-10%] z-40">
          <div className="relative w-32 h-32 md:w-56 md:h-56 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300 hover:shadow-emerald-200/50 hover:border-emerald-50">
            <Image
              src="/images/header/farmlogo.jpg"
              alt="Company Logo"
              width={300}
              height={300}
              className="object-cover scale-150"
              priority
            />
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600/20 via-emerald-600 to-emerald-600/20"></div>
      </nav>
    </header>
  );
};

export default Header; 