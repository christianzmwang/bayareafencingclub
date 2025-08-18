import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Values from '@/components/Values'
import Locations from '@/components/Locations'
import Programs from '@/components/Programs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Values />
      <Locations />
      <Programs />
      <Footer />
    </main>
  )
}
