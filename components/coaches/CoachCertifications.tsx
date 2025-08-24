export default function CoachCertifications() {
  const certifications = [
    {
      organization: "United States Fencing Association (USFA)",
      levels: [
        { name: "Certified Instructor", description: "Basic teaching certification for all weapons" },
        { name: "Master Instructor", description: "Advanced certification for experienced coaches" },
        { name: "Safety & First Aid", description: "Required safety and emergency response training" }
      ],
      logo: "🏅"
    },
    {
      organization: "Professional Fencers International (PFI)",
      levels: [
        { name: "Maitre d'Armes", description: "Master-level teaching credential" },
        { name: "Provost", description: "Advanced instructor certification" }
      ],
      logo: "⚔️"
    },
    {
      organization: "Federation Internationale d'Escrime (FIE)",
      levels: [
        { name: "International Coach", description: "Global coaching certification" },
        { name: "Academy Instructor", description: "Youth development specialization" }
      ],
      logo: "🌍"
    }
  ]

  const requirements = [
    {
      title: "Ongoing Education",
      description: "All coaches participate in continuing education programs to stay current with the latest techniques and safety protocols.",
      icon: "📚"
    },
    {
      title: "Safety Training",
      description: "Comprehensive first aid, CPR, and equipment safety training ensures a secure learning environment.",
      icon: "🛡️"
    },
    {
      title: "Background Checks",
      description: "All staff undergo thorough background checks and SafeSport training for youth protection.",
      icon: "✅"
    },
    {
      title: "Performance Standards",
      description: "Regular evaluations and student feedback ensure our coaches maintain the highest teaching standards.",
      icon: "⭐"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Qualifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our coaches hold internationally recognized certifications and undergo continuous training to provide the highest quality instruction.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Professional Certifications
          </h3>
          <div className="space-y-8">
            {certifications.map((org, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{org.logo}</span>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {org.organization}
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {org.levels.map((level, levelIndex) => (
                    <div key={levelIndex} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {level.name}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {level.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements & Standards */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Standards & Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{req.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {req.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Process */}
        <div className="mt-16 bg-blue-50 dark:bg-blue-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Why Certifications Matter
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Quality Assurance
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Certifications ensure our coaches meet rigorous standards for technical knowledge and teaching ability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Safety First
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Safety certifications protect our students and create a secure learning environment for everyone.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Continuous Growth
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Ongoing certification requirements keep our coaches updated with the latest techniques and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
