import Link from 'next/link';
import { 
  Award, 
  Users, 
  Heart, 
  Shield,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Clock
} from 'lucide-react';

export default function AboutSection() {
  const achievements = [
    {
      icon: Users,
      number: "50,000+",
      label: "Patients Treated"
    },
    {
      icon: Award,
      number: "35+",
      label: "Years of Excellence"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Patient Satisfaction"
    },
    {
      icon: Shield,
      number: "200+",
      label: "Medical Experts"
    }
  ];

  const features = [
    "State-of-the-art medical facilities and equipment",
    "Highly qualified and experienced medical professionals",
    "Patient-centered approach with personalized care",
    "24/7 emergency services and critical care",
    "Comprehensive diagnostic and treatment services",
    "Affordable healthcare with insurance support"
  ];

  return (
    <section  className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            About Us
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted Healthcare Partner for Over 35 Years
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-4">
            We are committed to providing exceptional medical care with a patient-centered approach. 
            Our state-of-the-art facilities, combined with our team of experienced healthcare professionals, 
            ensure that you receive the highest quality treatment.
          </p>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            From routine check-ups to complex surgical procedures, we offer comprehensive healthcare 
            services designed to improve the health and well-being of every patient through innovative 
            treatments and compassionate care.
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-teal-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-teal-600 mt-1" />
              </div>
              <span className="text-gray-700 text-lg">{feature}</span>
            </div>
          ))}
        </div>

        {/* Bottom Section with Accreditation and CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          
          {/* Accreditations */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4 border border-teal-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">JCI Accredited</p>
                <p className="text-sm text-gray-600">International Standards</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4 border border-teal-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">24/7 Available</p>
                <p className="text-sm text-gray-600">Emergency Services</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            href="/about"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl group whitespace-nowrap"
          >
            Learn More About Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}