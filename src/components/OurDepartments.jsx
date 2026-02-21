"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

const OurDepartments = () => {
  const [activeValue, setActiveValue] = useState('cardiology');
  const [mobileExpanded, setMobileExpanded] = useState('cardiology');

  const values = [
    {
      id: 'cardiology',
      title: 'Cardiology',
      description: "From routine heart check-ups to managing complex cardiac conditions, our cardiology department focuses on accurate diagnosis, preventive care, and long-term heart health.",
      image: '/cardiologitt.png',
      tags: ['Compassion', 'Orthopedics', 'Pediatrics', 'Neurology', 'Dermatology']
    },
    {
      id: 'orthopedics',
      title: 'Orthopedics',
      description: 'Our orthopedic specialists treat bone, joint, and muscle conditions with advanced care designed to restore mobility and improve your quality of life.',
      image: '/ortho.jpg',
      tags: ['Compassion', 'Orthopedics', 'Pediatrics', 'Neurology', 'Dermatology']
    },
    {
      id: 'Pediatrics',
      title: 'Pediatrics',
      description: 'We provide complete healthcare for infants, children, and adolescents in a safe, friendly, and supportive environment for both kids and parents.',
      image: '/pediatricss.jpg',
      tags: ['Compassion', 'Orthopedics', 'Pediatrics', 'Neurology', 'Dermatology']
    },
    {
      id: 'Neurology',
      title: 'Neurology',
      description: 'Our neurology department specializes in diagnosing and treating disorders of the nervous system, including brain, spinal cord, and peripheral nerves.',
      image: '/departments/neurology.png',
      tags: ['Compassion', 'Orthopedics', 'Pediatrics', 'Neurology', 'Dermatology']
    },
    {
      id: 'dermatology',
      title: 'Dermatology',
      description: 'Our dermatology department offers comprehensive care for skin, hair, and nail conditions with advanced diagnostic and treatment options.',
      image: '/departments/dermatology.png',
      tags: ['Compassion', 'Orthopedics', 'Pediatrics', 'Neurology', 'Dermatology']
    }
  ];

  const activeContent = values.find(value => value.id === activeValue);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-teal-600 font-medium text-sm tracking-wide">✦ OUR DEPARTMENTS</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-teal-900 max-w-xl leading-snug">
              A Simplified Path to Comprehensive Medical Care
            </h2>
            <p className="text-gray-600 text-base lg:text-lg max-w-md leading-relaxed">
              Providing patient-centered care through expert guidance, innovative solutions, and personalized support every step of the way.
            </p>
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Values List */}
          <div className="lg:col-span-4">
            <div className="space-y-0">
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-medium text-teal-600 tracking-wide">List</span>
                <span className="text-sm font-medium text-teal-600">01/05</span>
              </div>
              
              {values.map((value, index) => (
                <div
                  key={value.id}
                  onMouseEnter={() => setActiveValue(value.id)}
                  className="cursor-pointer group"
                >
                  <div className="py-6 border-b border-gray-200 transition-all duration-300">
                    <h3
                      className={`text-2xl sm:text-3xl lg:text-4xl font-light transition-colors duration-300 ${
                        activeValue === value.id 
                          ? 'text-teal-900' 
                          : 'text-gray-300 group-hover:text-gray-400'
                      }`}
                    >
                      {value.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a href="/departments">
            <button className="mt-10 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-full font-medium transition shadow-md flex items-center gap-2 group">
              Explore All Departments
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </a>
          </div>

          {/* Right Side - Image and Description */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {/* Image Card */}
            <div className="relative h-80 md:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={activeContent.image}
                alt={activeContent.title}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Description Card */}
            <div className="bg-teal-500 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-lg">
              <div>
                <p className="text-white text-lg sm:text-xl font-light leading-relaxed mb-8">
                  {activeContent.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5">
                {activeContent.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      tag.toLowerCase() === activeContent.id
                        ? 'bg-white text-teal-600'
                        : 'bg-teal-400/30 text-white'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (below lg) */}
        <div className="lg:hidden space-y-4">
          {values.map((value) => (
            <div
              key={value.id}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setMobileExpanded(mobileExpanded === value.id ? null : value.id)}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-light text-teal-900">
                  {value.title}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-teal-600 transition-transform duration-300 ${
                    mobileExpanded === value.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion Content */}
              {mobileExpanded === value.id && (
                <div className="border-t border-gray-200 animate-fade-in">
                  {/* Image */}
                  <div className="relative h-64 sm:h-80">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>

                  {/* Description */}
                  <div className="bg-teal-500 p-6 sm:p-8">
                    <p className="text-white text-base sm:text-lg font-light leading-relaxed mb-6">
                      {value.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {value.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                            tag.toLowerCase() === value.id
                              ? 'bg-white text-teal-600'
                              : 'bg-teal-400/30 text-white'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA Button */}
          <a href="/departments" className="block">
            <button className="w-full mt-8 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition shadow-md flex items-center justify-center gap-2 group">
              Explore All Departments
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurDepartments;