import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-black min-h-[calc(100vh-4rem)] relative px-4 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Left Side - Programs Title */}
          <div className="text-left z-10 relative">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Programs
            </h1>
          </div>
        </div>
        
        {/* Right Side - Full Height Image */}
        <div className="absolute inset-y-0 right-0 w-1/2 h-full">
          <img
            src="/images/programs/IMG_8682.jpeg"
            alt="Bay Area Fencing Club Programs"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

    {/* Program Overview */}
    <section className="py-20 px-4 bg-primary dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Programs */}
            <div className="text-left">
              <div className="space-y-6">
                <div>
          <h3 className="text-2xl font-bold text-white mb-4">Pre-Competitive</h3>
          <ul className="space-y-2 text-lg text-white/90">
                    <li>Lil' Pirate</li>
                    <li>Beginning</li>
                  </ul>
                </div>
                <div>
          <h3 className="text-2xl font-bold text-white mb-4">Competitive</h3>
          <ul className="space-y-2 text-lg text-white/90">
                    <li>Intermediate</li>
                    <li>Competitive & Elite</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right Side - Description */}
            <div className="text-left">
        <p className="text-xl text-white/90 leading-relaxed">
                Our program is divided into two parts: Pre-Competitive and Competitive. The Bay Area Fencing Club is committed to the growth and development of young people through the sport of Fencing. We recognize the importance of fostering excellence in our athletes on and off the strip, supporting the whole athlete; academically, socially, and athletically. Through teaching the values of integrity, sportsmanship, and resilience, we strive for excellence both individually and as a team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Competitive Program */}
      <section className="min-h-screen flex items-center px-4 bg-gray-50 dark:bg-black pb-16 md:pb-24 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-24 text-center">
            Pre-Competitive Program
          </h2>

          <div className="space-y-12">
            {/* Lil' Pirates - Text with image to the right */}
            <div className="bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800 p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Lil' Pirates</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    "Little Pirates" is our introductory course designed for children aged 5 and 6. The course emphasizes movement and the fundamentals of fencing, namely agility, balance, and coordination.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Young participants will use plastic weapons, ensuring a welcoming and safe environment to foster their interest in returning and continuing to learn. We strive to maintain a fun and engaging atmosphere. Additionally, 7-year-olds can enroll in our beginner program.
                  </p>
                </div>
                <div className="relative w-full h-full min-h-80 md:min-h-96 lg:min-h-[28rem]">
                  <Image
                    src="/images/programs/LilPirates.webp"
                    alt="Lil' Pirates fencing class"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Beginning - Text with image to the right (below Lil' Pirates) */}
            <div className="bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800 p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Beginning</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Our program is designed for new fencers aged 7 and up. It meets once a week, offering learners the chance to master basic footwork, blade work, and, most importantly, bouting skills. Participants will get to fence with their teammates, learning how to develop winning strategies.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    We emphasize the importance of sportsmanship, hard work, and resilience. Initially, we'll provide all the necessary equipment. For information about purchasing your own fencing gear, please refer to our parent resources page.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
                    We advise scheduling at least one private lesson per week.
                  </p>
                </div>
                <div className="relative w-full h-full min-h-80 md:min-h-96 lg:min-h-[28rem]">
                  <Image
                    src="/images/programs/troy-and-abigail-480x319.jpg"
                    alt="Beginning fencers Troy and Abigail in a bout"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Program */}
      <section className="min-h-screen flex items-center px-4 bg-white dark:bg-gray-900 pb-16 md:pb-24 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-24 text-center">
            Competitive Program
          </h2>

          <div className="space-y-12">
            {/* Intermediate - text with image to the right */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Intermediate</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Once your fencer is ready, the coach will inform you that they are prepared for the Intermediate Class. If you join BAFC with previous experience, you're welcome to join the intermediate level after an evaluation.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    The Intermediate Program meets twice a week. In this program, your fencer will train with their teammates and learn to develop a winning strategy. We will be fencing electrically, and participants will need to purchase gear.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Fencers typically remain in the intermediate class until they are invited to our competitive program. If your child wishes to compete, a US Fencing competitive membership will be required.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
                    We recommend scheduling at least one to two private lessons per week.
                  </p>
                  <a href="https://calendly.com/lisaposthumus-pfn_" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-primary dark:text-primary-light hover:underline font-semibold">
                    If you believe your fencer is already at this level, please click here.
                  </a>
                </div>
                <div className="relative w-full h-full min-h-80 md:min-h-96 lg:min-h-[28rem]">
                  <Image
                    src="/images/programs/IntermediateprogramFencing.webp"
                    alt="Intermediate fencing class training"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Competitive and Elite - text with image to the right (below Intermediate) */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Competitive and Elite</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    The competitive/elite program includes intense footwork, blade work, and bouting, supplemented with additional conditioning. We advise taking 2 - 4 private lessons weekly. This program meets four days a week and aims to elevate your fencer to the next level, preparing them for state, national, and international competitions.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Joining this program also lets you represent the club at local competitions, competing against other clubs locally and nationwide. To compete, a competitive USA Fencing Membership is necessary.
                  </p>
                  <a href="https://calendly.com/lisaposthumus-pfn_" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-primary dark:text-primary-light hover:underline font-semibold">
                    If you think your fencer is ready for this level, please click here.
                  </a>
                </div>
                <div className="relative w-full h-full min-h-80 md:min-h-96 lg:min-h-[28rem]">
                  <Image
                    src="/images/programs/2022.jpg"
                    alt="Competitive and elite fencers at 2022 event"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Required */}
      <section className="min-h-screen flex items-center px-4 bg-gray-50 dark:bg-black pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-24 text-center">
            Equipment Required for Classes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Lil' Pirates and Beginning */}
            <div className="bg-white dark:bg-gray-900 p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Lil' Pirates and Beginning Program
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                To start fencing at BAFC, all you need are long pants and closed-toe shoes. After a month or so of fencing, we recommend acquiring the following equipment:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Fencing Mask</li>
                <li>• Glove</li>
                <li>• Jacket</li>
              </ul>
            </div>

            {/* Pre-Intermediate and Intermediate */}
            <div className="bg-white dark:bg-gray-900 p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Pre-Intermediate and Intermediate Program
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Upon entry into these programs, parents should purchase the following items:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Fencing Mask - weapon specific</li>
                <li>• Fencing Glove - weapon specific</li>
                <li>• Jacket</li>
                <li>• Lame (Electric jacket/vest for Sabre/Foil)</li>
                <li>• Underarm Protector</li>
                <li>• Knickers (Fencing Pants)</li>
                <li>• Body Cords (2 prong)</li>
                <li>• Mask Cords</li>
                <li>• Weapon (purchase 1-2)</li>
                <li>• Long socks</li>
                <li>• Chest Protector (chest guard for females)</li>
                <li>• Fencing Bag - optional</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 shadow-lg border mb-20 border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              We realize that purchasing fencing equipment is a difficult task to undertake. This is true for both new parents and experienced fencers. If you have any questions, please consult a member of the BAFC staff before purchasing equipment to ensure the size and style requirements are met for your fencer.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Generally, don't go overboard. Your children will grow into their fencing gear, and outgrow it before you know it.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              💡 There is a tutorial about how to purchase equipment under{' '}
              <a 
                href="/resources" 
                className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-semibold underline"
              >
                Parent's Resources
              </a>
              {' '}Page
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              You can find equipment at the following links:
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.absolutefencinggear.com/uniforms" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light hover:underline font-semibold">Absolute Fencing</a>
              <a href="https://thefencingpost.com/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light hover:underline font-semibold">The Fencing Post</a>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-6 italic">
              Hope this helps: Please reach out to your coach with any questions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
