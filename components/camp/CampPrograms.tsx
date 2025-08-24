import OptimizedImage from '@/components/OptimizedImage'

export default function CampPrograms() {
  const programs = [
    {
      title: "Little Pirates (Ages 5-7)",
      description: "Introduction to fencing through fun games and activities. Focus on coordination, basic movements, and safety.",
      features: [
        "Fun games and activities",
        "Basic coordination skills",
        "Safety introduction",
        "Small group sizes"
      ],
      image: "/images/programs/LilPirates.webp"
    },
    {
      title: "Young Fencers (Ages 8-12)",
      description: "Learn fundamental fencing techniques with proper equipment and structured lessons.",
      features: [
        "Proper fencing technique",
        "Equipment introduction",
        "Basic competition rules",
        "Skill development"
      ],
      image: "/images/programs/2022.jpg"
    },
    {
      title: "Teen Academy (Ages 13-17)",
      description: "Advanced training for competitive fencing with tournament preparation and advanced tactics.",
      features: [
        "Advanced techniques",
        "Tournament preparation",
        "Strategy and tactics",
        "Competitive experience"
      ],
      image: "/images/programs/intermediatefencing.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Camp Programs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our summer camp offers specialized programs for different age groups, ensuring each camper receives age-appropriate instruction and has a fantastic time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 relative">
                <OptimizedImage
                  src={program.image}
                  alt={program.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
