export default function PhotoGallery() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder photo cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-200 dark:bg-gray-700 aspect-video rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Photo {item}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            Photo gallery coming soon! We're working on uploading our collection of amazing fencing moments.
          </p>
        </div>
      </div>
    </section>
  )
}
