import { Calendar, Clock, Users } from 'lucide-react'

export default function SchedulesHero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary to-secondary-dark text-white py-20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Class Schedules
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary-light">
            Find the perfect class time that fits your schedule and skill level
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-secondary-light" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-secondary-light">Classes available 7 days a week</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-secondary-light" />
              <h3 className="text-xl font-semibold mb-2">Multiple Time Slots</h3>
              <p className="text-secondary-light">Morning, afternoon, and evening options</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-secondary-light" />
              <h3 className="text-xl font-semibold mb-2">All Skill Levels</h3>
              <p className="text-secondary-light">From beginners to advanced competitors</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary bg-white text-secondary hover:bg-gray-100">
              View Full Schedule
            </button>
            <button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary">
              Book a Class
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
