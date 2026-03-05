import Accordion from '../ui/Accordion'
import { faqData } from '../../data/faq'

/*
 * Logique: Section FAQ avec système d'accordéon
 * Structure: section > h2 + composant Accordion
 */
function FAQ() {
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

export default FAQ
