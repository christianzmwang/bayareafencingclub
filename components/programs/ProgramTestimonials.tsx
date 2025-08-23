import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    age: '16',
    level: 'Advanced',
    program: 'Competitive Training',
    content: 'The competitive training program has transformed my fencing skills. The coaches are incredibly knowledgeable and supportive.',
    rating: 5,
    image: '/images/team/placeholder-1.jpg'
  },
  {
    name: 'Michael Rodriguez',
    age: '12',
    level: 'Intermediate',
    program: 'Group Classes',
    content: 'I love coming to fencing class every week. The instructors make learning fun and I\'ve made great friends here.',
    rating: 5,
    image: '/images/team/placeholder-2.jpg'
  },
  {
    name: 'Emma Thompson',
    age: '28',
    level: 'Beginner',
    program: 'Starter Program',
    content: 'As an adult beginner, I was nervous about starting fencing, but the program is perfectly designed for all skill levels.',
    rating: 5,
    image: '/images/team/placeholder-3.jpg'
  },
  {
    name: 'David Kim',
    age: '14',
    level: 'Elite',
    program: 'Elite Performance',
    content: 'The elite program has helped me compete at national level. The personalized coaching is exceptional.',
    rating: 5,
    image: '/images/team/placeholder-4.jpg'
  }
]

export default function ProgramTestimonials() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from our students about their experience with our fencing programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.age} years • {testimonial.level} • {testimonial.program}
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Be part of our growing community of successful fencers
            </p>
            <button className="btn-primary">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
