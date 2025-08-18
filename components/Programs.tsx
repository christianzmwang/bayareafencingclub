import { Calendar, Users, Trophy, Target } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      title: 'BAFC 2025 Summer Camp',
      description: 'Join our exciting summer fencing camp for all skill levels. Learn fencing fundamentals, improve technique, and make new friends.',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      features: ['All skill levels welcome', 'Professional instruction', 'Equipment provided', 'Fun and engaging activities']
    },
    {
      title: 'Beginner Classes',
      description: 'Perfect for those new to fencing. Learn the basics of footwork, blade work, and fencing strategy.',
      icon: Target,
      color: 'from-green-500 to-green-600',
      features: ['Basic footwork', 'Blade work fundamentals', 'Safety training', 'Introduction to rules']
    },
    {
      title: 'Advanced Training',
      description: 'For experienced fencers looking to compete at higher levels and refine their competitive skills.',
      icon: Trophy,
      color: 'from-purple-500 to-purple-600',
      features: ['Advanced techniques', 'Competition strategy', 'Physical conditioning', 'Mental preparation']
    },
    {
      title: 'Group Sessions',
      description: 'Train with peers in a supportive group environment that fosters teamwork and friendly competition.',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      features: ['Peer learning', 'Team building', 'Friendly competition', 'Social development']
    }
  ]

  return (
    <section id="programs" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From beginners to advanced competitors, we have programs for every fencer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center text-white mb-6`}>
                <program.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{program.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{program.description}</p>
              
              <ul className="space-y-2">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <a href="#free-trial" className="btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Fencing Journey?</h3>
            <p className="text-xl mb-6 opacity-90">
              Book your free trial class today and experience the excitement of fencing!
            </p>
            <a href="#free-trial" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Book Free Trial Class
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
