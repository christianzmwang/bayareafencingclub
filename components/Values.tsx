export default function Values() {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from technical skills to character development.',
      icon: '🏆'
    },
    {
      title: 'Teamwork',
      description: 'Fencing may be individual, but we succeed as a team, supporting and encouraging each other.',
      icon: '🤝'
    },
    {
      title: 'Sportsmanship',
      description: 'We compete with honor, respect our opponents, and celebrate both victory and defeat with grace.',
      icon: '⚔️'
    },
    {
      title: 'Integrity',
      description: 'We conduct ourselves with honesty, fairness, and moral uprightness in all situations.',
      icon: '🛡️'
    }
  ]

  return (
    <section id="values" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
