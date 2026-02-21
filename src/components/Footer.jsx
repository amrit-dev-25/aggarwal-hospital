import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - About */}
          <div className="space-y-4">
            <div className="mb-6">
              {/* Replace with your logo */}
              <img 
                src="/aggarwal-logo.png" 
                alt="Hospital Logo" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing exceptional healthcare services with compassion and excellence for over 20+ years. Your health is our priority.
            </p>
            <div className="flex gap-3 pt-4">
              <Link href="https://www.facebook.com/p/DrRajiv-Aggarwal-100064143728417/" className="w-10 h-10 rounded-full bg-teal-600 hover:bg-teal-500 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-teal-600 hover:bg-teal-500 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-teal-600 hover:bg-teal-500 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-teal-600 hover:bg-teal-500 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-teal-600 hover:bg-teal-500 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  About Us
                </Link>
              </li>
              
              <li>
                <Link href="/doctors" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/departments" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/emergency" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link href="/services/surgery" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  ICU
                </Link>
              </li>
              <li>
                <Link href="/services/cardiology" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link href="/services/pediatrics" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link href="/services/orthopedics" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Physiotherapy
                </Link>
              </li>
              <li>
                <Link href="/services/diagnostics" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Radiology Scans
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  SCF 104-106, Giani Zail<br />
                  Singh Nagar, Ropar, Punjab 140001
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <div>
                  <a href="tel:+919877700827" className="hover:text-teal-400 transition-colors block">
                    +91 98777-00827
                  </a>
                  <a href="tel:01881505010" className="hover:text-teal-400 transition-colors block">
                    01881-505010
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href="mailto:info@aggarwalhospital.com" className="hover:text-teal-400 transition-colors">
                  info@aggarwalhospital.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat - Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🚨</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg">24/7 Emergency Services</p>
                <p className="text-teal-100 text-sm">We're here when you need us most</p>
              </div>
            </div>
            <a 
              href="tel:911" 
              className="bg-white text-teal-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call Emergency: 108
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Aggarwal Hospital. All rights reserved.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-teal-400 transition-colors">
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}