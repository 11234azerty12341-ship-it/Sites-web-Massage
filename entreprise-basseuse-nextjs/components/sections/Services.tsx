import ServiceCard from '@/components/ui/ServiceCard'
import { servicesData } from '@/lib/data/services'

/*
 * Logique: Section services Server Component avec cartes animées
 * Structure: section > h2 + grid de cartes
 */
export default function Services() {
  return (
    <section id="services" className="py-20 bg-cream-100">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
