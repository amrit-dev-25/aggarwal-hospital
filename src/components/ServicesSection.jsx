import Link from 'next/link';
import { 
  Ambulance, 
  Heart, 
  Activity, 
  Microscope, 
  Radio, 
  Pill,
  Dumbbell,
  Home,
  ArrowRight 
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response and expert medical attention for critical situations.",
      icon: Ambulance,
      color: "red"
    },
    {
      id: 2,
      title: "Ambulance Service",
      description: "Fully equipped ambulances with advanced life support systems and trained paramedics.",
      icon: Ambulance,
      color: "orange"
    },
    {
      id: 3,
      title: "ICU",
      description: "State-of-the-art intensive care unit with 24/7 critical care specialists and monitoring.",
      icon: Heart,
      color: "pink"
    },
    {
      id: 4,
      title: "Lab Tests",
      description: "Comprehensive diagnostic testing with accurate results and NABL accredited laboratory.",
      icon: Microscope,
      color: "purple"
    },
    {
      id: 5,
      title: "Radiology Scans",
      description: "Advanced imaging technology including X-ray, CT, MRI, and ultrasound services.",
      icon: Radio,
      color: "blue"
    },
    {
      id: 6,
      title: "Pharmacy",
      description: "24/7 in-house pharmacy with comprehensive medication and expert pharmacist consultation.",
      icon: Pill,
      color: "teal"
    },
    {
      id: 7,
      title: "Physiotherapy",
      description: "Personalized rehabilitation programs with certified therapists and modern equipment.",
      icon: Dumbbell,
      color: "green"
    },
    {
      id: 8,
      title: "Home Sample Collection",
      description: "Convenient doorstep sample collection with trained staff and contactless service.",
      icon: Home,
      color: "cyan"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: "from-red-500 to-rose-500",
      orange: "from-orange-500 to-amber-500",
      pink: "from-pink-500 to-rose-500",
      purple: "from-purple-500 to-violet-500",
      blue: "from-blue-500 to-cyan-500",
      teal: "from-teal-500 to-cyan-500",
      green: "from-green-500 to-emerald-500",
      cyan: "from-cyan-500 to-blue-500"
    };
    return colors[color];
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            From emergency care to specialized treatments, we offer a complete range of medical services 
            designed to meet all your healthcare needs under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            const gradientClass = getColorClasses(service.color);
            
            return (
              <div 
                key={service.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${gradientClass} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/our-services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl group"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}