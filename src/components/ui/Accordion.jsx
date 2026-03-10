import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/*
 * Logique: Accordéon avec ouverture exclusive (une seule question ouverte à la fois)
 * Structure: div > bouton toggle + contenu animé
 */
function Accordion({ items }) {
  const [openId, setOpenId] = useState(null)

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-cream-50 rounded-xl overflow-hidden border border-cream-200"
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between text-left"
            onClick={() => toggleItem(item.id)}
            aria-expanded={openId === item.id}
          >
            <h3 className="text-lg font-medium text-earth-500">
              {item.question}
            </h3>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} className="text-primary-600" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <p
                  className="px-6 pb-4 text-earth-400"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default Accordion
