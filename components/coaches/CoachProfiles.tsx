import OptimizedImage from '@/components/OptimizedImage'

export default function CoachProfiles() {
  const losGatosCoaches = [
    {
      name: "Coach Lisa",
      title: "Club Manager",
      location: "Los Gatos",
      specialties: ["Club Management", "Stanford Varsity Teams"],
      experience: "25+ seasons",
      achievements: [
        "21 Western Conference titles",
        "3 MPSF Championships", 
        "17 top-10 NCAA finishes",
        "7 NCAA individual championships"
      ],
      bio: "Coach Lisa, the Club Manager, boasts an impressive legacy in the fencing world. With 25 seasons at the helm of the Stanford Varsity men's and women's fencing teams, her accolades speak volumes.",
      image: "/images/coaches/lisa-placeholder.jpg"
    },
    {
      name: "Coach Vakhob",
      title: "Foil Coach",
      location: "Los Gatos",
      specialties: ["Foil", "Youth Development"],
      experience: "Professional",
      achievements: [
        "Distinguished fencing coach from Uzbekistan",
        "Dedicated to shaping young champions"
      ],
      bio: "Coach Vakhob is a distinguished fencing coach hailing from the picturesque country of Uzbekistan. Born with an innate passion for the sport, he has dedicated his life to honing the skills of young fencers and shaping them into champions.",
      image: "/images/coaches/vakhob-placeholder.jpg"
    },
    {
      name: "Coach Danny",
      title: "Instructor",
      location: "Los Gatos",
      specialties: ["General Instruction"],
      experience: "Professional",
      achievements: [],
      bio: "Dedicated instructor at our Los Gatos location.",
      image: "/images/coaches/danny-placeholder.jpg"
    },
    {
      name: "Coach Nate",
      title: "Instructor", 
      location: "Los Gatos",
      specialties: ["General Instruction"],
      experience: "Professional",
      achievements: [],
      bio: "Experienced instructor at our Los Gatos location.",
      image: "/images/coaches/nate-placeholder.jpg"
    },
    {
      name: "Coach Matt",
      title: "Instructor",
      location: "Los Gatos", 
      specialties: ["General Instruction"],
      experience: "Professional",
      achievements: [],
      bio: "Professional instructor at our Los Gatos location.",
      image: "/images/coaches/matt-placeholder.jpg"
    },
    {
      name: "Coach Michael",
      title: "Instructor",
      location: "Los Gatos",
      specialties: ["General Instruction"], 
      experience: "Professional",
      achievements: [],
      bio: "Skilled instructor at our Los Gatos location.",
      image: "/images/coaches/michael-placeholder.jpg"
    },
    {
      name: "Coach James",
      title: "Instructor",
      location: "Los Gatos",
      specialties: ["General Instruction"],
      experience: "Professional", 
      achievements: [],
      bio: "Experienced instructor at our Los Gatos location.",
      image: "/images/coaches/james-placeholder.jpg"
    }
  ]

  const pleasantonCoaches = [
    {
      name: "Coach Sandro",
      title: "Foil Coach (Maestro di Scherma)",
      location: "Pleasanton",
      specialties: ["Foil", "Elite Training", "Italian Fencing Tradition"],
      experience: "30+ years",
      achievements: [
        "Maestro di Scherma certification",
        "Distinguished figure in Italian fencing",
        "Three decades of coaching experience",
        "Nurturing elite young fencers"
      ],
      bio: "Maestro Sandro (Maestro di Scherma) is a distinguished figure in the world of Italian fencing, renowned for his exceptional coaching skills and unwavering dedication to nurturing the talents of young elite fencers. With a profound passion for the sport and an illustrious career spanning over three decades, Maestro Sandro has left an indelible mark on the world of fencing.",
      image: "/images/coaches/sandro-placeholder.jpg"
    },
    {
      name: "Coach Mykola",
      title: "Instructor",
      location: "Pleasanton",
      specialties: ["General Instruction"],
      experience: "Professional",
      achievements: [],
      bio: "Professional instructor at our Pleasanton location.",
      image: "/images/coaches/mykola-placeholder.jpg"
    }
  ]

  const allCoaches = [...losGatosCoaches, ...pleasantonCoaches]

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

        {/* Los Gatos Coaches */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            🤺 Los Gatos Location
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {losGatosCoaches.map((coach, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-gray-600 dark:text-gray-400 text-4xl font-bold">
                        {coach.name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {coach.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {coach.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      📍 {coach.location}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Specialties:</h5>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {coach.achievements.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h5>
                        <ul className="space-y-1">
                          {coach.achievements.map((achievement: string, idx: number) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

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
        </div>

        {/* Pleasanton Coaches */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            🤺 Pleasanton Location
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pleasantonCoaches.map((coach, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-gray-600 dark:text-gray-400 text-4xl font-bold">
                        {coach.name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {coach.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {coach.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      📍 {coach.location}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Specialties:</h5>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {coach.achievements.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h5>
                        <ul className="space-y-1">
                          {coach.achievements.map((achievement: string, idx: number) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

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
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to Learn More?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our coaches are here to help you achieve your fencing goals, whether you're just starting out or training for competition.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule a Consultation
            </button>
            <a 
              href="https://calendly.com/lisaposthumus-pfn_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Free Trial Class
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
