'use client'

import { useState } from 'react'

export default function CampFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What ages are eligible for the summer camp?",
      answer: "Our summer camp welcomes children ages 5-17. We have specialized programs for different age groups: Little Pirates (5-7), Young Fencers (8-12), and Teen Academy (13-17)."
    },
    {
      question: "Do campers need prior fencing experience?",
      answer: "No prior experience is necessary! Our camp is designed for all skill levels, from complete beginners to experienced young fencers. Our instructors will adapt the program to each camper's skill level."
    },
    {
      question: "What equipment is provided?",
      answer: "We provide all necessary fencing equipment including masks, weapons (foil, epee, sabre), protective gear, and gloves. Campers should wear comfortable athletic clothing and sneakers."
    },
    {
      question: "What is the daily schedule like?",
      answer: "Camp runs from 8:00 AM to 3:30 PM Monday through Friday. Each day includes technical training, bouting practice, games, and skill development. We also provide snack breaks and lunch time."
    },
    {
      question: "How many campers are in each group?",
      answer: "We maintain small group sizes to ensure personalized attention. Typically, we have 8-12 campers per instructor, allowing for quality instruction and safety."
    },
    {
      question: "Are meals provided?",
      answer: "We provide morning and afternoon snacks. Campers should bring their own lunch or can purchase lunch from our partner food service (additional cost)."
    },
    {
      question: "What safety measures are in place?",
      answer: "Safety is our top priority. All equipment is regularly inspected, instructors are certified in first aid, and we maintain strict safety protocols during all activities. Medical forms are required for all campers."
    },
    {
      question: "Can parents watch the activities?",
      answer: "Parents are welcome to observe during designated times. We also host a parent demonstration day at the end of each week where campers can showcase their new skills."
    },
    {
      question: "What happens if my child has never held a sword before?",
      answer: "Perfect! Many of our campers start with zero experience. Our instructors are specially trained to introduce fencing in a fun, safe, and age-appropriate way. We start with basic movements and gradually build skills."
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer full refunds up to 2 weeks before the camp start date. Within 2 weeks, a 50% refund is available. No refunds are provided once camp begins, except for medical emergencies."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Got questions? We've got answers! Here are some common questions about our summer camp.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions? We'd love to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bayareafencing.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
