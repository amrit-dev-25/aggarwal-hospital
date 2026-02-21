import React from 'react';
import Image from 'next/image';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/123 - copy.png"
          alt="Modern Hospital Building"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 via-teal-600/70 to-teal-600/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              🏥 People's Choice in Healthcare Since 2005
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Health Is Our{' '}
            <span className="relative inline-block">
              Priority
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 2 100 2 198 10"
                  stroke="#f97316"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Experience world-class healthcare with compassionate doctors, cutting-edge
            technology, and personalized treatment plans tailored just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 sm:py-4 rounded-lg font-semibold transition shadow-lg flex items-center justify-center gap-2">
              Book Appointment
              <ArrowRight className="h-5 w-5" />
            </button>
            <a href="/doctors">
            <button className="bg-transparent hover:bg-white/10 text-white px-8 py-3.5 sm:py-4 rounded-lg font-semibold transition border-2 border-white backdrop-blur-sm">
              Explore Services
            </button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-sm text-white/70">Specialists</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm text-white/70">Emergency</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">20+</p>
                <p className="text-sm text-white/70">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;