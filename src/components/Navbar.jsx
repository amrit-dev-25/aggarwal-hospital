"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about-us' },
    { name: 'Services', href: '/our-services' },
    { name: 'Departments', href: '/departments' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Contact', href: 'http://localhost:3000/#appointment' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-teal-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+918283877855" className="flex items-center gap-2 hover:text-teal-100 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 98777-00827</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>SCF 105-106, Giani Zail Singh Nagar, Ropar</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-45 h-45   md:w-65 md:h-65 relative">
                <Image
                  src="/Aggarwal-logo.png"
                  alt="MediCare Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
          </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#appointment">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-md">
                Book Appointment
              </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a href="#appointment">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-md mt-4">
                  Book Appointment
                </button>
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;