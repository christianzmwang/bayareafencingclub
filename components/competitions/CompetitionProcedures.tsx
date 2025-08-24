import { CheckCircle, Clock, Shield, Users, ExternalLink } from 'lucide-react'

export default function CompetitionProcedures() {
  const procedures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Adult Supervision",
      description: "All Children must be accompanied by a responsible adult. Coaches will be focusing on the competition and cannot be responsible for your child."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Equipment Inspection",
      description: "Fencers should inspect their equipment at least a week before the competition. The tournament's armory will check all electric equipment. Ensure to have at least 2 weapons and 2 body cords."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Arrival Time",
      description: "Arrive at the venue at least 1 hour prior to your event. This allows time to check in, queue at the armory, handle any equipment issues, and fully warm up before the event commences."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Required Documents",
      description: "Don't forget to bring proof of age and have the USA Fencing membership card ready."
    }
  ]

  const competitionSteps = [
    "Upon arrival, locate your teammates/coach. The team's equipment should be placed in the same general area, typically marked by a banner or flag.",
    "Warm up with your teammates. Aim to be suited up and warmed up at least 20 minutes before your competition begins.",
    "When the competition starts, report to your assigned strip. The pool and strip assignment can be found at www.fencingtimelive.com. Note your assigned number on the pool chart.",
    "The referee will use your number to identify you, so remember it and listen to the referee carefully.",
    "After the pool round, you can rest for 20 minutes while waiting for the next Direct Elimination (DE) round. Do not leave the venue after the pool round.",
    "In DE, winning fencers proceed to the next round. If you lose a DE bout, you're eliminated from the tournament.",
    "If you lose, stay to support your teammates.",
    "Wear your BAFC t-shirt and black sweats with a pullover. The pullovers will be available soon."
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Competition Procedures
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            To ensure a smooth competition, we kindly remind everyone of the following procedures
          </p>
        </div>

        {/* Key Requirements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {procedures.map((procedure, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900 mb-4 text-yellow-600 dark:text-yellow-400">
                {procedure.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                {procedure.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {procedure.description}
              </p>
            </div>
          ))}
        </div>

        {/* Competition Day Steps */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Competition Day Step-by-Step Guide
          </h3>
          <div className="space-y-4">
            {competitionSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 dark:text-gray-300">
                    {step.includes('www.fencingtimelive.com') ? (
                      <>
                        {step.split('www.fencingtimelive.com')[0]}
                        <a 
                          href="https://www.fencingtimelive.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                        >
                          www.fencingtimelive.com <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                        {step.split('www.fencingtimelive.com')[1]}
                      </>
                    ) : (
                      step
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Compete?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Start with local competitions and work your way up as you gain experience and confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://calendly.com/lisaposthumus-pfn_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white inline-flex items-center font-semibold transition-colors duration-200"
              >
                Free Trial Class <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
