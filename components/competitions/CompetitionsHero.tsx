import { Trophy, Calendar, Users, Target } from 'lucide-react'

export default function CompetitionsHero() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-500 to-orange-600 text-white py-20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fencing Competitions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-yellow-100">
            Compete, challenge yourself, and showcase your fencing skills in tournaments and events
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-xl font-semibold mb-2">Tournaments</h3>
              <p className="text-yellow-100">Local, regional & national events</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-xl font-semibold mb-2">Regular Events</h3>
              <p className="text-yellow-100">Monthly competitions & rankings</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-xl font-semibold mb-2">All Skill Levels</h3>
              <p className="text-yellow-100">From beginners to elite fencers</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-xl font-semibold mb-2">Multiple Weapons</h3>
              <p className="text-yellow-100">Foil, Epee & Sabre events</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary bg-white text-orange-600 hover:bg-gray-100">
              View Upcoming Events
            </button>
            <button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600">
              Register for Tournament
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
