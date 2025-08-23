import { Heart, Brain, Users, Target, Award, Clock } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Physical Fitness',
    description: 'Improve cardiovascular health, strength, and flexibility through dynamic fencing movements.'
  },
  {
    icon: Brain,
    title: 'Mental Agility',
    description: 'Enhance strategic thinking, quick decision-making, and mental focus.'
  },
  {
    icon: Users,
    title: 'Social Skills',
    description: 'Build friendships, teamwork, and sportsmanship in a supportive community.'
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Learn to set and achieve personal and competitive goals in fencing.'
  },
  {
    icon: Award,
    title: 'Achievement',
    description: 'Earn recognition through skill development and competitive success.'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Develop discipline and time management skills through regular training.'
  }
]

export default function ProgramBenefits() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Programs?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our fencing programs offer comprehensive benefits that extend far beyond the sport itself
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Fencing Journey?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of fencers who have discovered the joy and benefits of this elegant sport
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary">
                Start Today
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
