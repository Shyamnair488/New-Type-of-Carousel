import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFacebook, BsInfoCircle, BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdLocationOn, MdMiscellaneousServices, MdPhone } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-12 gap-y-12" style={{ border: '1px solid red' }}>
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-700 hover:border-gray-500 transition-all duration-300 shadow-2xl hover:shadow-gray-700/50">
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
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-gray-100">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              We are dedicated to providing the best services and solutions for our customers. Our commitment to excellence drives everything we do.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <AiOutlineHome className="text-xl" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <BsInfoCircle className="text-xl" />
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <MdMiscellaneousServices className="text-xl" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <RiContactsLine className="text-xl" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-gray-100">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MdEmail className="text-xl mt-1 min-w-[20px] text-gray-300" />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Email:</span>
                  <a href="mailto:info@example.com" className="hover:text-white transition-colors duration-300">
                    info@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MdPhone className="text-xl mt-1 min-w-[20px] text-gray-300" />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Phone:</span>
                  <a href="tel:(123)456-7890" className="hover:text-white transition-colors duration-300">
                    (123) 456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-xl mt-1 min-w-[20px] text-gray-300" />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Address:</span>
                  <span className="leading-relaxed">
                    123 Street Name,<br />
                    City, Country
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-gray-100">Follow Us</h3>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <BsTwitter className="text-xl" />
                <span>Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <BsFacebook className="text-xl" />
                <span>Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <BsInstagram className="text-xl" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 