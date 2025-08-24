import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CoachesHero from '@/components/coaches/CoachesHero'
import CoachProfiles from '@/components/coaches/CoachProfiles'
import CoachCertifications from '@/components/coaches/CoachCertifications'
import CoachingPhilosophy from '@/components/coaches/CoachingPhilosophy'
import ContactCoaches from '@/components/coaches/ContactCoaches'

export default function CoachesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CoachesHero />
      <CoachProfiles />
      <CoachCertifications />
      <CoachingPhilosophy />
      <ContactCoaches />
      <Footer />
    </main>
  )
}
