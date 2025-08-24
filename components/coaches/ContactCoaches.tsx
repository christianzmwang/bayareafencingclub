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
              🤺 Los Gatos Location
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Meet our experienced coaches including Coach Lisa (Club Manager), Coach Vakhob (Foil Coach), and our dedicated instructional team.
            </p>
            <a 
              href="mailto:coaches@bayareafencingclub.com" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Los Gatos Team
            </a>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              🤺 Pleasanton Location
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Train with Maestro Sandro (Maestro di Scherma) and Coach Mykola, bringing traditional Italian fencing excellence to your training.
            </p>
            <a 
              href="mailto:coaches@bayareafencingclub.com" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Contact Pleasanton Team
            </a>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Try a Free Trial Class
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The best way to experience our coaching approach is to join us for a free trial class. Meet our coaches and see if fencing is right for you!
          </p>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Available at both locations:</strong> Los Gatos and Pleasanton
            </p>
            <a 
              href="https://calendly.com/lisaposthumus-pfn_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Schedule Free Trial Class
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
