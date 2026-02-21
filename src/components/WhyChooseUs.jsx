export default function WhyChooseUs() {
  return (
    <section id="about-us" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
            About Us
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted Healthcare Excellence
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              For over 20 years, we've been committed to providing exceptional medical care. Our mission is to improve the health and well-being of every patient through innovative treatments and compassionate service.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {/* Patient-Centered Care */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Patient-Centered Care
                  </h3>
                  <p className="text-gray-600">
                    We put patients first, ensuring personalized treatment plans tailored to individual needs.
                  </p>
                </div>
              </div>

              {/* Advanced Technology */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Advanced Technology
                  </h3>
                  <p className="text-gray-600">
                    State-of-the-art equipment and cutting-edge medical technology for accurate diagnostics.
                  </p>
                </div>
              </div>

              {/* Compassionate Staff */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Compassionate Staff
                  </h3>
                  <p className="text-gray-600">
                    Our dedicated team provides care with empathy, respect, and understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="flex items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full relative">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Patients Treated */}
                <div className="text-center p-6 border border-gray-100 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                    5,000+
                  </div>
                  <div className="text-gray-600 text-sm">Patients Treated</div>
                </div>

                {/* Patient Satisfaction */}
                <div className="text-center p-6 border border-gray-100 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                    20
                  </div>
                  <div className="text-gray-600 text-sm">Beds</div>
                </div>

                {/* Medical Staff */}
                <div className="text-center p-6 border border-gray-100 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                    20+
                  </div>
                  <div className="text-gray-600 text-sm">Medical Staff</div>
                </div>

                {/* Years of Excellence */}
                <div className="text-center p-6 border border-gray-100 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                    20+
                  </div>
                  <div className="text-gray-600 text-sm">Years of Excellence</div>
                </div>
              </div>

              {/* Accredited Badge */}
              <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-xl">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Accredited</div>
                  <div className="text-sm text-gray-600">NABH Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}