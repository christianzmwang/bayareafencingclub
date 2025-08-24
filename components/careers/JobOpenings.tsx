export default function JobOpenings() {
  const jobs = [
    {
      title: "Head Fencing Coach",
      department: "Coaching",
      location: "Bay Area, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead our coaching team and develop curriculum for competitive programs.",
      requirements: [
        "USFA coaching certification",
        "5+ years competitive fencing experience",
        "Previous coaching experience",
        "Strong leadership skills"
      ]
    },
    {
      title: "Youth Program Instructor",
      department: "Education",
      location: "Bay Area, CA",
      type: "Part-time",
      experience: "2+ years",
      description: "Teach foundational fencing skills to children ages 5-17.",
      requirements: [
        "Experience working with children",
        "Fencing background preferred",
        "Excellent communication skills",
        "First aid certification"
      ]
    },
    {
      title: "Operations Manager",
      department: "Administration",
      location: "Bay Area, CA",
      type: "Full-time",
      experience: "3+ years",
      description: "Oversee daily operations, scheduling, and customer service.",
      requirements: [
        "Business administration background",
        "Customer service experience",
        "Strong organizational skills",
        "Sports facility experience preferred"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Current Openings
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join our passionate team of fencing professionals and help us create an exceptional experience for our students.
          </p>
        </div>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      {job.experience}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {job.description}
                  </p>
                </div>
                <div className="lg:ml-6">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
                    Apply Now
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Requirements:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Don't see a position that fits? We're always looking for talented individuals.
          </p>
          <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-200">
            Send Us Your Resume
          </button>
        </div>
      </div>
    </section>
  )
}
