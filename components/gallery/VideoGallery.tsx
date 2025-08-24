export default function VideoGallery() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Video Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder video cards */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-200 dark:bg-gray-700 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-400 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-gray-500 dark:text-gray-400">Video {item}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            Video gallery coming soon! We're preparing exciting footage from our competitions and training sessions.
          </p>
        </div>
      </div>
    </section>
  )
}
