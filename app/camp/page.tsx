import CampHero from '@/components/camp/CampHero'
import CampPrograms from '@/components/camp/CampPrograms'
import CampSchedule from '@/components/camp/CampSchedule'
import CampRegistration from '@/components/camp/CampRegistration'
import CampFAQ from '@/components/camp/CampFAQ'

export default function CampPage() {
  return (
    <main className="min-h-screen">
      <CampHero />
      <CampPrograms />
      <CampSchedule />
      <CampRegistration />
      <CampFAQ />
    </main>
  )
}
