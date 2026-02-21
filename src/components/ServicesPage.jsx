import Image from 'next/image';
import Link from 'next/link';
import { Clock, Phone, CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Emergency Care",
      image: "/services/emergency.jpg",
      description: "Our 24/7 emergency department is equipped with state-of-the-art facilities and staffed by experienced emergency physicians and nurses. We provide immediate care for life-threatening conditions, trauma cases, and urgent medical situations.",
      features: [
        "24/7 availability with no wait time",
        "Advanced trauma care unit",
        "Rapid response team",
        "Direct admission facility",
        "Fully equipped resuscitation bay"
      ],
      
    },
    {
      id: 2,
      title: "Ambulance Service",
      image: "/services/aggarwal-ambulance.png",
      description: "Our fleet of modern, fully-equipped ambulances provides rapid emergency medical transport. Each ambulance is equipped with advanced life support systems and staffed with trained paramedics to ensure safe patient transfer.",
      features: [
        "Advanced life support ambulances",
        "Trained paramedics on board",
        "Cardiac monitoring equipment",
        "Inter-hospital transfer services"
      ],
      icon: "🚑"
    },
    {
      id: 3,
      title: "ICU (Intensive Care Unit)",
      image: "/services/icu.jpg",
      description: "Our ICU provides critical care for patients requiring intensive monitoring and treatment. Equipped with cutting-edge technology and staffed by critical care specialists, we ensure the highest level of care for critically ill patients.",
      features: [
        "24/7 critical care specialists",
        "Advanced ventilator support",
        "Continuous cardiac monitoring",
        "Dedicated nursing staff",
        "Infection-controlled environment"
      ],
      icon: "🏥"
    },
    {
      id: 4,
      title: "Lab Tests",
      image: "/services/lab-tests.jpg",
      description: "Our state-of-the-art laboratory offers comprehensive diagnostic testing services with accurate and timely results. From routine blood tests to specialized investigations, we provide a complete range of pathology services.",
      features: [
        "Automated testing equipment",
        "Same-day results for urgent tests",
        "Wide range of diagnostic tests",
        "NABL accredited laboratory",
        "Online report access"
      ],
      icon: "🔬"
    },
    {
      id: 5,
      title: "Radiology Scans",
      image: "/services/radiology.png",
      description: "Our radiology department features the latest imaging technology including X-ray, CT scan, MRI, ultrasound, and mammography. Our expert radiologists provide accurate interpretations to aid in precise diagnosis.",
      features: [
        "Digital X-ray and mammography",
        "Multi-slice CT scan",
        "3 Tesla MRI machine",
        "4D ultrasound",
        "Expert radiologist reporting"
      ],
      icon: "📡"
    },
    {
      id: 6,
      title: "Pharmacy",
      image: "/services/pharmacy.jpg",
      description: "Our in-house pharmacy stocks a comprehensive range of medications, surgical supplies, and medical equipment. We ensure availability of all prescribed medications with expert guidance from our qualified pharmacists.",
      features: [
        "24/7 pharmacy services",
        "Wide range of medicines",
        "Expert pharmacist consultation",
        "Home delivery available",
      ],
      icon: "💊"
    },
    {
      id: 7,
      title: "Physiotherapy",
      image: "/services/physiotherapy.png",
      description: "Our physiotherapy department offers personalized rehabilitation programs for patients recovering from injuries, surgeries, or managing chronic conditions. Our certified physiotherapists use evidence-based techniques for optimal recovery.",
      features: [
        "Certified physiotherapists",
        "Modern exercise equipment",
        "Post-surgery rehabilitation",
        "Sports injury treatment",
        "Customized therapy programs"
      ],
      icon: "🏃"
    },
    {
      id: 8,
      title: "Home Sample Collection",
      image: "/services/sample.jpg",
      description: "Experience the convenience of diagnostic testing from the comfort of your home. Our trained phlebotomists visit your doorstep to collect samples for various laboratory tests with complete safety and hygiene protocols.",
      features: [
        "Doorstep sample collection",
        "Trained phlebotomists",
        "Contactless service available",
        "Online report delivery",
        "Flexible time slots"
      ],
      icon: "🏠"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Healthcare Services
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8">
              Comprehensive medical care designed around your needs. We offer a complete range of healthcare services with cutting-edge technology and compassionate care.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span>24/7 Emergency Care</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Phone className="w-5 h-5" />
                <span>+91 98777-00827</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                      {/* Replace with actual image */}
                      <div className="text-center">
                        
                        <p className="text-gray-500 text-sm">Image: {service.image}</p>
                      </div>
                      {/* Uncomment when you have images */}
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                    Service {service.id}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href="#appointment"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    Book Appointment
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're committed to providing exceptional healthcare with the latest technology and compassionate care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Response</h3>
              <p className="text-gray-300">
                Immediate attention to emergency cases with minimal waiting time
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Care</h3>
              <p className="text-gray-300">
                Highly qualified specialists and support staff for all services
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Equipment</h3>
              <p className="text-gray-300">
                State-of-the-art medical technology for accurate diagnosis
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
              <p className="text-gray-300">
                Quality healthcare at competitive prices with insurance support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Medical Assistance?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Our team is ready to provide you with the best healthcare services. Book an appointment or reach out to us for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#appointment"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Book Appointment
            </Link>
            <a 
              href="tel:+919877700827"
              className="bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-800 transition-colors border-2 border-white"
            >
              Call Emergency: +91 98777-00827
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}