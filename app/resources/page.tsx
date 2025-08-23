import ResourcesHero from '@/components/resources/ResourcesHero'
import ResourceCategories from '@/components/resources/ResourceCategories'
import Downloads from '@/components/resources/Downloads'
import Links from '@/components/resources/Links'
import ContactSupport from '@/components/resources/ContactSupport'

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <ResourcesHero />
      <ResourceCategories />
      <Downloads />
      <Links />
      <ContactSupport />
    </main>
  )
}
