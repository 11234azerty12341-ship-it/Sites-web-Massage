'use client'

import { useEffect, useRef, useState } from 'react'

/*
 * Logique: Widget Calendly lazy-loaded via Intersection Observer
 * Structure: section > container avec titre + widget Calendly injecté dynamiquement
 */
export default function Reservation() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => setIsLoaded(true)
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [isVisible])

  return (
    <section id="reservation" className="py-20 bg-cream-100" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Réservez votre séance
          </h2>
          <p className="text-earth-400 max-w-2xl mx-auto">
            Choisissez le créneau qui vous convient le mieux
          </p>
        </div>

        {/* Skeleton pendant le chargement */}
        {!isLoaded && (
          <div
            className="bg-cream-50 rounded-xl animate-pulse flex items-center justify-center"
            style={{ minWidth: '320px', height: '700px' }}
          >
            <span className="text-earth-400">Chargement du calendrier...</span>
          </div>
        )}

        {/* Widget Calendly */}
        {isVisible && (
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/danielquenardbusiness/30min"
            style={{
              minWidth: '320px',
              height: '700px',
              display: isLoaded ? 'block' : 'none'
            }}
          />
        )}
      </div>
    </section>
  )
}
