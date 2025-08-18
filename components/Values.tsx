export default function Values() {
  const values = [
    {
      title: 'Teamwork',
      description: 'Working together to achieve common goals and support each other\'s growth.',
      icon: '🤝',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Sportsmanship',
      description: 'Displaying respect, fairness, and graciousness in victory and defeat.',
      icon: '🏆',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Integrity',
      description: 'Maintaining honesty, ethical behavior, and strong moral principles.',
      icon: '⚖️',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These principles guide everything we do at Bay Area Fencing Club
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-3xl`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
