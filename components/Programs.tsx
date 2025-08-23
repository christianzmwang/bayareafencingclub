import { Calendar, Users, Trophy, Target } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      name: 'Beginner Fencing',
      description: 'Perfect for those new to fencing. Learn basic techniques, footwork, and safety protocols.',
      duration: '8 weeks',
      ageGroup: 'Ages 8+',
      price: '$299',
      features: ['Equipment provided', 'Basic techniques', 'Safety training', 'Fun atmosphere']
    },
    {
      name: 'Intermediate Training',
      description: 'For fencers with basic skills. Develop advanced techniques and tactical thinking.',
      duration: '12 weeks',
      ageGroup: 'Ages 10+',
      price: '$399',
      features: ['Advanced techniques', 'Tactical training', 'Competition prep', 'Individual coaching']
    },
    {
      name: 'Elite Competition',
      description: 'High-level training for competitive fencers. Intensive coaching and tournament preparation.',
      duration: '16 weeks',
      ageGroup: 'Ages 12+',
      price: '$599',
      features: ['Elite coaching', 'Tournament prep', 'Video analysis', 'Mental training']
    },
    {
      name: 'Adult Fencing',
      description: 'Specialized programs for adult learners. Flexible scheduling and personalized instruction.',
      duration: '10 weeks',
      ageGroup: 'Ages 18+',
      price: '$349',
      features: ['Flexible scheduling', 'Personalized instruction', 'Fitness focus', 'Social fencing']
    }
  ]

  return (
    <section id="programs" className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            From beginners to elite competitors, we have programs for every skill level
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {program.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>Duration: {program.duration}</span>
                  <span>Age: {program.ageGroup}</span>
                </div>
                <div className="text-3xl font-bold text-primary dark:text-primary-light">
                  {program.price}
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="text-primary dark:text-primary-light mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
