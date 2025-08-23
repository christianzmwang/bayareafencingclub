import CoachesHero from '@/components/coaches/CoachesHero'
import CoachProfiles from '@/components/coaches/CoachProfiles'
import CoachCertifications from '@/components/coaches/CoachCertifications'
import CoachingPhilosophy from '@/components/coaches/CoachingPhilosophy'
import ContactCoaches from '@/components/coaches/ContactCoaches'

export default function CoachesPage() {
  return (
    <main className="min-h-screen">
      <CoachesHero />
      <CoachProfiles />
      <CoachCertifications />
      <CoachingPhilosophy />
      <ContactCoaches />
    </main>
  )
}
