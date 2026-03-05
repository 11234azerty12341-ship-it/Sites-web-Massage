import ServiceCard from '../ui/ServiceCard'

/*
 * Logique: Section services avec cartes animées
 * Structure: section > h2 + grid de cartes
 */
function Services() {
  const services = [
    {
      title: 'Massage Intuitif',
      description: 'Un massage personnalisé qui s\'adapte à vos besoins du moment.',
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Services
        </h2>

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
