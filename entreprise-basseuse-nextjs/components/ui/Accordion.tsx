'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '@/lib/data/faq'

/*
 * Logique: Accordéon avec animations GPU (transform + opacity)
 * Structure: div > bouton toggle + contenu animé
 */

interface AccordionProps {
  items: FAQItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleItem = (id: number) => {
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
              style={{ willChange: 'transform' }}
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
                style={{ willChange: 'height, opacity' }}
              >
                <p className="px-6 pb-4 text-earth-400">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
