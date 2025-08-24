export default function CoachesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="text-6xl mb-4">🤺</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Our Coaches
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Meet our dedicated team of professional fencing instructors at our Los Gatos and Pleasanton locations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Meet the Team
          </button>
          <a 
            href="https://calendly.com/lisaposthumus-pfn_"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-lg transition-all duration-200 inline-block"
          >
            Free Trial Class
          </a>
        </div>
      </div>
    </section>
  )
}
