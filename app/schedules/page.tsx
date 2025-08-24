import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SchedulesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-black h-[25vh] relative px-4 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-left z-10 relative">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Schedules
            </h1>
          </div>
        </div>
      </section>

      {/* Los Gatos Location */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            LOS GATOS LOCATION <span className="text-lg font-normal">(Starts Aug 4th, 2025)</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pre-Competitive Programs */}
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Little Pirates (ages 5-6)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Monday 4:20-5:20</li>
                  <li>Friday: 4:20-5:20</li>
                  <li>Saturday: 9:00-10:00</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Beginning (ages 7-10)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Wednesday 4:20-5:20</li>
                  <li>Thursday 4:20-5:20</li>
                  <li>Saturday 10:00-11:00</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Beginning (ages 11+)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Tuesday: 4:20-5:20</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intermediate Epee (2 days per week)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Monday/Wednesday: 5:30 - 7:00</li>
                  <li>Tuesday/Thursday: 5:30 - 7:00</li>
                  <li>Saturday: 11:00-12:30</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intermediate Saber (2 days per week)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Tuesday/Thursday: 5:30-7:00</li>
                </ul>
              </div>
            </div>

            {/* Competitive Programs */}
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intermediate Foil (2 days per week)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Monday/Wednesday: 4:00-5:30</li>
                  <li>Tuesday/Thursday: 4:00-5:30</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intermediate Foil PLUS (3 days per week)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Monday/Wednesday/Friday: 5:30-7:00</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Competitive Youth (3 days per week)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Monday/Wednesday/Friday: 5:30-7:00</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Elite Programs (by invitation only)</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div>
                    <p className="font-medium">Competitive/Elite Foil</p>
                    <p className="text-sm">Please contact front desk for schedule - 4 days a week of training</p>
                  </div>
                  <div>
                    <p className="font-medium">Competitive/Elite Saber</p>
                    <p className="text-sm">Please contact front desk for schedule - 4 days a week of training</p>
                  </div>
                  <div>
                    <p className="font-medium">Competitive/Elite Epee</p>
                    <p className="text-sm">Please contact front desk for schedule - 3 days a week of training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pleasanton Location */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            PLEASANTON LOCATION
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pre-Competitive Programs */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Little Pirates (ages 5-6)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Tuesday 5:00-6:00</li>
                  <li>Saturday 2:30-3:30</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Beginning (ages 7-10)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Tuesday 4:00-5:00</li>
                  <li>Wednesday 4:00-5:00</li>
                  <li>Thursday 4:00-5:00</li>
                  <li>Friday 4:00-5:00</li>
                  <li>Saturday 9:00-10:00</li>
                  <li>Saturday 1:00-2:00</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Beginning (ages 11+)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Monday 4:00-5:00</li>
                  <li>Saturday 11:00-12:00</li>
                </ul>
              </div>
            </div>

            {/* Intermediate & Competitive Programs */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Pre-Intermediate</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Wednesday 6:00-7:30</li>
                  <li>Friday 6:00-7:30</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intermediate Foil</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Tuesday/Thursday 5:00-6:30</li>
                  <li>Saturday 2:00-3:30</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intermediate Foil (ages 11+)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Monday 6:00-7:30</li>
                  <li>Thursday 6:00-7:30</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Competitive Foil</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This program is by invitation only. Please contact the office for an evaluation: 
                  <a href="tel:925-236-0280" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                    (925)236-0280
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holidays */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Holidays
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-8 border border-red-200 dark:border-red-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Bay Area Fencing Club is closed on the following days to observe the national holidays:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
              <ul className="space-y-2">
                <li>• New Year's Day 1/1</li>
                <li>• Memorial Day</li>
                <li>• Independence Day/Weekend</li>
                <li>• Labor Day</li>
              </ul>
              <ul className="space-y-2">
                <li>• Thanksgiving Day/Weekend</li>
                <li>• Christmas Eve 12/24</li>
                <li>• Christmas Day 12/25</li>
                <li>• New Year's Eve 12/31</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
