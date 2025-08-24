import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ResourcesHero from '@/components/resources/ResourcesHero'
import ResourceCategories from '@/components/resources/ResourceCategories'
import Downloads from '@/components/resources/Downloads'
import Links from '@/components/resources/Links'
import ContactSupport from '@/components/resources/ContactSupport'

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ResourcesHero />
      <ResourceCategories />
      <Downloads />
      <Links />
      <ContactSupport />
      <Footer />
    </main>
  )
}
