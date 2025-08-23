import { Target, Users, Trophy, BookOpen, Star, Zap } from 'lucide-react'

const programs = [
  {
    icon: Target,
    title: 'Beginner Programs',
    description: 'Perfect for those new to fencing. Learn basic techniques, footwork, and safety.',
    duration: '8 weeks',
    ageGroup: '8+ years',
    level: 'Beginner'
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Learn alongside peers in structured group sessions with certified coaches.',
    duration: 'Ongoing',
    ageGroup: 'All ages',
    level: 'Beginner-Intermediate'
  },
  {
    icon: Trophy,
    title: 'Competitive Training',
    description: 'Advanced training for serious competitors preparing for tournaments.',
    duration: 'Year-round',
    ageGroup: '12+ years',
    level: 'Advanced'
  },
  {
    icon: BookOpen,
    title: 'Private Lessons',
    description: 'One-on-one instruction tailored to your specific needs and goals.',
    duration: 'Flexible',
    ageGroup: 'All ages',
    level: 'All levels'
  },
  {
    icon: Star,
    title: 'Elite Performance',
    description: 'Intensive training for national and international competitors.',
    duration: 'Year-round',
    ageGroup: '14+ years',
    level: 'Elite'
  },
  {
    icon: Zap,
    title: 'Summer Intensive',
    description: 'Accelerated learning during summer months with extended training hours.',
    duration: '6-8 weeks',
    ageGroup: '10+ years',
    level: 'Intermediate-Advanced'
  }
]

export default function ProgramCategories() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Program Categories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive range of fencing programs designed to meet every skill level and goal
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <program.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
              <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">{program.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Age Group:</span>
                  <span className="font-medium">{program.ageGroup}</span>
                </div>
                <div className="flex justify-between">
                  <span>Level:</span>
                  <span className="font-medium">{program.level}</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
