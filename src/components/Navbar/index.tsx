import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // Import Close Icon
import { Link } from "react-scroll";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.svg";

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { title: "Home", to: "home" },
    { title: "About", to: "about" },
    { title: "Services", to: "services" },
    { title: "Projects", to: "projects" },
    { title: "Testimonials", to: "testimonials" },
    { title: "Contact", to: "contact" },
  ];

  const handleSetActive = (to: string) => {
    setActiveItem(to);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="w-full lg:px-12 p-5 lg:h-18 h-20 border-b border-navBorder flex items-center justify-between bg-white fixed top-0 left-0 z-50"
      ref={navRef}
    >
      {/* Logo with Link to Home */}
      <div className="flex items-center gap-1 cursor-pointer">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <img
            src={Logo}
            alt="Darwandale Constructors Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>
        <h1 className="text-green-500 text-2xl font-bold hover:text-gray-300 transition-colors duration-200">
        Darwandale Contractors
        </h1>
      </div>

      {/* Desktop Navigation items */}
      <div className={`lg:flex hidden items-center gap-8`}>
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={() => handleSetActive(item.to)}
            className={`${
              activeItem === item.to
                ? "text-green-500"
                : "text-gray-800 hover:text-green-500 transition-colors duration-200"
            } font-Urbanist font-semibold text-lg cursor-pointer`}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Mobile menu icon */}
      <div
        className="cursor-pointer text-secondary lg:hidden block"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <IoClose className="text-blue-700 hover:text-green-500 transition-colors duration-200" size={32} />
        ) : (
          <GiHamburgerMenu className="text-blue-700 hover:text-green-500 transition-colors duration-200" size={32} />
        )}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-20 left-0 w-full bg-white p-4 transition-all duration-300 ease-in-out`}
      >
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={() => handleSetActive(item.to)}
            className={`${
              activeItem === item.to
                ? "text-green-500"
                : "text-gray-800 hover:text-green-500 transition-colors duration-200"
            } block text-lg font-semibold cursor-pointer py-2`}
            onClick={() => setIsMenuOpen(false)} // Close menu on item click
          >
            {item.title}
          </Link>
        ))}

        {/* Mobile Social Icons */}
        <div className="mt-6 flex justify-center gap-7">
          <a
            href="https://www.facebook.com/profile.php?id=100063693813113&rdid=g1RPWIQ2rA5YaNKv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ssHb5C2e%2F#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 p-2 rounded-full"
          >
            <FaFacebookF className="text-white hover:text-gray-200 cursor-pointer transition-colors duration-200" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 p-2 rounded-full"
          >
            <FaInstagram className="text-white hover:text-gray-200 cursor-pointer transition-colors duration-200" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 p-2 rounded-full"
          >
            <FaLinkedinIn className="text-white hover:text-gray-200 cursor-pointer transition-colors duration-200" />
          </a>
          <a
            href="https://wa.me/27641930218"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-2 rounded-full"
          >
            <FaWhatsapp className="text-white hover:text-gray-200 cursor-pointer transition-colors duration-200" />
          </a>
        </div>
      </div>

      {/* Desktop Social Icons */}
      <div className="lg:flex hidden items-center gap-7">
        <a
          href="https://www.facebook.com/profile.php?id=100063693813113&rdid=g1RPWIQ2rA5YaNKv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ssHb5C2e%2F#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 p-2 rounded-full"
        >
          <FaFacebookF className="text-white hover:text-gray-200 cursor-pointer transition-colors duration-200" />
        </a>
        <a
          href="https://wa.me/27641930218"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 p-2 rounded-full"
        >
          <FaInstagram className="text-white hover:text-gray-200 cursor-pointer transition-colors duration-200" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 p-2 rounded-full"
        >
          <FaLinkedinIn className="text-white hover:text-gray-200 cursor-pointer transition-colors duration-200" />
        </a>
        <a
          href="https://wa.me/27641930218"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-2 rounded-full"
        >
          <FaWhatsapp className="text-white hover:text-gray-200 cursor-pointer transition-colors duration-200" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
