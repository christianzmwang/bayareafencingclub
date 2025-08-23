import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Values from '@/components/Values'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
  <Navbar />
      <Hero />
      <About />
      <Values />
      <Locations />
      <Footer />
    </main>
  )
}
