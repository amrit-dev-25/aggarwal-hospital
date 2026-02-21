import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Brain,
  Bone,
  Baby,
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  Award,
} from "lucide-react";

export default function DepartmentsPage() {
  const departments = [
    {
      id: 1,
      title: "Cardiology",
      subtitle: "Heart & Vascular Care",
      image: "/departments/cardiology.png",
      description:
        "Our cardiology department is equipped with state-of-the-art facilities for comprehensive heart care. From preventive cardiology to complex interventions, our team of expert cardiologists provides world-class treatment for all cardiovascular conditions.",
      services: [
        "Coronary Angiography & Angioplasty",
        "Echocardiography (2D, 3D, TEE)",
        "Cardiac CT & MRI",
        "Pacemaker Implantation",
        "Heart Failure Management",
        "Preventive Cardiology Programs",
      ],
      stats: {
        procedures: "100+ procedures annually",
        specialists: "2 Cardiologists",
        successRate: "98% success rate",
      },
      icon: Heart,
      color: "red",
    },
    
    {
      id: 2,
      title: "Orthopedics",
      subtitle: "Bone & Joint Specialists",
      image: "/departments/orthopedics.jpg",
      description:
        "Our orthopedic department offers comprehensive care for musculoskeletal conditions. From sports injuries to joint replacements, our experienced orthopedic surgeons use minimally invasive techniques and advanced rehabilitation protocols.",
      services: [
        "Joint Replacement Surgery (Hip, Knee, Shoulder)",
        "Arthroscopic Surgery",
        "Spine Surgery",
        "Sports Injury Treatment",
        "Fracture & Trauma Care",
        "Pediatric Orthopedics",
      ],
      stats: {
        procedures: "2500+ surgeries annually",
        specialists: "3 Orthopedic Surgeons",
        successRate: "97% recovery rate",
      },
      icon: Bone,
      color: "blue",
    },
    {
      id: 3,
      title: "Neurology",
      subtitle: "Brain & Nervous System",
      image: "/departments/neurology.png",
      description:
        "Our neurology department specializes in the diagnosis and treatment of disorders affecting the brain, spinal cord, and nervous system. With advanced neuroimaging and expert neurologists, we provide comprehensive care for all neurological conditions.",
      services: [
        "Stroke Management & Prevention",
        "Epilepsy Treatment",
        "Movement Disorder Care (Parkinson's)",
        "Headache & Migraine Clinic",
        "Neuromuscular Disorders",
        "Memory & Cognitive Assessment",
      ],
      stats: {
        procedures: "3000+ consultations yearly",
        specialists: "2 Neurologists",
        successRate: "95% patient satisfaction",
      },
      icon: Brain,
      color: "purple",
    },
    {
      id: 4,
      title: "Pediatrics",
      subtitle: "Child Healthcare Experts",
      image: "/departments/pediatric.png",
      description:
        "Our pediatric department is dedicated to providing comprehensive healthcare for infants, children, and adolescents. Our child-friendly environment and experienced pediatricians ensure your child receives the best possible care with compassion and expertise.",
      services: [
        "Newborn & Infant Care",
        "Vaccination Programs",
        "Growth & Development Monitoring",
        "Pediatric Emergency Care",
        "Childhood Illness Management",
        "Adolescent Health Services",
      ],
      stats: {
        procedures: "2,000+ children treated yearly",
        specialists: "1 Pediatrician",
        successRate: "99% immunization coverage",
      },
      icon: Baby,
      color: "pink",
    },
    {
      id: 5,
      title: "Dermatology",
      subtitle: "Skin, Hair & Nail Care",
      image: "/departments/dermatology.png",
      description:
        "Our dermatology department offers advanced treatments for all skin, hair, and nail conditions. From medical dermatology to cosmetic procedures, our board-certified dermatologists combine clinical expertise with cutting-edge technology.",
      services: [
        "Acne & Scar Treatment",
        "Skin Cancer Screening & Treatment",
        "Hair Loss Management",
        "Cosmetic Dermatology",
        "Laser Treatments",
        "Anti-Aging Procedures",
      ],
      stats: {
        procedures: "4000+ treatments annually",
        specialists: "1 Dermatologists",
        successRate: "96% patient satisfaction",
      },
      icon: Sparkles,
      color: "teal",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: {
        gradient: "from-red-600 to-rose-600",
        bg: "bg-red-600",
        light: "bg-red-100",
        text: "text-red-700",
        border: "border-red-200",
      },
      purple: {
        gradient: "from-purple-600 to-violet-600",
        bg: "bg-purple-600",
        light: "bg-purple-100",
        text: "text-purple-700",
        border: "border-purple-200",
      },
      blue: {
        gradient: "from-blue-600 to-cyan-600",
        bg: "bg-blue-600",
        light: "bg-blue-100",
        text: "text-blue-700",
        border: "border-blue-200",
      },
      pink: {
        gradient: "from-pink-600 to-rose-600",
        bg: "bg-pink-600",
        light: "bg-pink-100",
        text: "text-pink-700",
        border: "border-pink-200",
      },
      teal: {
        gradient: "from-teal-600 to-cyan-600",
        bg: "bg-teal-600",
        light: "bg-teal-100",
        text: "text-teal-700",
        border: "border-teal-200",
      },
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Centers of Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Medical Departments
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8">
              Specialized care across multiple medical disciplines. Our expert
              teams are dedicated to providing comprehensive, patient-centered
              treatment using advanced technology and proven methods.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5" />
                <span>Expert Specialists</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span>Trust-Worthy Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex overflow-x-auto gap-2 py-4 no-scrollbar">
            {departments.map((dept) => {
              const colors = getColorClasses(dept.color);
              return (
                <Link
                  key={dept.id}
                  href={`#${dept.title.toLowerCase()}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${colors.light} ${colors.text} whitespace-nowrap hover:shadow-md transition-shadow flex-shrink-0`}
                >
                  <dept.icon className="w-4 h-4" />
                  <span className="font-medium">{dept.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Departments Detail Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="space-y-20">
            {departments.map((department, index) => {
              const colors = getColorClasses(department.color);
              const Icon = department.icon;

              return (
                <div
                  key={department.id}
                  id={department.title.toLowerCase()}
                  className="scroll-mt-24"
                >
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8 lg:gap-12 items-center`}
                  >
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <div
                          className={`aspect-[4/3] bg-gradient-to-br ${colors.light} to-gray-50 flex items-center justify-center`}
                        >
                          {/* Replace with actual image */}
                          <div className="text-center p-8">
                            <Icon
                              className={`w-32 h-32 mx-auto mb-4 ${colors.text}`}
                              strokeWidth={1.5}
                            />
                            <p className="text-gray-500 text-sm">
                              Image: {department.image}
                            </p>
                          </div>
                          {/* Uncomment when you have images */}
                          <Image 
                            src={department.image} 
                            alt={department.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div
                          className={`absolute top-4 left-4 bg-gradient-to-r ${colors.gradient} rounded-full p-4 shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                      <div
                        className={`inline-block ${colors.light} ${colors.text} px-4 py-1 rounded-full text-sm font-medium mb-4`}
                      >
                        Department {department.id}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {department.title}
                      </h2>
                      <p className={`text-xl font-medium ${colors.text} mb-4`}>
                        {department.subtitle}
                      </p>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {department.description}
                      </p>

                      {/* Stats */}
                      <div
                        className={`grid grid-cols-3 gap-4 p-6 ${colors.light} rounded-xl mb-6`}
                      >
                        <div className="text-center">
                          <div
                            className={`text-2xl font-bold ${colors.text} mb-1`}
                          >
                            {department.stats.procedures.split(" ")[0]}
                          </div>
                          <div className="text-xs text-gray-600">
                            {department.stats.procedures
                              .split(" ")
                              .slice(1)
                              .join(" ")}
                          </div>
                        </div>
                        <div className="text-center border-x border-gray-300">
                          <div
                            className={`text-2xl font-bold ${colors.text} mb-1`}
                          >
                            {department.stats.specialists.split(" ")[0]}
                          </div>
                          <div className="text-xs text-gray-600">
                            {department.stats.specialists
                              .split(" ")
                              .slice(1)
                              .join(" ")}
                          </div>
                        </div>
                        <div className="text-center">
                          <div
                            className={`text-2xl font-bold ${colors.text} mb-1`}
                          >
                            {department.stats.successRate.split(" ")[0]}
                          </div>
                          <div className="text-xs text-gray-600">
                            {department.stats.successRate
                              .split(" ")
                              .slice(1)
                              .join(" ")}
                          </div>
                        </div>
                      </div>

                      {/* Services */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Our Services
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {department.services.map((service, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div
                              className={`w-5 h-5 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                            >
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-sm">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <Link
                          href="#appointment"
                          className={`inline-flex items-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all`}
                        >
                          Book Appointment
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                          href={`/departments/${department.title.toLowerCase()}`}
                          className={`inline-flex items-center gap-2 ${colors.light} ${colors.text} px-6 py-3 rounded-lg font-semibold hover:shadow-md transition-all border ${colors.border}`}
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Departments */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Departments?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Excellence in specialized care backed by experience, technology,
              and compassion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Specialists</h3>
              <p className="text-gray-300">
                Highly qualified doctors with years of specialized training and
                experience
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p className="text-gray-300">
                High success rates and patient satisfaction across all
                departments
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
              <p className="text-gray-300">
                Latest medical equipment and cutting-edge treatment protocols
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Patient-Centered</h3>
              <p className="text-gray-300">
                Compassionate care tailored to individual needs and preferences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Specialized Medical Care?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Our expert departments are ready to provide you with world-class
            treatment. Schedule a consultation with our specialists today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#appointment"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Book Consultation
            </Link>
            <a
              href="tel:+919877700827"
              className="bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-800 transition-colors border-2 border-white"
            >
              Call Us: +91 98777-00827
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
