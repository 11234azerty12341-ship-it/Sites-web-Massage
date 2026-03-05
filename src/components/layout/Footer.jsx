import { Phone, Mail, MapPin } from 'lucide-react'

/*
 * Logique: Footer avec informations de contact
 * Structure: footer > container avec colonnes d'infos
 */
function Footer() {
  return (
    <footer className="bg-earth-100 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">
              Massage & Bien-être
            </h3>
            <p className="text-earth-400 text-sm">
              Votre espace de détente et de relaxation pour retrouver harmonie et sérénité.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-earth-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary-600" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary-600" />
                <span>contact@massage-bienetre.fr</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-600" />
                <span>123 Rue de la Détente, Paris</span>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-semibold mb-4">Horaires</h4>
            <ul className="space-y-2 text-sm text-earth-400">
              <li>Lundi - Vendredi : 9h - 19h</li>
              <li>Samedi : 10h - 18h</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-200 mt-8 pt-8 text-center text-sm text-earth-400">
          <p>&copy; 2024 Massage & Bien-être. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
