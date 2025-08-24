import { ExternalLink } from 'lucide-react'

export default function CompetitionTypes() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Types of Competitions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Local Competitions */}
          <div className="bg-white dark:bg-gray-800 shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-green-500 mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Local</h3>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                For EVERYONE – We always recommend Local competition
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Easy to get to, single-day events
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Usually smaller competitions
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Events listed on {' '}
                <a 
                  href="https://www.askfred.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                >
                  AskFred.net <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Need equipment in good working order, but no weapons check
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Less expensive than Regional/National events
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Can get rated but cannot qualify for Summer Nationals
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Bring 2+ weapons and body cords (no vendor available)
              </li>
            </ul>
          </div>

          {/* Regional Competitions */}
          <div className="bg-white dark:bg-gray-800 shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-blue-500 mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Regional</h3>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                More expensive than local events
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Required weapons check – all equipment must be verified
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Vendors usually available for equipment issues
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Can get rated and qualify for Summer Nationals
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                RYC (Regional Youth Circuit) and SYC (Super Youth Circuit)
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Region #4 covers 6 states
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Register on {' '}
                <a 
                  href="https://member.usafencing.org/search/tournaments" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                >
                  USA Fencing <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* National Competitions */}
          <div className="bg-white dark:bg-gray-800 shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-red-500 mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">National</h3>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Only a handful of National events (NAC)
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Can get rated, qualify for nationals and Olympics
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Most expensive competitions
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Recommended for advanced group only
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Exception: When held in local Bay Area
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Often require travel
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Register on USA Fencing national website
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
