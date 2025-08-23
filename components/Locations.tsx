import { MapPin, Phone, ExternalLink } from 'lucide-react'

export default function Locations() {
  const locations = [
    {
      name: 'Los Gatos',
      address: '123 Main Street, Los Gatos, CA 95030',
      phone: '(408) 384-8408',
      email: 'losgatos@bayareafencing.club',
      mapUrl: 'https://maps.app.goo.gl/ZgeER5N5HxWeTjEo7'
    },
    {
      name: 'Pleasanton',
      address: '456 Oak Avenue, Pleasanton, CA 94566',
      phone: '(925) 236-0280',
      email: 'pleasanton@bayareafencing.club',
      mapUrl: 'https://maps.app.goo.gl/oJmJh9yLd13a2Bzw7'
    }
  ]

  return (
    <section id="locations" className="py-20 px-4 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Locations
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Visit us at either of our convenient Bay Area locations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {location.name}
              </h3>
              <div className="space-y-3 mb-6">
                <p className="text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="text-primary dark:text-primary-light mr-2">📍</span>
                  {location.address}
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="text-primary dark:text-primary-light mr-2">📞</span>
                  {location.phone}
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="text-primary dark:text-primary-light mr-2">✉️</span>
                  {location.email}
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 font-semibold transition-colors duration-200 flex-1 text-center"
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${location.phone}`}
                  className="border-2 border-primary text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white px-6 py-3 font-semibold transition-all duration-200 flex-1 text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
