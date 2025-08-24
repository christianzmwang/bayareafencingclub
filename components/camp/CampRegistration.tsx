'use client'

import { useState } from 'react'

export default function CampRegistration() {
  const [selectedWeeks, setSelectedWeeks] = useState<number[]>([])

  const weeks = [
    { id: 1, dates: "June 15-19, 2024", price: 295, available: true },
    { id: 2, dates: "June 22-26, 2024", price: 295, available: true },
    { id: 3, dates: "June 29-July 3, 2024", price: 295, available: true },
    { id: 4, dates: "July 6-10, 2024", price: 295, available: false }
  ]

  const toggleWeek = (weekId: number) => {
    setSelectedWeeks(prev => 
      prev.includes(weekId) 
        ? prev.filter(id => id !== weekId)
        : [...prev, weekId]
    )
  }

  const totalPrice = selectedWeeks.reduce((total, weekId) => {
    const week = weeks.find(w => w.id === weekId)
    return total + (week?.price || 0)
  }, 0)

  const discount = selectedWeeks.length >= 3 ? totalPrice * 0.1 : 0
  const finalPrice = totalPrice - discount

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Registration & Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Secure your spot in our exciting summer camp. Register for multiple weeks and save!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Week Selection */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Select Weeks
            </h3>
            <div className="space-y-4">
              {weeks.map((week) => (
                <div
                  key={week.id}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    !week.available
                      ? 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 opacity-50'
                      : selectedWeeks.includes(week.id)
                      ? 'bg-blue-50 dark:bg-blue-900 border-blue-500'
                      : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-400 cursor-pointer'
                  }`}
                  onClick={() => week.available && toggleWeek(week.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Week {week.id}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {week.dates}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        ${week.price}
                      </p>
                      {!week.available && (
                        <p className="text-sm text-red-500">Sold Out</p>
                      )}
                    </div>
                  </div>
                  {week.available && (
                    <div className="mt-2">
                      <input
                        type="checkbox"
                        checked={selectedWeeks.includes(week.id)}
                        onChange={() => toggleWeek(week.id)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Select this week
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {selectedWeeks.length >= 3 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  🎉 Multi-week discount: Save 10% when registering for 3+ weeks!
                </p>
              </div>
            )}
          </div>

          {/* Registration Summary */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Registration Summary
            </h3>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              {selectedWeeks.length > 0 ? (
                <>
                  <div className="space-y-3 mb-6">
                    {selectedWeeks.map(weekId => {
                      const week = weeks.find(w => w.id === weekId)
                      return (
                        <div key={weekId} className="flex justify-between items-center">
                          <span className="text-gray-700 dark:text-gray-300">
                            Week {week?.id} ({week?.dates})
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            ${week?.price}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300">Subtotal:</span>
                      <span className="font-medium">${totalPrice}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between items-center mb-2 text-green-600 dark:text-green-400">
                        <span>Multi-week discount (10%):</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center text-xl font-bold text-gray-900 dark:text-white">
                      <span>Total:</span>
                      <span>${finalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                    Proceed to Registration
                  </button>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Select weeks to see pricing
                  </p>
                  <div className="text-gray-400 dark:text-gray-500">
                    <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              <h4 className="font-semibold mb-2">What's Included:</h4>
              <ul className="space-y-1">
                <li>• All equipment provided</li>
                <li>• Professional instruction</li>
                <li>• Daily snacks</li>
                <li>• Camp t-shirt</li>
                <li>• End-of-week certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
