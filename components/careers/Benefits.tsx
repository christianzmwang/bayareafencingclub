export default function Benefits() {
  const benefits = [
    {
      category: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Dental and vision coverage",
        "Mental health support",
        "Free gym and fencing facility access",
        "Wellness program reimbursements"
      ],
      icon: "🏥"
    },
    {
      category: "Financial",
      items: [
        "Competitive salary",
        "Performance bonuses",
        "401(k) with company matching",
        "Flexible spending accounts",
        "Professional development stipend"
      ],
      icon: "💰"
    },
    {
      category: "Time Off & Flexibility",
      items: [
        "Generous PTO policy",
        "Paid holidays",
        "Flexible scheduling",
        "Remote work options (where applicable)",
        "Sabbatical opportunities"
      ],
      icon: "🌴"
    },
    {
      category: "Professional Growth",
      items: [
        "Continuing education support",
        "Conference attendance funding",
        "Certification reimbursement",
        "Mentorship programs",
        "Career advancement opportunities"
      ],
      icon: "📚"
    },
    {
      category: "Perks & Extras",
      items: [
        "Employee discounts on programs",
        "Free equipment access",
        "Team building events",
        "Catered team meals",
        "Recognition programs"
      ],
      icon: "🎁"
    },
    {
      category: "Family Support",
      items: [
        "Parental leave",
        "Childcare assistance",
        "Family discounts on programs",
        "Flexible family schedules",
        "Back-to-school support"
      ],
      icon: "👨‍👩‍👧‍👦"
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Benefits & Perks
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We believe in taking care of our team. Our comprehensive benefits package supports your health, growth, and work-life balance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {benefit.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Highlighted Benefits */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Our Benefits Matter
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                We Care About You
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Our comprehensive health and wellness benefits ensure you and your family are taken care of, both physically and mentally.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Invest in Your Future
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                From retirement planning to professional development, we help you build a secure and successful future.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Work-Life Balance
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Flexible schedules and generous time off policies help you maintain a healthy balance between work and personal life.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-blue-50 dark:bg-blue-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join Our Team?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Experience the difference of working with a company that truly values its employees. 
            Your journey with us comes with support, growth opportunities, and a benefits package designed with you in mind.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Explore Open Positions
          </button>
        </div>
      </div>
    </section>
  )
}
