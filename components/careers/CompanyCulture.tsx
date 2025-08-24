import OptimizedImage from '@/components/OptimizedImage'

export default function CompanyCulture() {
  const values = [
    {
      title: "Excellence in Education",
      description: "We strive to provide the highest quality fencing instruction and create an environment where students can reach their full potential.",
      icon: "🎯"
    },
    {
      title: "Inclusive Community",
      description: "We welcome fencers of all backgrounds, ages, and skill levels, fostering a supportive and diverse fencing community.",
      icon: "🤝"
    },
    {
      title: "Continuous Growth",
      description: "We encourage our team members to pursue professional development and stay current with the latest coaching techniques.",
      icon: "📈"
    },
    {
      title: "Safety First",
      description: "The safety and well-being of our students and staff is our top priority in everything we do.",
      icon: "🛡️"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Head Coach",
      years: "3 years",
      quote: "Working here has been incredibly rewarding. The supportive environment allows me to focus on what I love most - teaching and developing young fencers.",
      image: "/images/team/sarah.jpg"
    },
    {
      name: "Mike Chen",
      role: "Youth Instructor",
      years: "2 years",
      quote: "The collaborative culture here is amazing. We all work together to ensure every student has the best possible experience.",
      image: "/images/team/mike.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Culture & Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're more than just a fencing club - we're a community united by our passion for the sport and commitment to excellence.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Team Says
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full flex-shrink-0 mr-4 flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-400 text-lg font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.years} with the team
                    </p>
                  </div>
                </div>
                <blockquote className="text-gray-600 dark:text-gray-400 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Work Environment */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Why You'll Love Working Here
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Collaborative Team
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Work with passionate professionals who support each other's growth
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Impact & Growth
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Make a real difference in students' lives while advancing your career
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Work-Life Balance
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Flexible scheduling and supportive policies for a healthy balance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
