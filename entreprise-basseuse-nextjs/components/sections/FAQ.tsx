'use client'

import dynamic from 'next/dynamic'
import { faqData } from '@/lib/data/faq'

/*
 * Logique: Section FAQ avec accordéon chargé dynamiquement (code splitting)
 * Structure: section > h2 + composant Accordion lazy-loaded
 */

const Accordion = dynamic(() => import('@/components/ui/Accordion'), {
  loading: () => (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-16 bg-cream-100 rounded-xl animate-pulse" />
      ))}
    </div>
  ),
  ssr: false,
})

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-cream-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Questions Fréquentes
        </h2>

        <div className="max-w-2xl mx-auto">
          <Accordion items={faqData} />
        </div>
      </div>
    </section>
  )
}
