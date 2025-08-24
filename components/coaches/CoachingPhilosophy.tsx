export default function CoachingPhilosophy() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Our Coaching Philosophy
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Building Champions, Building Character
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At Bay Area Fencing Club, we believe that fencing is more than just a sport—it's a path to personal growth, 
              discipline, and excellence. Our coaching philosophy centers on developing the whole athlete.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Technical Excellence</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We focus on building strong fundamentals and advanced techniques through structured, progressive training.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Mental Toughness</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We develop strategic thinking, quick decision-making, and the mental resilience needed for competition.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Character Development</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We instill values of respect, sportsmanship, and perseverance that extend far beyond the fencing strip.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Our Training Approach
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Individualized Instruction</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Every fencer has unique strengths and areas for improvement. We tailor our coaching to each athlete's needs.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Progressive Development</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  From beginner basics to advanced competitive strategies, we have a clear pathway for growth.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Positive Environment</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We foster a supportive, encouraging atmosphere where athletes can take risks and learn from mistakes.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Continuous Learning</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Our coaches stay current with the latest techniques and teaching methods in the fencing world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
