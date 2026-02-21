import Link from 'next/link';
import { Phone, Ambulance, Clock, MapPin } from 'lucide-react';

export default function EmergencyContactBar() {
  return (
    <section className="bg-gradient-to-r from-red-400 via-rose-600 to-red-700 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-1/4 w-32 h-32 border-4 border-white rounded-full animate-ping"></div>
          <div className="absolute bottom-4 right-1/4 w-24 h-24 border-4 border-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Side - Emergency Message */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center animate-pulse">
                <Ambulance className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-xs">!</span>
              </div>
            </div>
            
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-1 flex items-center gap-2">
                Medical Emergency?
                <span className="inline-block w-3 h-3 bg-red-400 rounded-full animate-pulse"></span>
              </h3>
              <p className="text-red-100 text-sm md:text-base">
                We're available 24/7 for emergency medical services
              </p>
            </div>
          </div>

          {/* Right Side - Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            
            {/* Emergency Call Button */}
            <a 
              href="tel:911"
              className="group relative bg-white text-red-600 px-6 md:px-8 py-4 rounded-xl font-bold text-lg md:text-xl hover:bg-red-50 transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Phone className="w-6 h-6 animate-bounce" />
              <div className="text-left">
                <div className="text-xs text-red-500 font-medium">Call Now</div>
                <div className="text-xl md:text-2xl font-bold">108</div>
              </div>
            </a>

            {/* Hospital Hotline Button */}
            <a 
              href="tel:+1234567890"
              className="group bg-red-800 hover:bg-red-900 text-white px-6 md:px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 border-2 border-white/30"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-red-200 font-medium">Hospital Hotline</div>
                <div className="text-base md:text-lg font-bold">+91 98777-00827</div>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Info Bar */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/90">
            
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-200" />
              <span className="text-sm md:text-base font-medium">24/7 Emergency Services</span>
            </div>

            <div className="hidden sm:block w-1 h-6 bg-white/30"></div>

            <div className="flex items-center gap-2">
              <Ambulance className="w-5 h-5 text-red-200" />
              <span className="text-sm md:text-base font-medium">Rapid Ambulance Response</span>
            </div>

            <div className="hidden sm:block w-1 h-6 bg-white/30"></div>

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-200" />
              <span className="text-sm md:text-base font-medium">SCF 104-106, Giani Zail Singh Nagar, Ropar</span>
            </div>
          </div>
        </div>

      </div>

      {/* Pulse Animation Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
    </section>
  );
}