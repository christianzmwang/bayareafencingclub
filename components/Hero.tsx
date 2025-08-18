export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 section-padding transition-colors duration-200">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Bay Area Fencing Club
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Excellence in fencing through teamwork, sportsmanship, and integrity. 
            Join us for fencing programs in Los Gatos and Pleasanton.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#free-trial" className="btn-primary text-lg px-8 py-4">
              Free Trial Class
            </a>
            <a href="#programs" className="btn-secondary text-lg px-8 py-4">
              View Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
