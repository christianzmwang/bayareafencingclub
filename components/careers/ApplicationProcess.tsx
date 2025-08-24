'use client'

import { useState } from 'react'

export default function ApplicationProcess() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    {
      number: 1,
      title: "Submit Application",
      description: "Send us your resume, cover letter, and any relevant certifications through our online portal.",
      details: [
        "Complete online application form",
        "Upload resume (PDF format preferred)",
        "Write a compelling cover letter",
        "Include relevant certifications",
        "Response within 5 business days"
      ],
      timeframe: "1-2 days"
    },
    {
      number: 2,
      title: "Initial Screening",
      description: "Our HR team will review your application and conduct a brief phone or video screening.",
      details: [
        "HR team reviews application",
        "Phone/video screening (30 minutes)",
        "Discuss experience and interests",
        "Review position requirements",
        "Schedule next interview if suitable"
      ],
      timeframe: "3-5 days"
    },
    {
      number: 3,
      title: "Interview Process",
      description: "Meet with our team leaders and demonstrate your skills in a practical setting.",
      details: [
        "Interview with hiring manager (1 hour)",
        "Practical demonstration/teaching sample",
        "Meet with team members",
        "Facility tour",
        "Q&A session"
      ],
      timeframe: "1-2 weeks"
    },
    {
      number: 4,
      title: "Reference Check",
      description: "We'll contact your references to learn more about your work style and experience.",
      details: [
        "Contact provided references",
        "Verify employment history",
        "Check certifications",
        "Background check (if required)",
        "Final evaluation"
      ],
      timeframe: "3-5 days"
    },
    {
      number: 5,
      title: "Offer & Onboarding",
      description: "Receive your offer and begin the exciting journey of joining our team!",
      details: [
        "Formal job offer",
        "Negotiate terms if needed",
        "Complete paperwork",
        "Orientation and training",
        "Meet your new team"
      ],
      timeframe: "1-2 weeks"
    }
  ]

  const tips = [
    {
      title: "Research Our Programs",
      description: "Familiarize yourself with our teaching philosophy and program offerings.",
      icon: "📚"
    },
    {
      title: "Highlight Relevant Experience",
      description: "Emphasize any coaching, teaching, or youth development experience.",
      icon: "⭐"
    },
    {
      title: "Show Your Passion",
      description: "Let us know why you're passionate about fencing and education.",
      icon: "❤️"
    },
    {
      title: "Prepare Questions",
      description: "Come ready with thoughtful questions about our culture and programs.",
      icon: "❓"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Application Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We've designed a thorough but efficient hiring process to ensure the best fit for both you and our team.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col lg:flex-row lg:items-center mb-4 lg:mb-0">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white cursor-pointer transition-colors duration-200 ${
                    currentStep === step.number
                      ? 'bg-blue-600'
                      : currentStep > step.number
                      ? 'bg-green-500'
                      : 'bg-gray-400'
                  }`}
                  onClick={() => setCurrentStep(step.number)}
                >
                  {currentStep > step.number ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block w-16 h-1 bg-gray-300 dark:bg-gray-600 mx-4"></div>
                )}
              </div>
            ))}
          </div>

          {/* Current Step Details */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            {steps.map((step) => (
              currentStep === step.number && (
                <div key={step.number}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <span className="ml-auto px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {step.timeframe}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, index) => (
                      <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Application Tips */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Application Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {tip.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Common Questions
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  How long does the process take?
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Typically 3-4 weeks from application to final decision, depending on the position and your availability.
                </p>
                
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Do I need prior fencing experience?
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Requirements vary by position. Some roles require fencing experience, while others value teaching or youth development skills more highly.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  What should I bring to the interview?
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Bring copies of your resume, certifications, and be prepared for a practical demonstration relevant to your role.
                </p>
                
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  When do you typically hire?
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We hire year-round as positions become available, with increased hiring before summer camps and new program seasons.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Apply?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Take the first step toward joining our passionate team of fencing professionals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 mr-4">
            Start Your Application
          </button>
          <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-200">
            Contact HR Team
          </button>
        </div>
      </div>
    </section>
  )
}
