export default function ShareGallery() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Share Your Photos
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Have photos from our events? We'd love to feature them in our gallery!
        </p>
        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Submit Your Photos
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Email your photos to us at <a href="mailto:gallery@bayareafencingclub.com" className="text-blue-600 dark:text-blue-400 hover:underline">gallery@bayareafencingclub.com</a>
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>• Photos should be high resolution (at least 1920x1080)</p>
            <p>• Please include event details and date</p>
            <p>• By submitting, you grant permission for use on our website</p>
          </div>
        </div>
      </div>
    </section>
  )
}
