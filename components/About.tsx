export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About</h2>
          <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 transition-colors duration-200">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Success never comes to those who quit and our goal is to help you reach yours. 
              <span className="block mt-2 font-semibold text-primary dark:text-blue-400">Engarde, Allez!</span>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              The Bay Area Fencing Club is committed to the growth and development of young people through the sport of Fencing.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              We recognize the importance of fostering excellence in our athletes on and off the strip, 
              supporting the whole athlete; academically, socially, and athletically. Through teaching 
              the values of integrity, sportsmanship, and resilience, we strive for excellence both 
              individually and as a team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
