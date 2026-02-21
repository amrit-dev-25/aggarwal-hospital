import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, ArrowRight, Award, Stethoscope } from 'lucide-react';

const OurDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajiv Aggarwal',
      role: 'Chief Cardiologist',
      specialization: 'Cardiology & Heart Care',
      experience: '15+ Years',
      image: '/doctor-aggarwal.png',
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Dr. Harjoban Singh',
      role: 'Orthopedic Surgeon',
      specialization: 'Bone & Joint Specialist',
      experience: '15+ Years',
      image: '/doctor-harjoban.png',
      linkedin: '#'
    },
    {
      id: 3,
      name: 'Dr. Singh',
      role: 'Pediatric Specialist',
      specialization: 'Child Healthcare Expert',
      experience: '10+ Years',
      image: '/doctor-2.jpg',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Meet Our Experts
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Our Expert Doctors
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our diverse team brings together expertise from various medical disciplines to provide 
            comprehensive and personalized healthcare solutions for our patients.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Doctor Image */}
              <div className="relative h-80 sm:h-96 bg-gradient-to-br from-teal-100 to-cyan-100 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {doctor.experience} Experience
                    </p>
                    <p className="text-teal-300 text-sm">
                      {doctor.specialization}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Button */}
                <a
                  href={doctor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg hover:bg-teal-600 transition-all duration-300 group/link opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                >
                  <Linkedin className="h-5 w-5 text-teal-600 group-hover/link:text-white transition-colors" />
                </a>

                {/* Specialty Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-teal-600 text-xs font-semibold">{doctor.role}</span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-teal-600" />
                  {doctor.role}
                </p>
                
                {/* Action Button */}
                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all group/btn"
                >
                  View Profile
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Doctors Button */}
        <div className="text-center">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl group"
          >
            View All Our Doctors
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
          
          {/* Stats Below Button */}
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">10+</div>
              <div className="text-sm text-gray-600">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">15+</div>
              <div className="text-sm text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Patient Satisfaction</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurDoctors;