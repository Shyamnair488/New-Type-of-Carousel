import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="relative w-full">
      {/* Navbar Container */}
      <nav className="bg-white shadow-lg h-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Left side menu items */}
            <div className="flex space-x-8 ml-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
              >
                About
              </Link>
            </div>

            {/* Right side menu items */}
            <div className="flex space-x-8 mr-4">
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
              >
                Contact
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
              >
                Services
              </Link>
            </div>
          </div>
        </div>

        {/* Logo - Centered and extending below navbar */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-[-15%] z-50">
          <div className="relative w-52 h-52 bg-white rounded-full shadow-xl flex items-center justify-center overflow-hidden border-4 border-white">
            <Image
              src="/images/header/farmlogo.jpg"
              alt="Company Logo"
              width={280}
              height={280}
              className="object-cover scale-150"
              priority
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 