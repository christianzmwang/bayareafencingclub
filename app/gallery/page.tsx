import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GalleryHero from '@/components/gallery/GalleryHero'
import PhotoGallery from '@/components/gallery/PhotoGallery'
import VideoGallery from '@/components/gallery/VideoGallery'
import GalleryCategories from '@/components/gallery/GalleryCategories'
import ShareGallery from '@/components/gallery/ShareGallery'

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <GalleryHero />
      <PhotoGallery />
      <VideoGallery />
      <GalleryCategories />
      <ShareGallery />
      <Footer />
    </main>
  )
}
