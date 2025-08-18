export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Excellence in{' '}
          <span className="text-primary dark:text-primary-light">Fencing</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Join the Bay Area's premier fencing club. Develop skills, build character, and compete at the highest levels through teamwork, sportsmanship, and integrity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg">
            Start Your Journey
          </button>
          <button className="border-2 border-primary text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
