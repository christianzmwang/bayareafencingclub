import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CoachesHero from '@/components/coaches/CoachesHero'
import CoachProfiles from '@/components/coaches/CoachProfiles'

export default function CoachesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CoachesHero />
      <CoachProfiles />
      <Footer />
    </main>
  )
}
