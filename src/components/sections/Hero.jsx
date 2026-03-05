/*
 * Logique: Section hero avec image et texte d'accroche
 * Structure: section > flex container (image + bloc texte)
 */
function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 bg-cream-50">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          TITRE
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/hero-massage.jpg"
                alt="Massage professionnel pour le bien-être"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Texte Accroche
            </h3>
            <p className="text-earth-400 text-lg leading-relaxed">
              Découvrez nos massages professionnels pour votre bien-être et relaxation.
            </p>
            <a href="#services" className="btn-primary inline-block">
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
