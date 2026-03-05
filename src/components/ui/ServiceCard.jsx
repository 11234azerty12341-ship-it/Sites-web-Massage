import { motion } from 'framer-motion'
import { Heart, Waves } from 'lucide-react'

/*
 * Logique: Carte service avec animation de bordure "border-beam"
 * Structure: div wrapper animé > contenu avec icône, titre, description
 */

const iconMap = {
  Heart,
  Waves,
}

function ServiceCard({ title, description, icon }) {
  const IconComponent = iconMap[icon] || Heart

  return (
    <motion.div
      className="relative p-[3px] rounded-2xl animate-border-beam"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-cream-50 rounded-2xl p-8 h-full">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Icône centrale */}
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
            <IconComponent size={32} className="text-primary-600" />
          </div>

          {/* Titre */}
          <h3 className="text-xl font-semibold">{title}</h3>

          {/* Description */}
          <p className="text-earth-400">{description}</p>

          {/* Bouton */}
          <motion.button
            className="btn-secondary mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            En savoir plus
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
