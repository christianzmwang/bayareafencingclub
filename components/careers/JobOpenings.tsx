export default function JobOpenings() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Team
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Bay Area Fencing Club is one of the fastest growing clubs in the country with
              our headquarters located in the vibrant town of Los Gatos in the beautiful and
              most dynamic San Francisco Bay Area where many world class companies call home. Bay
              Area Fencing Club is excited to open a new club in the City of Pleasanton in
              the ever growing robust Tri Valley Area.
            </p>
          </div>
        </div>

        {/* Current Openings */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Current Openings
          </h2>
          <div className="text-center">
            <div className="inline-flex flex-wrap gap-4 justify-center">
              <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-2 font-semibold">
                Fencing Coach (Foil)
              </span>
              <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-2 font-semibold">
                Fencing Coach (Saber)
              </span>
            </div>
          </div>
        </div>

        {/* Job Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Job Summary */}
          <div className="bg-white dark:bg-gray-800 shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Position Overview
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We are seeking a highly skilled and passionate Foil Coach to join our esteemed
              fencing program. As a Fencing Coach, you will be responsible for instructing and
              guiding athletes in the art of fencing, developing their skills, and fostering a
              positive and supportive learning environment. The ideal candidate should
              possess extensive knowledge and experience in fencing techniques, strategies, and
              training methodologies.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white dark:bg-gray-800 shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              What We Offer
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Competitive compensation
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Health insurance coverage
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Immigration assistance for qualified candidates
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Supportive and dynamic work environment
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Opportunity to work with dedicated athletes
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8">
          
          {/* Responsibilities */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Key Responsibilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Develop and implement comprehensive training programs tailored to individual fencers
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Instruct athletes on proper fencing techniques, footwork, and blade-work
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Conduct group and individual training sessions in a safe environment
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Evaluate performance and provide constructive feedback
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Prepare athletes for competitions with mental and physical conditioning
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Organize and supervise practice sessions and sparring exercises
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Foster positive team culture emphasizing sportsmanship and respect
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Collaborate with coaches, staff, and parents for program success
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  Stay updated with latest fencing techniques and training methods
                </li>
              </ul>
            </div>
          </div>

          {/* Qualifications */}
          <div className="bg-white dark:bg-gray-800 shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Required Qualifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Essential Requirements:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Extensive experience as a Fencing Coach at competitive level
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Expertise in coaching athletes of different age groups and skill levels
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Strong interpersonal and communication skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Proficient English skills required
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Preferred Qualifications:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Outstanding international competition results preferred
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Certifications from recognized fencing organizations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    CPR and first aid certifications
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Flexibility to work evenings and weekends
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Section */}
          <div className="bg-red-50 dark:bg-red-900/20 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              To apply, please submit your resume, cover letter, and any relevant
              certifications or references. We sponsor work visas for qualified candidates.
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:info@bayareafencing.club" 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Application
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Email: info@bayareafencing.club
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
