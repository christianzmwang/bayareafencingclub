export default function ContactSupport() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Need Help?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Can't find what you're looking for? Our team is here to help you with any questions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              General Questions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For general inquiries about our programs, schedules, or club information.
            </p>
            <a 
              href="mailto:info@bayareafencingclub.com" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Us
            </a>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Technical Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Having trouble with online registration or need website assistance?
            </p>
            <a 
              href="mailto:support@bayareafencingclub.com" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Support
            </a>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Resource Requests
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Looking for a specific resource that's not available yet? Let us know what you need and we'll prioritize it.
          </p>
        </div>
      </div>
    </section>
  )
}
