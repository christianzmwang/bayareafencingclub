'use client'

import { useState } from 'react'

export default function CampSchedule() {
  const [selectedWeek, setSelectedWeek] = useState(1)

  const weeks = [
    {
      week: 1,
      dates: "June 15-19, 2024",
      theme: "Introduction to Fencing",
      activities: [
        "Basic footwork and stance",
        "Safety equipment introduction",
        "Fun fencing games",
        "Mini tournament"
      ]
    },
    {
      week: 2,
      dates: "June 22-26, 2024",
      theme: "Weapon Mastery",
      activities: [
        "Foil techniques",
        "Epee fundamentals",
        "Sabre basics",
        "Weapon rotation tournament"
      ]
    },
    {
      week: 3,
      dates: "June 29-July 3, 2024",
      theme: "Competition Preparation",
      activities: [
        "Advanced techniques",
        "Tournament rules",
        "Strategy development",
        "Camp championship"
      ]
    },
    {
      week: 4,
      dates: "July 6-10, 2024",
      theme: "Skills Showcase",
      activities: [
        "Skill refinement",
        "Performance preparation",
        "Parent demonstration",
        "Awards ceremony"
      ]
    }
  ]

  const dailySchedule = [
    { time: "8:00 AM", activity: "Check-in & Morning Circle" },
    { time: "8:30 AM", activity: "Warm-up & Stretching" },
    { time: "9:00 AM", activity: "Technical Training" },
    { time: "10:30 AM", activity: "Snack Break" },
    { time: "11:00 AM", activity: "Bouting Practice" },
    { time: "12:00 PM", activity: "Lunch Break" },
    { time: "1:00 PM", activity: "Game Time" },
    { time: "2:00 PM", activity: "Advanced Skills" },
    { time: "3:00 PM", activity: "Cool Down" },
    { time: "3:30 PM", activity: "Pick-up" }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Camp Schedule
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our carefully structured program ensures a perfect balance of learning, practice, and fun throughout each week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Weekly Themes */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Weekly Themes
            </h3>
            <div className="space-y-4">
              {weeks.map((week) => (
                <div
                  key={week.week}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedWeek === week.week
                      ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500'
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setSelectedWeek(week.week)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Week {week.week}: {week.theme}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {week.dates}
                    </span>
                  </div>
                  {selectedWeek === week.week && (
                    <ul className="mt-3 space-y-1">
                      {week.activities.map((activity, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <svg className="w-3 h-3 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Daily Schedule */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Daily Schedule
            </h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="space-y-4">
                {dailySchedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {item.time}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
