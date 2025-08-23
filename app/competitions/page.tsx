import CompetitionsHero from '@/components/competitions/CompetitionsHero'
import UpcomingEvents from '@/components/competitions/UpcomingEvents'
import PastResults from '@/components/competitions/PastResults'
import CompetitionRules from '@/components/competitions/CompetitionRules'
import RegistrationInfo from '@/components/competitions/RegistrationInfo'

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen">
      <CompetitionsHero />
      <UpcomingEvents />
      <PastResults />
      <CompetitionRules />
      <RegistrationInfo />
    </main>
  )
}
