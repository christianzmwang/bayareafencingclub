export default function ProgramsHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fencing Programs
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-light">
            From beginners to elite competitors, discover the perfect fencing program for your journey
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary bg-white text-primary hover:bg-gray-100">
              View All Programs
            </button>
            <button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
              Schedule a Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
