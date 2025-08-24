import { Calendar, MapPin, Users, Trophy, Clock } from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    title: 'Bay Area Open Championship',
    date: 'March 15-17, 2024',
    location: 'San Francisco Convention Center',
    weapon: 'All Weapons',
    level: 'All Levels',
    registrationDeadline: 'March 1, 2024',
    spots: 120,
    maxSpots: 150,
    price: '$85',
    featured: true
  },
  {
    id: 2,
    title: 'Youth Foil Tournament',
    date: 'March 23, 2024',
    location: 'Bay Area Fencing Club - San Jose',
    weapon: 'Foil Only',
    level: 'U16 & U14',
    registrationDeadline: 'March 16, 2024',
    spots: 45,
    maxSpots: 60,
    price: '$45',
    featured: false
  },
  {
    id: 3,
    title: 'Epee Masters Challenge',
    date: 'April 6, 2024',
    location: 'Bay Area Fencing Club - Oakland',
    weapon: 'Epee Only',
    level: '40+ Masters',
    registrationDeadline: 'March 30, 2024',
    spots: 28,
    maxSpots: 40,
    price: '$65',
    featured: false
  },
  {
    id: 4,
    title: 'Sabre Team Competition',
    date: 'April 20, 2024',
    location: 'Bay Area Fencing Club - San Francisco',
    weapon: 'Sabre Only',
    level: 'Teams of 3',
    registrationDeadline: 'April 13, 2024',
    spots: 8,
    maxSpots: 12,
    price: '$120/team',
    featured: false
  }
]

export default function UpcomingEvents() {
  const getSpotsColor = (spots: number, maxSpots: number) => {
    if (spots === 0) return 'text-red-500'
    if (spots <= maxSpots * 0.3) return 'text-orange-500'
    return 'text-green-500'
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mark your calendar and register for these exciting fencing competitions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {upcomingEvents.map((event) => (
            <div key={event.id} className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden ${
              event.featured ? 'ring-2 ring-yellow-400 scale-105' : ''
            }`}>
              {event.featured && (
                <div className="bg-yellow-400 text-yellow-900 px-4 py-2 text-center font-semibold">
                  🏆 Featured Event
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <span className="text-2xl font-bold text-primary">
                    {event.price}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Trophy className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.weapon} • {event.level}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="w-5 h-5 mr-3 text-primary" />
                    <span>Registration closes: {event.registrationDeadline}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-gray-500" />
                    <span className={`font-semibold ${getSpotsColor(event.spots, event.maxSpots)}`}>
                      {event.spots} spots left
                    </span>
                    <span className="text-gray-500 ml-1">of {event.maxSpots}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary/90 hover:bg-primary text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                    Register Now
                  </button>
                  <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}
