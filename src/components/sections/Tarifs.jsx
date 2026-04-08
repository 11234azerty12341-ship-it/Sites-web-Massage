import { motion } from 'framer-motion'
import { Gift, CreditCard, Users, Star } from 'lucide-react'

/*
 * Logique: Section tarifs avec cartes détaillées
 * Structure: section > h2 + grid de cartes (Découverte, Unité, Fidélité, Parrainage)
 */
function Tarifs() {
  const pricingOptions = [
    {
      title: 'Offre Découverte',
      price: '30 €',
      duration: '45 minutes',
      description: 'Pour votre première séance. L\'occasion idéale de découvrir mon approche du bien-être.',
      icon: <Star size={24} className="text-primary-600" />,
      highlight: true
    },
    {
      title: 'Séance à l\'unité',
      price: '50 €',
      duration: '45 minutes',
      description: 'Pour un suivi régulier et une détente profonde.',
      icon: <CreditCard size={24} className="text-primary-600" />
    },
    {
      title: 'Programme Fidélité',
      price: '- 40 €',
      description: 'Votre bien-être mérite d’être récompensé. Après 3 séances effectuées, bénéficiez de 40 € de remise sur votre 4ème séance.',
      icon: <Gift size={24} className="text-primary-600" />
    },
    {
      title: 'Faites plaisir autour de vous',
      price: '- 20 €',
      description: 'Invitez un ami à découvrir mes soins et bénéficiez de 20 € de remise sur votre prochaine séance.',
      icon: <Users size={24} className="text-primary-600" />
    }
  ]

  return (
    <section id="tarifs" className="py-20 bg-cream-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mes Tarifs & Offres
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              className={`p-6 rounded-2xl bg-white border ${option.highlight ? 'border-primary-300 shadow-lg' : 'border-cream-200'} shadow-sm flex flex-col items-center text-center`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <div className="text-2xl font-bold text-primary-600 mb-1">{option.price}</div>
              {option.duration && <div className="text-sm text-earth-300 mb-4 italic">{option.duration}</div>}
              <p className="text-earth-400 text-sm">{option.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-earth-500 mb-6 italic">
            Faites-en profiter vos proches ! Invitez un ami à découvrir mes soins et bénéficiez de 20 € de remise sur votre prochaine séance.
          </p>
          <motion.a
            href="#reservation"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Prendre rendez-vous
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Tarifs
