'use client'

import { useState } from 'react'

const scheduleData = {
  monday: [
    { time: '9:00 AM', class: 'Beginner Foil', instructor: 'Coach Sarah', level: 'Beginner', spots: 8, maxSpots: 12 },
    { time: '4:00 PM', class: 'Intermediate Epee', instructor: 'Coach Mike', level: 'Intermediate', spots: 6, maxSpots: 10 },
    { time: '6:00 PM', class: 'Advanced Sabre', instructor: 'Coach David', level: 'Advanced', spots: 4, maxSpots: 8 },
    { time: '7:30 PM', class: 'Adult Beginner', instructor: 'Coach Emma', level: 'Beginner', spots: 10, maxSpots: 15 }
  ],
  tuesday: [
    { time: '10:00 AM', class: 'Youth Foil', instructor: 'Coach Sarah', level: 'Beginner', spots: 12, maxSpots: 15 },
    { time: '3:00 PM', class: 'Competitive Training', instructor: 'Coach Mike', level: 'Advanced', spots: 5, maxSpots: 8 },
    { time: '5:00 PM', class: 'Intermediate Sabre', instructor: 'Coach David', level: 'Intermediate', spots: 7, maxSpots: 10 },
    { time: '6:30 PM', class: 'Open Practice', instructor: 'All Coaches', level: 'All Levels', spots: 20, maxSpots: 25 }
  ],
  wednesday: [
    { time: '9:00 AM', class: 'Beginner Epee', instructor: 'Coach Emma', level: 'Beginner', spots: 9, maxSpots: 12 },
    { time: '4:00 PM', class: 'Advanced Foil', instructor: 'Coach Sarah', level: 'Advanced', spots: 6, maxSpots: 8 },
    { time: '6:00 PM', class: 'Intermediate Sabre', instructor: 'Coach David', level: 'Intermediate', spots: 8, maxSpots: 10 },
    { time: '7:30 PM', class: 'Elite Training', instructor: 'Coach Mike', level: 'Elite', spots: 3, maxSpots: 6 }
  ],
  thursday: [
    { time: '10:00 AM', class: 'Youth Epee', instructor: 'Coach Emma', level: 'Beginner', spots: 11, maxSpots: 15 },
    { time: '3:00 PM', class: 'Competitive Training', instructor: 'Coach David', level: 'Advanced', spots: 6, maxSpots: 8 },
    { time: '5:00 PM', class: 'Intermediate Foil', instructor: 'Coach Sarah', level: 'Intermediate', spots: 7, maxSpots: 10 },
    { time: '6:30 PM', class: 'Open Practice', instructor: 'All Coaches', level: 'All Levels', spots: 18, maxSpots: 25 }
  ],
  friday: [
    { time: '9:00 AM', class: 'Beginner Sabre', instructor: 'Coach David', level: 'Beginner', spots: 8, maxSpots: 12 },
    { time: '4:00 PM', class: 'Advanced Epee', instructor: 'Coach Emma', level: 'Advanced', spots: 5, maxSpots: 8 },
    { time: '6:00 PM', class: 'Intermediate Foil', instructor: 'Coach Sarah', level: 'Intermediate', spots: 9, maxSpots: 10 },
    { time: '7:30 PM', class: 'Weekend Prep', instructor: 'Coach Mike', level: 'All Levels', spots: 15, maxSpots: 20 }
  ],
  saturday: [
    { time: '9:00 AM', class: 'Youth All Weapons', instructor: 'All Coaches', level: 'Beginner-Intermediate', spots: 20, maxSpots: 25 },
    { time: '11:00 AM', class: 'Adult All Weapons', instructor: 'All Coaches', level: 'All Levels', spots: 18, maxSpots: 25 },
    { time: '2:00 PM', class: 'Competition Prep', instructor: 'Coach Mike', level: 'Advanced', spots: 8, maxSpots: 12 },
    { time: '4:00 PM', class: 'Open Practice', instructor: 'All Coaches', level: 'All Levels', spots: 25, maxSpots: 30 }
  ],
  sunday: [
    { time: '10:00 AM', class: 'Family Fencing', instructor: 'All Coaches', level: 'All Levels', spots: 22, maxSpots: 30 },
    { time: '1:00 PM', class: 'Technique Workshop', instructor: 'Coach Sarah', level: 'Intermediate-Advanced', spots: 12, maxSpots: 15 },
    { time: '3:00 PM', class: 'Open Practice', instructor: 'All Coaches', level: 'All Levels', spots: 20, maxSpots: 25 }
  ]
}

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

export default function WeeklySchedule() {
  const [selectedDay, setSelectedDay] = useState('monday')

  const getSpotsColor = (spots: number, maxSpots: number) => {
    if (spots === 0) return 'text-red-500'
    if (spots <= maxSpots * 0.3) return 'text-orange-500'
    return 'text-green-500'
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Weekly Class Schedule</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            View our complete weekly schedule and book your preferred classes
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedDay === day
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </button>
          ))}
        </div>

        {/* Schedule Display */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white p-6">
            <h3 className="text-2xl font-bold text-center">
              {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)} Schedule
            </h3>
          </div>
          
          <div className="p-6">
            {scheduleData[selectedDay as keyof typeof scheduleData].map((classItem, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 py-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-lg font-semibold text-primary">{classItem.time}</span>
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {classItem.level}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{classItem.class}</h4>
                    <p className="text-gray-600 dark:text-gray-400">with {classItem.instructor}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className={`text-lg font-semibold ${getSpotsColor(classItem.spots, classItem.maxSpots)}`}>
                        {classItem.spots} spots left
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        of {classItem.maxSpots} total
                      </p>
                    </div>
                    <button className="btn-primary px-6 py-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            All classes are 90 minutes unless otherwise noted
          </p>
          <button className="btn-secondary">
            Download Full Schedule (PDF)
          </button>
        </div>
      </div>
    </section>
  )
}
