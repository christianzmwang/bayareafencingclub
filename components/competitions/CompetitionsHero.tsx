import { Trophy, Calendar, Users, Target } from 'lucide-react'

export default function CompetitionsHero() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-500 to-orange-600 text-white py-20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Competitions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-yellow-100">
            We are thrilled that so many of you are interested in competing. This page has information about how to sign up for competitions, the regional competitions we are recommending this year, and procedures to attend.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-xl font-semibold mb-2">Local</h3>
              <p className="text-yellow-100">For everyone - easy to get to, single-day events</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-xl font-semibold mb-2">Regional</h3>
              <p className="text-yellow-100">More competitive events with ratings and nationals qualification</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-xl font-semibold mb-2">National</h3>
              <p className="text-yellow-100">Elite competitions for advanced fencers</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-yellow-100 mb-6">
              Competitions are divided by age and level. Check the{' '}
              <a 
                href="https://www.usafencing.org/age-classification-eligibility" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                USA Fencing website
              </a>
              {' '}for age classification details.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
