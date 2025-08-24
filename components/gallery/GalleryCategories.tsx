export default function GalleryCategories() {
  const categories = [
    { name: 'Competitions', count: 'Coming Soon' },
    { name: 'Training Sessions', count: 'Coming Soon' },
    { name: 'Special Events', count: 'Coming Soon' },
    { name: 'Award Ceremonies', count: 'Coming Soon' },
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {category.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
