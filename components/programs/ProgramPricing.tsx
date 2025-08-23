import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: '$89',
    period: 'per month',
    description: 'Perfect for beginners starting their fencing journey',
    features: [
      '2 group classes per week',
      'Basic equipment provided',
      'Access to practice facilities',
      'Monthly progress report',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Intermediate',
    price: '$149',
    period: 'per month',
    description: 'Ideal for developing fencers ready for more training',
    features: [
      '3 group classes per week',
      '1 private lesson per month',
      'Equipment included',
      'Tournament preparation',
      'Priority booking',
      'Progress tracking'
    ],
    popular: true
  },
  {
    name: 'Advanced',
    price: '$249',
    period: 'per month',
    description: 'For serious competitors and advanced fencers',
    features: [
      'Unlimited group classes',
      '2 private lessons per month',
      'Competition coaching',
      'Video analysis',
      'Nutrition guidance',
      '24/7 coach support'
    ],
    popular: false
  }
]

export default function ProgramPricing() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Program Pricing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that best fits your fencing goals and schedule
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg ${
              plan.popular ? 'ring-2 ring-primary scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                plan.popular
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}>
                {plan.popular ? 'Get Started' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            All plans include a 14-day money-back guarantee
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            * Equipment rental available for additional $25/month
          </p>
        </div>
      </div>
    </section>
  )
}
