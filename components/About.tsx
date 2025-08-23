import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-light mb-8"></div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Success never comes to those who quit and our goal is to help you reach yours. Engarde, Allez!
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              The Bay Area Fencing Club is committed to the growth and development of young people through the sport of Fencing.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We recognize the importance of fostering excellence in our athletes on and off the strip, supporting the whole athlete; academically, socially, and athletically. Through teaching the values of integrity, sportsmanship, and resilience, we strive for excellence both individually and as a team.
            </p>
          </div>
          
          <div className="relative h-full">
            <Image
              src="/images/about/IMG_9778.jpg"
              alt="Bay Area Fencing Club"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
