export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-black min-h-screen h-[102vh] px-4 border-b border-gray-200 dark:border-gray-800 -mt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero/croppedhero.jpg')"
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10 flex items-center h-full">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white/85 mb-4">
            Bay Area Fencing Club
          </h1>
          <p className="text-2xl md:text-3xl text-white/70 font-medium">
            Your premier fencing club
          </p>
        </div>
      </div>
    </section>
  )
}
