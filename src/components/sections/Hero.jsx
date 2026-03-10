/*
 * Logique: Section hero avec image et texte d'accroche
 * Structure: section > flex container (image + bloc texte)
 */
import heroImage from '/hero-massage.jpg'

function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 bg-cream-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Massage professionnel pour le bien-être"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="w-full md:w-1/2 space-y-6 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Libérez-vous des tensions, apaisez votre esprit.
            </h3>
            <p className="text-earth-400 text-lg leading-relaxed">
              Laissez vos sens prendre le relais. Fermez les yeux et écoutez simplement le rythme de votre respiration. Chaque mouvement est une invitation à lâcher prise sur votre quotidien : le monde extérieur s'efface pour laisser place à un calme enveloppant qui vient nourrir votre besoin de sérénité. Découvrez nos massages professionnels pour votre bien-être et relaxation.
            </p>
            <a href="#reservation" className="btn-primary inline-block">
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
