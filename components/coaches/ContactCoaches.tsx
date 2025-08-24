export default function ContactCoaches() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Connect with Our Coaches
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Have questions about training, programs, or want to schedule a consultation? Our coaches are here to help.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Program Inquiries
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Questions about which program is right for you or your child? Let's discuss your goals and find the perfect fit.
            </p>
            <a 
              href="mailto:coaches@bayareafencingclub.com" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Coaches
            </a>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Private Lessons
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in one-on-one instruction? Schedule a private lesson to accelerate your progress.
            </p>
            <a 
              href="mailto:privatelessons@bayareafencingclub.com" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Book Private Lesson
            </a>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Schedule a Visit
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The best way to understand our coaching approach is to visit our club. Come observe a class or meet with our coaches to learn more about our programs.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Visit Hours:</strong> Monday-Friday 4:00 PM - 8:00 PM, Saturday 9:00 AM - 5:00 PM
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Phone:</strong> (555) 123-FENCE
            </p>
            <a 
              href="mailto:visit@bayareafencingclub.com" 
              className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Schedule Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
