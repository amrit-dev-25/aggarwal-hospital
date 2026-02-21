import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Rajiv Aggarwal",
      specialty: "Chief Cardiologist Surgeon",
      image: "/doctor-aggarwal.png",
      qualification: "MD, DM (Cardiology), FICS",
      experience: "15+ Years",
      languages: ["English", "Punjabi", "Hindi"],
      about:
        "Dr. Rajiv Aggarwal is a renowned cardiologist with over 15 years of experience in treating complex cardiovascular conditions. He specializes in cardiac surgery and has performed over 3000 successful cardiac procedures.",
      expertise: [
        "Joint Replacement Surgery",
        "Arthroscopic Surgery",
        "Spine Surgery",
        "Sports Injury Treatment",
        "Trauma & Fracture Care",
      ],
      education: [
        "MD - Harvard Medical School",
        "DM Orthopedics - Johns Hopkins",
        "Fellowship - Mayo Clinic",
      ],
      awards: [
        "Best Orthopedic Surgeon Award 2023",
        "Excellence in Patient Care 2022",
      ],
      availability: "Mon, Wed, Fri - 9:00 AM to 5:00 PM",
      consultationFee: "1200/-",
    },
    {
      id: 2,
      name: "Dr. Harjoban Singh",
      specialty: "Orthopedic Surgeon",
      image: "/doctor-harjoban.png",
      qualification: "MD, DM (Orthopedics), FICS",
      experience: "12+ Years",
      languages: ["English", "Punjabi", "Hindi"],
      about:
        "Dr. Harjoban Singh is an expert orthopedic surgeon specializing in joint replacement and sports injuries. His expertise in minimally invasive techniques and post-operative care ensures optimal recovery for patients.",
      expertise: [
        "Joint Replacement Surgery",
        "Arthroscopic Surgery",
        "Sports Injury Treatment",
        "Spine Surgery",
        "Neuromuscular Diseases",
      ],
      education: [
        "MD - Stanford University",
        "DM Orthopedics - Johns Hopkins",
        "Fellowship - Mayo Clinic",
      ],
      awards: [
        "Outstanding Orthopedic Surgeon 2023",
        "Research Excellence Award 2021",
      ],
      availability: "Tue, Thu, Sat - 10:00 AM to 6:00 PM",
      consultationFee: "1200/-",
    },
    {
      id: 3,
      name: "Dr. Harpreet Kaur",
      specialty: "Neurologist",
      image: "/doctors/doctor-2.png",
      qualification: "MD, DCH, FIAP",
      experience: "10+ Years",
      languages: ["English", "French"],
      about:
        "Dr. Harpreet Kaur is an expert neurologist specializing in stroke management and epilepsy treatment. His patient-centric approach and expertise in neurovascular diseases have helped thousands of patients recover successfully.",
      expertise: [
        "Newborn Care",
        "Childhood Vaccinations",
        "Growth & Development",
        "Pediatric Nutrition",
        "Childhood Infections",
      ],
      education: [
        "MD - Columbia University",
        "DCH - Boston Children's Hospital",
        "Fellowship - Children's Hospital Philadelphia",
      ],
      awards: [
        "Best Pediatrician Award 2022",
        "Child Healthcare Excellence 2021",
      ],
      availability: "Mon, Wed, Fri, Sat - 8:00 AM to 4:00 PM",
      consultationFee: "250/-",
    },
    {
      id: 4,
      name: "Dr. Manish Kumar",
      specialty: "Orthopedic Surgeon",
      image: "/doctors/doctor-44.jpg",
      qualification: "MS (Ortho), DNB, FICS",
      experience: "18+ Years",
      languages: ["English", "German"],
      about:
        "Dr. David Brown is a highly skilled orthopedic surgeon specializing in joint replacement and sports medicine. His minimally invasive surgical techniques and rehabilitation protocols ensure faster recovery for patients.",
      expertise: [
        "Joint Replacement Surgery",
        "Arthroscopic Surgery",
        "Sports Injury Treatment",
        "Spine Surgery",
        "Trauma & Fracture Care",
      ],
      education: [
        "MS Orthopedics - Yale University",
        "DNB - National Board",
        "Fellowship - Hospital for Special Surgery",
      ],
      awards: ["Top Orthopedic Surgeon 2023", "Surgical Excellence Award 2022"],
      availability: "Tue, Thu - 11:00 AM to 7:00 PM",
      consultationFee: "800/-",
    },
    {
      id: 5,
      name: "Dr. Harleen Kaur",
      specialty: "Dermatologist",
      image: "/doctors/doctor-5.png",
      qualification: "MD, DVD, FAAD",
      experience: "8+ Years",
      languages: ["English", "Italian"],
      about:
        "Dr. Lisa Anderson is a board-certified dermatologist with expertise in medical and cosmetic dermatology. She combines evidence-based treatments with the latest aesthetic procedures to help patients achieve healthy, beautiful skin.",
      expertise: [
        "Acne & Scar Treatment",
        "Skin Cancer Detection",
        "Anti-Aging Treatments",
        "Laser Therapy",
        "Hair Loss Treatment",
      ],
      education: [
        "MD - University of Pennsylvania",
        "DVD - NYU Langone",
        "Fellowship - Mount Sinai Hospital",
      ],
      awards: ["Excellence in Dermatology 2023", "Patient Choice Award 2022"],
      availability: "Mon, Wed, Fri - 10:00 AM to 6:00 PM",
      consultationFee: "700/-",
    },
    {
      id: 6,
      name: "Dr. Rajeev Sarwal",
      specialty: "General Surgeon",
      image: "/doctors/doctor-3.png",
      qualification: "MS, FACS, FICS",
      experience: "5+ Years",
      languages: ["English", "Spanish", "Portuguese"],
      about:
        "Dr. James Martinez is a veteran general surgeon with two decades of surgical expertise. He specializes in laparoscopic and minimally invasive procedures, ensuring faster recovery and minimal scarring for his patients.",
      expertise: [
        "Laparoscopic Surgery",
        "Hernia Repair",
        "Gallbladder Surgery",
        "Appendectomy",
        "Colorectal Surgery",
      ],
      education: [
        "MS Surgery - University of Michigan",
        "FACS - American College of Surgeons",
        "Fellowship - Massachusetts General Hospital",
      ],
      awards: ["Lifetime Achievement Award 2023", "Best Surgeon Award 2020"],
      availability: "Mon, Tue, Thu - 9:00 AM to 5:00 PM",
      consultationFee: "500/-",
    },
  ];

  const specialtyColors = {
    Cardiologist: "bg-red-100 text-red-700 border-red-200",
    Neurologist: "bg-purple-100 text-purple-700 border-purple-200",
    Pediatrician: "bg-pink-100 text-pink-700 border-pink-200",
    "Orthopedic Surgeon": "bg-blue-100 text-blue-700 border-blue-200",
    "Chief Cardiologist Surgeon": "bg-red-100 text-red-700 border-red-200",
    Dermatologist: "bg-teal-100 text-teal-700 border-teal-200",
    "General Surgeon": "bg-cyan-100 text-cyan-700 border-cyan-200",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Medical Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our Expert Doctors
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8">
              Our team of highly qualified and experienced doctors is dedicated
              to providing you with the best medical care. Each specialist
              brings years of expertise and a commitment to patient well-being.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <GraduationCap className="w-5 h-5" />
                <span>Board Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5" />
                <span>Highly Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                {/* Doctor Image */}
                <div className="relative h-80 bg-gradient-to-br from-teal-100 to-cyan-100">
                  {/* Replace with actual image */}
                  <div className="h-full flex flex-col items-center justify-center p-8">
                    <div className="w-32 h-32 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-5xl text-white font-bold">
                        {doctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Image: {doctor.image}
                    </p>
                  </div>
                  {/* Uncomment when you have images */}
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Specialty Badge */}
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold border ${specialtyColors[doctor.specialty]}`}
                  >
                    {doctor.specialty}
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-2">
                    {doctor.qualification}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {doctor.experience} Experience
                    </span>
                  </div>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doctor.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-2 mb-4 pb-4 border-b border-gray-200">
                    <Clock className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">
                        {doctor.availability}
                      </p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        Consultation Fee: {doctor.consultationFee}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/doctors/${doctor.id}`}
                      className="flex-1 text-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all text-sm"
                    >
                      View Profile
                    </Link>
                    <Link
                      href="#appointment"
                      className="flex-1 text-center bg-teal-100 text-teal-700 px-4 py-2.5 rounded-lg font-semibold hover:bg-teal-200 transition-colors text-sm"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Details Section (Expandable) */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Doctor Profiles
            </h2>
            <p className="text-gray-600 text-lg">
              Learn more about our doctors' expertise, education, and
              achievements
            </p>
          </div>

          <div className="space-y-8">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Doctor Image - Smaller in detailed view */}
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="relative h-48 lg:h-64 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl overflow-hidden">
                        {/* Replace with actual image */}
                        <div className="h-full flex items-center justify-center">
                          <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center">
                            <span className="text-3xl text-white font-bold">
                              {doctor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <p className="absolute bottom-2 text-gray-500 text-xs">
                            Image: {doctor.image}
                          </p>
                        </div>
                        {/* Uncomment when you have images */}
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Doctor Details */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {doctor.name}
                        </h3>
                        <p className="text-teal-600 font-semibold text-lg mb-2">
                          {doctor.specialty} | {doctor.qualification}
                        </p>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Award className="w-4 h-4" />
                          <span className="text-sm">
                            {doctor.experience} of Excellence
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6">
                        {doctor.about}
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Expertise */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-teal-600" />
                            Areas of Expertise
                          </h4>
                          <ul className="space-y-2">
                            {doctor.expertise.map((item, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-start gap-2"
                              >
                                <span className="text-teal-600 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Education */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-teal-600" />
                            Education
                          </h4>
                          <ul className="space-y-2">
                            {doctor.education.map((item, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-start gap-2"
                              >
                                <span className="text-teal-600 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Awards */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5 text-teal-600" />
                            Awards & Recognition
                          </h4>
                          <ul className="space-y-2">
                            {doctor.awards.map((item, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-start gap-2"
                              >
                                <span className="text-teal-600 mt-1">🏆</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Contact & Appointment */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-4 h-4 text-teal-600" />
                              <span className="text-sm">
                                {doctor.availability}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-900">
                              <span className="text-sm font-semibold">
                                Fee: {doctor.consultationFee}
                              </span>
                            </div>
                          </div>
                          <Link
                            href="#appointment"
                            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg"
                          >
                            Book Appointment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Doctors */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Doctors?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our medical team is committed to providing exceptional care with
              expertise and compassion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Highly Qualified</h3>
              <p className="text-gray-300">
                All our doctors are board-certified with advanced degrees from
                top institutions
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Patient Reviews</h3>
              <p className="text-gray-300">
                Consistently high ratings and positive feedback from thousands
                of patients
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Award Winners</h3>
              <p className="text-gray-300">
                Multiple awards and recognitions for excellence in medical care
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Compassionate Care</h3>
              <p className="text-gray-300">
                Patient-centered approach with empathy and understanding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Consult with Our Experts?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Book an appointment with our experienced doctors and get the best
            medical care you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#appointment"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Book Appointment Now
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
