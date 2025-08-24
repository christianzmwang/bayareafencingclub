import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CareersHero from '@/components/careers/CareersHero'
import JobOpenings from '@/components/careers/JobOpenings'

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CareersHero />
      <JobOpenings />
      <Footer />
    </main>
  )
}
