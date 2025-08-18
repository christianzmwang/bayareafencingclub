export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Our Club
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Building Champions Since 1995
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              The Bay Area Fencing Club has been at the forefront of fencing excellence for over 25 years. 
              We've trained countless champions while instilling the values of discipline, respect, and sportsmanship.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Our club serves fencers of all ages and skill levels, from beginners taking their first steps 
              to elite competitors representing our region in national and international competitions.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary dark:text-primary-light">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary dark:text-primary-light">25+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary dark:text-primary-light">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Champions</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-8 rounded-2xl">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To develop exceptional fencers through comprehensive training programs that emphasize technical excellence, 
              mental toughness, and character development. We believe fencing is more than a sport—it's a way of life 
              that builds confidence, discipline, and leadership skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
