export default function Values() {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from technical skills to character development.'
    },
    {
      title: 'Teamwork',
      description: 'Fencing may be individual, but we succeed as a team, supporting and encouraging each other.'
    },
    {
      title: 'Sportsmanship',
      description: 'We compete with honor, respect our opponents, and celebrate both victory and defeat with grace.'
    },
    {
      title: 'Integrity',
      description: 'We conduct ourselves with honesty, fairness, and moral uprightness in all situations.'
    }
  ]

  return (
    <section id="values" className="py-20 px-4 bg-red-700 dark:bg-red-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-6">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white/40 dark:bg-gray-900/40 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:border-gray-800">
              <h3 className="text-xl font-bold text-white dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-white/80 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
