import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import FAQ from '@/components/sections/FAQ'
import Reservation from '@/components/sections/Reservation'

/*
 * Logique: Page d'accueil SSG avec toutes les sections
 * Structure: sections Hero > Services > FAQ > Reservation
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FAQ />
      <Reservation />
    </>
  )
}
