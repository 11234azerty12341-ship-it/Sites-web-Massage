/*
 * Logique: Section hero avec image optimisée LCP (priority + placeholder blur)
 * Structure: section > flex container (image placeholder + bloc texte)
 * Note: Remplacer le placeholder par next/image quand l'image hero.webp sera ajoutée
 */
export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 bg-cream-50">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          TITRE
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image placeholder - Ajouter hero.webp dans public/images/ */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-cream-200 flex items-center justify-center">
              <span className="text-earth-400">Image placeholder</span>
              {/* Décommenter quand l'image est disponible:
              <Image
                src="/images/hero.webp"
                alt="Massage et bien-être"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,..."
              />
              */}
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
