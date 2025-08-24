export default function Downloads() {
  const downloads = [
    {
      title: 'Beginner\'s Guide to Fencing',
      description: 'Complete guide for new fencers and their families',
      type: 'PDF',
      size: 'Coming Soon'
    },
    {
      title: 'Equipment Checklist',
      description: 'What you need for each level of fencing',
      type: 'PDF',
      size: 'Coming Soon'
    },
    {
      title: 'Competition Preparation',
      description: 'How to prepare for your first tournament',
      type: 'PDF',
      size: 'Coming Soon'
    },
    {
      title: 'Training Calendar Template',
      description: 'Plan your fencing practice schedule',
      type: 'PDF',
      size: 'Coming Soon'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Downloads
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloads.map((download, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {download.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {download.description}
                  </p>
                </div>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  {download.type}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {download.size}
                </span>
                <button className="bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-4 py-2 rounded cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
