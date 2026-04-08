import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Tarifs from './components/sections/Tarifs'
import FAQ from './components/sections/FAQ'
import Reservation from './components/sections/Reservation'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Tarifs />
        <FAQ />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}

export default App
