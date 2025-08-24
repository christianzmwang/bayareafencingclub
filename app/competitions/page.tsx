import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CompetitionsHero from '@/components/competitions/CompetitionsHero'
import UpcomingEvents from '@/components/competitions/UpcomingEvents'
import PastResults from '@/components/competitions/PastResults'
import CompetitionRules from '@/components/competitions/CompetitionRules'
import RegistrationInfo from '@/components/competitions/RegistrationInfo'

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CompetitionsHero />
      <UpcomingEvents />
      <PastResults />
      <CompetitionRules />
      <RegistrationInfo />
      <Footer />
    </main>
  )
}
