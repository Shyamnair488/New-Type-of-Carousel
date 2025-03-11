import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12">
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
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-gray-100">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <span>Email:</span>
                <a href="mailto:info@example.com" className="hover:text-white transition-colors duration-300">info@example.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>Phone:</span>
                <a href="tel:(123)456-7890" className="hover:text-white transition-colors duration-300">(123) 456-7890</a>
              </li>
              <li className="leading-relaxed">
                123 Street Name,<br />
                City, Country
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-gray-100">Follow Us</h3>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <span>Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <span>Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
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