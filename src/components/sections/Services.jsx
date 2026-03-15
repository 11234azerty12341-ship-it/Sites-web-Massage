import { motion } from 'framer-motion'
import { Gift } from 'lucide-react'
import ServiceCard from '../ui/ServiceCard'

/*
 * Logique: Section services avec cartes animées et tarifs
 * Structure: section > h2 + carte tarifs + grid de cartes services
 */
function Services() {
  const services = [
    {
      title: 'Massage Intuitif',
      description: 'À l\'écoute de votre corps, je localise vos tensions pour les dénouer et vous offrir un soulagement profond.',
      icon: 'Heart',
    },
    {
      title: 'Massage Californien',
      description: 'Mouvements fluides et enveloppants pour une relaxation profonde.',
      icon: 'Waves',
    },
  ]

  const tarifs = [
    {
      label: 'Offre de bienvenue',
      prix: '10 €',
      detail: 'votre première séance de 45 minutes pour découvrir notre univers.',
    },
    {
      label: 'Tarif habituel',
      prix: '50 €',
      detail: 'la séance de 45 minutes pour un suivi de qualité.',
    },
    {
      label: 'Avantage Parrainage',
      prix: '30 €',
      detail: 'Invitez un proche et votre séance ne vous coûtera que 30 €.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-cream-100">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Nos Services
        </h2>

        {/* Carte Tarifs avec animation border-beam */}
        <motion.div
          className="relative p-[3px] rounded-2xl animate-border-beam max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-cream-50 rounded-2xl p-8">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Icône */}
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <Gift size={32} className="text-primary-600" />
              </div>

              {/* Tarifs */}
              <div className="space-y-4 w-full">
                {tarifs.map((tarif) => (
                  <div key={tarif.label} className="text-earth-500">
                    <span className="font-semibold text-primary-600">{tarif.label} : </span>
                    <span className="font-bold text-xl text-primary-700">{tarif.prix}</span>
                    <span> {tarif.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-lg font-semibold text-earth-500 mb-12">
          Les massages pourront être pratiqués habillés ou à l'huile selon vos préférences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
