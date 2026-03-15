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

  return (
    <section id="services" className="py-20 bg-cream-100">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Nos Services
        </h2>

        <p className="text-center text-lg font-semibold text-earth-500 mb-12">
          Les massages pourront être pratiqués habillés ou à l'huile selon vos préférences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Carte Tarifs - même style que les cartes services */}
        <motion.div
          className="relative p-[3px] rounded-2xl animate-border-beam max-w-md mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-cream-50 rounded-2xl p-8 h-full">
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Icône centrale */}
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <Gift size={32} className="text-primary-600" />
              </div>

              {/* Titre */}
              <h3 className="text-xl font-semibold">Nos Tarifs</h3>

              {/* Contenu tarifs */}
              <div className="text-earth-400 text-left space-y-3">
                <p><span className="font-semibold text-primary-600">Offre de bienvenue :</span> 10 € votre première séance de 45 minutes pour découvrir notre univers.</p>
                <p><span className="font-semibold text-primary-600">Tarif habituel :</span> 50 € la séance de 45 minutes pour un suivi de qualité.</p>
                <p><span className="font-semibold text-primary-600">Avantage Parrainage :</span> Invitez un proche et votre séance ne vous coûtera que 30 €.</p>
              </div>

              {/* Bouton */}
              <motion.a
                href="#reservation"
                className="btn-secondary mt-4 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Prendre rendez-vous
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
