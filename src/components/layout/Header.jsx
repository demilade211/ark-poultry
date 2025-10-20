"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Facebook, Twitter, Mail, Linkedin, Phone, ShoppingCart, ClipboardList } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="hidden md:flex items-center pl-23 2xl:pl-4 justify-between h-13">
        <span className="flex">
          <p>Your Trusted 24 Hours Service Provider!</p>
        </span>
        <span className="flex items-center h-full">
          <span className="flex items-center gap-5 mr-4">
            <Facebook size={24} />
            <Twitter size={24} />
            <Mail size={24} />
            <Linkedin size={24} />
          </span>
          <span className="bg-green-600 flex gap-2 items-center h-full pl-5 pr-4 md:pr-23 xl:pr-4"><Phone size={24} /> <p>Talk To Expert : 0 (143) 456 7897</p></span>
        </span>
      </div>

      <header
        className={`transition-all duration-300 ${
          isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3' : 'bg-white backdrop-blur-lg py-7'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="hidden md:flex items-center">
            <span className="text-2xl font-bold text-green-700">
              Poul<span className="text-green-500">try</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg font-medium transition-colors hover:text-green-600 ${
                  pathname === link.path ? "text-green-600" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="hidden md:flex gap-4 pl-5 border-l-2 border-gray-700 items-center">
              <Link
                href="/contact"
                className="text-gray-700"
              >
                <ShoppingCart size={24} />
              </Link>

              <Link
                href="/contact"
                className="hidden sm:flex text-gray-700"
              >
                <ClipboardList size={24} />
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="md:hidden flex items-center">
            <span className="text-2xl font-bold text-green-700">
              Poul<span className="text-green-500">try</span>
            </span>
          </Link>

          <div className="md:hidden flex gap-2 pl-5 border-l-2 border-gray-700 items-center">
            <Link
              href="/contact"
              className="text-gray-700"
            >
              <X size={24} />
            </Link>

            <Link
              href="/contact"
              className="text-gray-700"
            >
              <X size={24} />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-base font-medium transition-colors hover:text-green-600 ${
                    pathname === link.path ? "text-green-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
