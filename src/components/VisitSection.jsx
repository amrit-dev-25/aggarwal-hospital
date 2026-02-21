"use client";

import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export default function LocateUsSection() {
  return (
    <section id="visit" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Visit Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Locate Our Hospital
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Find us easily and get in touch. We're here to serve you with the best medical care.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Map Container */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 group">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Our Location</h3>
                    
                  </div>
                </div>
                <a 
                  href="https://www.google.com/maps/dir//Aggarwal+Hospital,+Giani+Zail+Singh,+SCF+104-106,+near+Markfed+market,+Giani+Zail+Singh+Nagar,+Rupnagar,+Punjab+140001/@30.975993,76.5263829,17.42z/data=!4m17!1m7!3m6!1s0x39055542dbd2af8d:0x4e758a617b9c10cb!2sAggarwal+Hospital!8m2!3d30.9768207!4d76.5270404!16s%2Fg%2F11vrrr8sft!4m8!1m0!1m5!1m1!1s0x39055542dbd2af8d:0x4e758a617b9c10cb!2m2!1d76.5270404!2d30.9768207!3e9?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-teal-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-50 transition-colors flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Directions
                </a>
              </div>

              {/* Map */}
              <div className="w-full h-80 md:h-96">
                <iframe
                  title="Hospital Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.706321200562!2d76.52638287289305!3d30.975993006757953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39055542dbd2af8d%3A0x4e758a617b9c10cb!2sAggarwal%20Hospital!5e0!3m2!1sen!2sin!4v1771676284705!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.2] contrast-125"
                />
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            
            {/* Address Card */}
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-teal-200 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                     SCF 104-106, Giani Zail Singh Nagar,<br />
                     Near Markdfed Rupnagar, Punjab 140001
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-teal-200 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                  <a
                    href="tel:+9198777-00827"
                    className="text-teal-600 hover:text-teal-700 font-semibold text-lg hover:underline inline-block"
                  >
                    +91 98777-00827
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Available 24/7</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-teal-200 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:info@surjitsinghsuperspeciality.com"
                    className="text-teal-600 hover:text-teal-700 font-semibold hover:underline inline-block break-all"
                  >
                    info@aggarwalhospital.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="group bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-teal-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3">OPD Hours</h3>
                  <div className="space-y-2 text-teal-50">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold text-white">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday:</span>
                      <span className="font-semibold text-white">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="pt-2 mt-2 border-t border-white/30">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-white">Emergency: 24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}