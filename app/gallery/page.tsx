import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GalleryHero from '@/components/gallery/GalleryHero'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata = {
  title: 'Gallery | Bay Area Fencing Club',
  description: 'View photos from Bay Area Fencing Club competitions, classes, and community events. See our fencers in action and celebrate their achievements.',
  keywords: 'fencing gallery, fencing photos, BAFC community, fencing competitions, fencing students',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  )
}
