import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFacebook, BsInfoCircle, BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdLocationOn, MdMiscellaneousServices, MdPhone } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-x-8 lg:gap-x-12">
          {/* Logo Column */}
          <div className="flex flex-col items-center sm:items-start col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gray-700 hover:border-gray-500 transition-all duration-300 shadow-2xl hover:shadow-gray-700/50">
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

          {/* About Column */}
          <div className="flex flex-col text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-100">About Us</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              We are dedicated to providing the best services and solutions for our customers. Our commitment to excellence drives everything we do.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex sm:flex items-center gap-2 text-sm sm:text-base">
                  <AiOutlineHome className="text-lg sm:text-xl" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex sm:flex items-center gap-2 text-sm sm:text-base">
                  <BsInfoCircle className="text-lg sm:text-xl" />
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex sm:flex items-center gap-2 text-sm sm:text-base">
                  <MdMiscellaneousServices className="text-lg sm:text-xl" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex sm:flex items-center gap-2 text-sm sm:text-base">
                  <RiContactsLine className="text-lg sm:text-xl" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-100">Contact Info</h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-400">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                <MdEmail className="text-xl mt-0 sm:mt-1 min-w-[20px] text-gray-300" />
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-gray-500">Email:</span>
                  <a href="mailto:info@example.com" className="text-sm sm:text-base hover:text-white transition-colors duration-300">
                    info@example.com
                  </a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                <MdPhone className="text-xl mt-0 sm:mt-1 min-w-[20px] text-gray-300" />
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-gray-500">Phone:</span>
                  <a href="tel:(123)456-7890" className="text-sm sm:text-base hover:text-white transition-colors duration-300">
                    (123) 456-7890
                  </a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                <MdLocationOn className="text-xl mt-0 sm:mt-1 min-w-[20px] text-gray-300" />
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-gray-500">Address:</span>
                  <span className="text-sm sm:text-base leading-relaxed">
                    123 Street Name,<br />
                    City, Country
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="flex flex-col text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-100">Follow Us</h3>
            <div className="flex flex-row sm:flex-col justify-center sm:justify-start space-x-4 sm:space-x-0 sm:space-y-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex sm:flex items-center gap-2 text-sm sm:text-base">
                <BsTwitter className="text-lg sm:text-xl" />
                <span className="hidden sm:inline">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex sm:flex items-center gap-2 text-sm sm:text-base">
                <BsFacebook className="text-lg sm:text-xl" />
                <span className="hidden sm:inline">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex sm:flex items-center gap-2 text-sm sm:text-base">
                <BsInstagram className="text-lg sm:text-xl" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 