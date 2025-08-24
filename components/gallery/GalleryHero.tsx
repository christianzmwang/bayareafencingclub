export default function GalleryHero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-black min-h-[calc(100vh-4rem)] relative px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center z-10 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore moments from our fencing community - competitions, training sessions, and special events.
          </p>
        </div>
      </div>
    </section>
  )
}
