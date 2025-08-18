import { MapPin, Phone, ExternalLink } from 'lucide-react'

export default function Locations() {
  const locations = [
    {
      name: 'Los Gatos',
      icon: '🤺',
      address: '15445 Los Gatos Blvd.',
      city: 'Los Gatos, CA, 95032',
      phone: '(408) 384-8408',
      mapUrl: 'https://www.google.com/maps/place/15445+Los+Gatos+Blvd,+Los+Gatos,+CA+95032/@37.2448416,-121.964739,16.33z/data=!4m6!3m5!1s0x808e35b9be36b7d1:0x5369839749e2a705!8m2!3d37.2445974!4d-121.9604013!16s%2Fg%2F11b8v5lqns?entry=ttu'
    },
    {
      name: 'Pleasanton',
      icon: '⚔️',
      address: '5870 Stoneridge Dr, Suite 6.',
      city: 'Pleasanton, CA, 94588',
      phone: '(925) 236-0280',
      mapUrl: 'https://www.google.com/maps/place/Bay+Area+Fencing+Club+Pleasanton/@37.6904743,-121.9024477,17z/data=!3m2!4b1!5s0x808feda7df4f3e6f:0x2c8ca46338b737a5!4m6!3m5!1s0x808fe900449fe049:0x78102f851994ce56!8m2!3d37.6904702!4d-121.8975822!16s%2Fg%2F11vspnc5t%5F?entry=ttu'
    }
  ]

  return (
    <section id="locations" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Locations</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Visit us at either of our convenient Bay Area locations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{location.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{location.name}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{location.address}</p>
                    <p className="text-gray-600 dark:text-gray-400">{location.city}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a 
                    href={`tel:${location.phone.replace(/[^\d]/g, '')}`}
                    className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {location.phone}
                  </a>
                </div>
                
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-blue-700 transition-colors duration-200"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
