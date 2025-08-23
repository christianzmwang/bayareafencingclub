import CareersHero from '@/components/careers/CareersHero'
import JobOpenings from '@/components/careers/JobOpenings'
import CompanyCulture from '@/components/careers/CompanyCulture'
import Benefits from '@/components/careers/Benefits'
import ApplicationProcess from '@/components/careers/ApplicationProcess'

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <CareersHero />
      <JobOpenings />
      <CompanyCulture />
      <Benefits />
      <ApplicationProcess />
    </main>
  )
}
