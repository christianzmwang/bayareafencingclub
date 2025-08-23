import SchedulesHero from '@/components/schedules/SchedulesHero'
import WeeklySchedule from '@/components/schedules/WeeklySchedule'
import ClassTypes from '@/components/schedules/ClassTypes'
import ScheduleCalendar from '@/components/schedules/ScheduleCalendar'
import BookingInfo from '@/components/schedules/BookingInfo'

export default function SchedulesPage() {
  return (
    <main className="min-h-screen">
      <SchedulesHero />
      <WeeklySchedule />
      <ClassTypes />
      <ScheduleCalendar />
      <BookingInfo />
    </main>
  )
}
