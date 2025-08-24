import OptimizedImage from '@/components/OptimizedImage'

export default function CoachProfiles() {
  const coaches = [
    {
      name: "Sarah Mitchell",
      title: "Head Coach & Director",
      specialties: ["Foil", "Epee", "Youth Development"],
      experience: "15+ years",
      achievements: [
        "Former Olympic Team Member",
        "NCAA National Champion",
        "USFA Certified Instructor"
      ],
      bio: "Sarah brings world-class expertise and a passion for developing young fencers. Her patient teaching style and competitive background make her an exceptional mentor.",
      image: "/images/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      title: "Senior Instructor",
      specialties: ["Sabre", "Competitive Training"],
      experience: "12+ years",
      achievements: [
        "World Cup Medalist",
        "National Team Coach",
        "USFA Master Instructor"
      ],
      bio: "Michael's dynamic coaching style focuses on tactical development and mental preparation for competitive success.",
      image: "/images/team/michael.jpg"
    },
    {
      name: "Emma Rodriguez",
      title: "Youth Program Coordinator",
      specialties: ["Beginner Programs", "Kids Classes"],
      experience: "8+ years",
      achievements: [
        "Division I All-American",
        "Youth Development Specialist",
        "First Aid Certified"
      ],
      bio: "Emma's enthusiasm and creativity make learning fencing fun and engaging for our youngest students.",
      image: "/images/team/emma.jpg"
    },
    {
      name: "David Thompson",
      title: "Assistant Coach",
      specialties: ["Epee", "Adult Programs"],
      experience: "10+ years",
      achievements: [
        "Regional Champion",
        "USFA Certified Coach",
        "Tournament Director"
      ],
      bio: "David's analytical approach and attention to detail help students master the technical aspects of fencing.",
      image: "/images/team/david.jpg"
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Coaching Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our experienced coaches combine world-class expertise with a passion for teaching, ensuring every student receives personalized instruction tailored to their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-400 text-4xl font-bold">
                      {coach.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {coach.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {coach.title}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {coach.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {coach.bio}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {coach.experience} experience
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                      Book Lesson
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to Learn More?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our coaches are here to help you achieve your fencing goals, whether you're just starting out or training for competition.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
