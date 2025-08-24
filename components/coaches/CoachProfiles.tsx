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
        "25 seasons at Stanford Varsity men's and women's fencing teams",
        "21 Western Conference titles", 
        "3 MPSF Championships",
        "17 top-10 NCAA finishes",
        "7 NCAA individual championships"
      ],
      bio: "Coach Lisa, the Club Manager, boasts an impressive legacy in the fencing world. With 25 seasons at the helm of the Stanford Varsity men's and women's fencing teams, her accolades speak volumes. Under her guidance, Stanford has clinched 21 Western Conference titles, 3 MPSF Championships, secured 17 top-10 NCAA finishes, and celebrated seven NCAA individual championships.",
      image: "/images/coaches/lisa.jpg"
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
      image: "/images/coaches/vakhob.jpg"
    },
    {
      name: "Coach Danny",
      title: "Saber Coach", 
      location: "Los Gatos",
      specialties: ["Saber", "Competitive Training"],
      experience: "Professional",
      achievements: [
        "USA Junior World Team member",
        "Gold medal at 15th Maccabiah Games in Israel",
        "Started fencing in high school freshman year"
      ],
      bio: "Coach Dan embarked on his fencing journey during his high school freshman year, and his passion has been unwavering since. Notably, he achieved the honor of representing the USA as a member of the Junior World Team and clinched a gold medal at the prestigious 15th Maccabiah Games in Israel.",
      image: "/images/coaches/danny.jpg"
    },
    {
      name: "Coach Nate",
      title: "Youth Director",
      location: "Los Gatos",
      specialties: ["Youth Programs", "Competitive Training"],
      experience: "Professional",
      achievements: [
        "Gold and silver medals at European Maccabiah Games in Berlin",
        "Gold and silver medals at Maccabiah Games in Tel Aviv, Israel",
        "Trained under Olympic Coach George Pogosov",
        "Started competitive fencing at age 10"
      ],
      bio: "Nathan Milgram, hailing from the Bay Area, embraced the world of competitive fencing from the tender age of ten. His initial training took place at The Cardinal Fencing Club, where he had the privilege of learning from renowned mentors such as Olympic Coach George Pogosov, Sasha Lepeshinski, and Grigory Kirienko. Milgram's dedication and talent shone through as he secured both gold and silver medals while competing in the European Maccabiah Games in Berlin and the Maccabiah Games in Tel Aviv, Israel.",
      image: "/images/coaches/nate.jpg"
    },
    {
      name: "Coach Matt",
      title: "Epee Coach",
      location: "Los Gatos",
      specialties: ["Epee", "Youth Development"],
      experience: "Professional",
      achievements: [
        "Started fencing at age 11",
        "Passionate about developing the next generation of fencers"
      ],
      bio: "Coach Matt started fencing at age 11 after seeing a demonstration in his fifth-grade class. He credits fencing and the wonderful people he met while training and competing for paving his way to success in life and is proud to pass that success on to the newest generation of fencers.",
      image: "/images/coaches/matt.jpg"
    },
    {
      name: "Coach Michael",
      title: "Maestro d'Escrime Épée",
      location: "Los Gatos",
      specialties: ["Epee", "Competitive Training", "USFA Professional"],
      experience: "40+ years fencing, 20+ years coaching",
      achievements: [
        "Former Division 1 National Point Holder in Men's Épée",
        "Multiple silver medals at Pacific Coast Championships (1997, 1999, 2001)",
        "Silver at 1997 California State Games", 
        "Competed at 2002 Grand Prix World Cup",
        "Professional member of USFA",
        "Over three decades of competitive experience"
      ],
      bio: "Michael Botenhagen brings over 40 years of fencing experience and more than 20 years of coaching expertise. A former Division 1 National Point Holder in Men's Épée, he earned multiple silver medals at the Pacific Coast Championships (1997, 1999, 2001), a silver at the 1997 California State Games, and competed internationally at the 2002 Grand Prix World Cup. He has over three decades of competitive experience and is a professional member of the United States Fencing Association (USFA).",
      image: "/images/coaches/michael.jpg"
    },
    {
      name: "Coach James",
      title: "Épée / Foil Coach",
      location: "Los Gatos",
      specialties: ["Epee", "Foil", "Intro to Fencing", "Intermediate Programs"],
      experience: "30+ years",
      achievements: [
        "BS in Psychology and MBA from Santa Clara University",
        "MS in Computer Science from John Hopkins University",
        "Santa Clara University Fencing Club President 1988-89",
        "USFA coach certified",
        "Working on L2 Moniteur certification",
        "Recently retired from cybersecurity field"
      ],
      bio: "James Quaranta joined Bay Area Fencing in May 2025 serving as Intro to Fencing Coach and Intermediate Épée and Foil Coach. James holds a BS in psychology and MBA from Santa Clara University, MS in computer science from John Hopkins University and is recently retired from high tech in the cybersecurity field. James has over 30 years fencing experience and served as Santa Clara University Fencing Club President 1988-89. He is USFA coach certified and is working on his L2 Moniteur certification.",
      image: "/images/coaches/james.jpg"
    },
    {
      name: "Coach Susanna",
      title: "Fencing Coach",
      location: "Los Gatos",
      specialties: ["General Instruction"],
      experience: "Professional",
      achievements: [],
      bio: "Professional fencing coach at our Los Gatos location.",
      image: "/images/coaches/susanna.jpg"
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
        "Nurturing elite young fencers",
        "Illustrious career spanning over three decades"
      ],
      bio: "Maestro Sandro (Maestro di Scherma) is a distinguished figure in the world of Italian fencing, renowned for his exceptional coaching skills and unwavering dedication to nurturing the talents of young elite fencers. With a profound passion for the sport and an illustrious career spanning over three decades, Maestro Sandro has left an indelible mark on the world of fencing.",
      image: "/images/coaches/sandro.jpg"
    },
    {
      name: "Coach Mykola",
      title: "Coach",
      location: "Pleasanton",
      specialties: ["General Instruction"],
      experience: "Professional",
      achievements: [],
      bio: "Professional coach at our Pleasanton location.",
      image: "/images/coaches/mykola.jpg"
    }
  ]

  const allCoaches = [...losGatosCoaches, ...pleasantonCoaches]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Los Gatos Coaches */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-left">
            Los Gatos Location
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {losGatosCoaches.map((coach, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex">
                    <div className="flex-1 pr-6">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {coach.name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        {coach.title}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Specialties:</h5>
                        <div className="flex flex-wrap gap-2">
                          {coach.specialties.map((specialty: string, idx: number) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm"
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

                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {coach.experience} experience
                        </span>
                      </div>
                    </div>
                    
                    <div className={coach.name === "Coach Danny" ? "w-48 h-full flex-shrink-0" : "w-48 h-48 flex-shrink-0"}>
                      {coach.image && !coach.image.includes('placeholder') ? (
                        <OptimizedImage
                          src={coach.image}
                          alt={`${coach.name} - ${coach.title}`}
                          width={192}
                          height={coach.name === "Coach Danny" ? 400 : 192}
                          className={coach.name === "Coach Danny" ? "w-48 h-full object-cover" : "w-48 h-48 object-cover"}
                        />
                      ) : (
                        <div className={coach.name === "Coach Danny" ? "w-48 h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center" : "w-48 h-48 bg-gray-300 dark:bg-gray-600 flex items-center justify-center"}>
                          <span className="text-gray-600 dark:text-gray-400 text-3xl font-bold">
                            {coach.name.split(' ').map((n: string) => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pleasanton Coaches */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-left">
            Pleasanton Location
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pleasantonCoaches.map((coach, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex">
                    <div className="flex-1 pr-6">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {coach.name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        {coach.title}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Specialties:</h5>
                        <div className="flex flex-wrap gap-2">
                          {coach.specialties.map((specialty: string, idx: number) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm"
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

                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {coach.experience} experience
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-48 h-48 flex-shrink-0">
                      {coach.image && !coach.image.includes('placeholder') ? (
                        <OptimizedImage
                          src={coach.image}
                          alt={`${coach.name} - ${coach.title}`}
                          width={192}
                          height={192}
                          className="w-48 h-48 object-cover"
                        />
                      ) : (
                        <div className="w-48 h-48 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                          <span className="text-gray-600 dark:text-gray-400 text-3xl font-bold">
                            {coach.name.split(' ').map((n: string) => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Trial Class Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Try a Free Trial Class
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The best way to experience our coaching approach is to join us for a free trial class. Meet our coaches and see if fencing is right for you!
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Available at both locations:</strong> Los Gatos and Pleasanton
              </p>
              <a 
                href="https://calendly.com/lisaposthumus-pfn_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Schedule Free Trial Class
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}