export default function ResourceCategories() {
  const categories = [
    {
      title: 'Equipment Guides',
      description: 'Learn about fencing equipment, sizing, and purchasing recommendations.',
      items: ['Weapon Selection', 'Protective Gear', 'Maintenance Tips']
    },
    {
      title: 'Training Materials',
      description: 'Resources to supplement your training and improve your technique.',
      items: ['Technique Videos', 'Footwork Drills', 'Strategy Guides']
    },
    {
      title: 'Competition Info',
      description: 'Everything you need to know about fencing competitions.',
      items: ['Tournament Rules', 'Registration Process', 'Competition Calendar']
    },
    {
      title: 'Parent Resources',
      description: 'Information for parents new to the fencing community.',
      items: ['Getting Started', 'What to Expect', 'Support Guidelines']
    }
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Resource Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 dark:text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {item} (Coming Soon)
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
