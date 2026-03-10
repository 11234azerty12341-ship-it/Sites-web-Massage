import ServiceCard from '../ui/ServiceCard'

/*
 * Logique: Section services avec cartes animées
 * Structure: section > h2 + grid de cartes
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
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
      </div>
    </section>
  )
}

export default Services
