import { useEffect } from 'react'

/*
 * Logique: Intègre le widget Calendly pour les réservations
 * Structure: section > container avec titre + widget Calendly
 */
function Reservation() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="reservation" className="py-20 bg-cream-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Réservez votre séance
          </h2>
          <p className="text-earth-400 max-w-2xl mx-auto">
            Choisissez le créneau qui vous convient le mieux
          </p>
        </div>

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/danielquenardbusiness/30min"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </section>
  )
}

export default Reservation
