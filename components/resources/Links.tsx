export default function Links() {
  const linkCategories = [
    {
      title: 'Fencing Organizations',
      links: [
        { name: 'USA Fencing', url: 'https://www.usafencing.org', description: 'National governing body for fencing in the United States' },
        { name: 'FIE (International Fencing Federation)', url: 'https://fie.org', description: 'International governing body for fencing' },
        { name: 'Northern California Division', url: '#', description: 'Regional fencing division' }
      ]
    },
    {
      title: 'Equipment Suppliers',
      links: [
        { name: 'Absolute Fencing', url: '#', description: 'Fencing equipment and gear' },
        { name: 'Leon Paul', url: '#', description: 'Premium fencing equipment' },
        { name: 'Blue Gauntlet', url: '#', description: 'Fencing supplies and accessories' }
      ]
    },
    {
      title: 'Educational Resources',
      links: [
        { name: 'Fencing.net', url: '#', description: 'Fencing community and discussions' },
        { name: 'FencingTime', url: '#', description: 'Fencing techniques and training' },
        { name: 'Modern Fencing Magazine', url: '#', description: 'Latest news and insights in fencing' }
      ]
    }
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Useful Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {linkCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="border-b border-gray-200 dark:border-gray-600 pb-4 last:border-b-0">
                    <a 
                      href={link.url}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {link.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
