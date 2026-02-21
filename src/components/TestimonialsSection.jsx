'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Gurveer Singh",
      role: "Patient",
      treatment: "Cardiac Surgery",
      image: "/testimonials/patient-1.jpg",
      rating: 5,
      text: "The level of care I received during my cardiac surgery was exceptional. The doctors and nurses were not only highly skilled but also incredibly compassionate. They explained every step of the process and made me feel safe throughout my recovery.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Haresh Kumar",
      role: "Patient",
      treatment: "Orthopedic Treatment",
      image: "/testimonials/patient-2.jpg",
      rating: 5,
      text: "After my knee replacement surgery, I can now walk without pain for the first time in years. Dr. Singh and his team were amazing. The physiotherapy program helped me recover faster than I expected. Highly recommended!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Harpreet Kaur",
      role: "Parent",
      treatment: "Pediatric Care",
      image: "/testimonials/patient-3.jpg",
      rating: 5,
      text: "Dr. Shamrma took such wonderful care of my daughter. She was patient, gentle, and made my little one feel comfortable during her treatment. The pediatric ward is child-friendly and the staff is absolutely wonderful.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Avinash",
      role: "Patient",
      treatment: "Emergency Care",
      image: "/testimonials/patient-4.jpg",
      rating: 5,
      text: "When I had a medical emergency at 2 AM, the ER team responded immediately. Their quick action and professional care saved my life. I'm forever grateful to this hospital and their dedicated staff.",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "Simran Kaur",
      role: "Patient",
      treatment: "Dermatology",
      image: "/testimonials/patient-5.jpg",
      rating: 5,
      text: "Dr. Singh helped me with a skin condition I've struggled with for years. Her expertise and the advanced treatments available here made all the difference. My skin has never looked better!",
      date: "2 months ago"
    },
    {
      id: 6,
      name: "David Lee",
      role: "Patient",
      treatment: "General Surgery",
      image: "/testimonials/patient-6.jpg",
      rating: 5,
      text: "From consultation to post-surgery follow-up, everything was handled professionally. Dr. Martinez performed my surgery with precision, and the recovery was smooth thanks to the excellent care I received.",
      date: "3 weeks ago"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-500/20 backdrop-blur-sm text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-teal-500/30">
            Testimonials
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            What Our Patients Say
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Real stories from real patients who experienced exceptional care at our hospital
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Testimonial Card */}
          <div className="relative min-h-[400px] md:min-h-[350px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0 scale-100'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full scale-95'
                    : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700/50">
                  
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Patient Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold border-2 border-teal-400">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {/* Uncomment when you have images */}
                      {/* <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-full"
                      /> */}
                    </div>

                    {/* Name and Details */}
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-teal-400 text-sm font-medium mb-1">
                        {testimonial.treatment}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.date}
                      </p>
                    </div>

                    {/* Verified Badge */}
                    <div className="bg-green-500/20 border border-green-500/50 rounded-full px-3 py-1 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-teal-500 to-cyan-500'
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              } h-2`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15,000+</div>
            <div className="text-gray-400 text-sm">Happy Patients</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400 text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-sm">5-Star Reviews</div>
          </div>
        </div>

      </div>
    </section>
  );
}