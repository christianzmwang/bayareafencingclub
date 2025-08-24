import { Calendar, MapPin, Trophy, ExternalLink } from 'lucide-react'

export default function CompetitionSchedule() {
  const competitions = [
    { date: "August 30 - Sept 1", event: "Fortune Fencing", location: "Ontario, CA", type: "ROC, RJCC, RYC" },
    { date: "Sept 20 - 21", event: "BladeRunner", location: "La Jolla, CA", type: "ROC, RJC" },
    { date: "Oct 3 - 6", event: "NAC", location: "Salt Lake City, UT", type: "Div I, Junior, Cadet" },
    { date: "Oct 10 - 12", event: "Little Musketeers", location: "Torrance, CA", type: "RYC, RJCC, Y8" },
    { date: "Oct 31 - Nov 2", event: "AFM Super Reg.", location: "Santa Clara", type: "SYC, ROC, RJCC" },
    { date: "Nov 14 - 17", event: "NAC", location: "Fort Worth, TX", type: "Div I, Cadet, Y14" },
    { date: "Nov 22 - 23", event: "Cozmx Fall", location: "McCellan Park, CA", type: "RJCC, RYC" },
    { date: "Dec 5 - 7", event: "Nick Itkin Cup", location: "Palm Springs, CA", type: "RJCC, RYC" },
    { date: "Dec 12 - 14", event: "BBFC", location: "Las Vegas", type: "RYC/Y8" },
    { date: "Jan 2 - 5", event: "Treasure Island", location: "San Francisco, CA", type: "RYC, Y8" },
    { date: "Jan 9 - 12", event: "Junior OLYMPICS", location: "Kansas City, MO", type: "Junior, Cadet" },
    { date: "Jan 17 - 19", event: "Mary Rafanelli", location: "Pasadena, CA", type: "RJCC, RYC" },
    { date: "Feb 27 - Mar 3", event: "Sword in Stone", location: "Torrance, CA", type: "RYC, RJCC" },
    { date: "Mar 6 - 9", event: "NAC", location: "Cleveland, OH", type: "Y14, 12, 10 Div II" },
    { date: "Mar 14 - 15", event: "Fortune Fencing", location: "Ontario, CA", type: "RYC, RJCC" },
    { date: "Mar 21 - 23", event: "Bay Area RJCC", location: "TBD", type: "RJCC" },
    { date: "April 3 - 5", event: "Challenge by the Bay", location: "Davis, CA", type: "RYC, RCC" },
    { date: "May 1 - 3", event: "Fortune Fencing", location: "Anaheim, CA", type: "SYC, RCC" },
    { date: "May 9 - 10", event: "Collegiate Cup", location: "La Jolla, CA", type: "RJCC" },
    { date: "June/July", event: "Summer Nationals", location: "Portland, OR", type: "ALL EVENTS" },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Projected Competitions for Next Season 2025-26
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              These are the Regional/National competitions we intend to send a coach. If a competition is poorly attended we may not send one. Strip coaching fees will apply to all who attend. (National calendar is not yet available)
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              You are always encouraged to attend local tournaments on your own as much as you can. Local events are added throughout the year and the schedule is always changing. Schedules and registration can be found on{' '}
              <a 
                href="https://askfred.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
              >
                ASKFRED.NET <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
            <thead className="bg-yellow-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Date
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <Trophy className="w-5 h-5 mr-2" />
                    Event Name
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Location
                  </div>
                </th>
                <th className="px-6 py-4 text-left">Type of Event</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {competitions.map((comp, index) => (
                <tr 
                  key={index}
                  className={`${
                    index % 2 === 0 
                      ? 'bg-gray-50 dark:bg-gray-800' 
                      : 'bg-white dark:bg-gray-900'
                  } hover:bg-yellow-50 dark:hover:bg-gray-700 transition-colors`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {comp.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 font-semibold">
                    {comp.event}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    {comp.location}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-medium">
                      {comp.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-700 dark:text-gray-300">
            It might be helpful to check out{' '}
            <a 
              href="https://www.usafencing.org/age-classification-eligibility" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
            >
              Age and Classification Eligibility <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            !
          </p>
        </div>
      </div>
    </section>
  )
}
