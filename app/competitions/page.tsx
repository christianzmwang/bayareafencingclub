import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CompetitionsHero from '@/components/competitions/CompetitionsHero'
import CompetitionTypes from '@/components/competitions/CompetitionTypes'
import CompetitionSchedule from '@/components/competitions/CompetitionSchedule'
import CompetitionProcedures from '@/components/competitions/CompetitionProcedures'

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CompetitionsHero />
      <CompetitionTypes />
      <CompetitionSchedule />
      <CompetitionProcedures />
      <Footer />
    </main>
  )
}
