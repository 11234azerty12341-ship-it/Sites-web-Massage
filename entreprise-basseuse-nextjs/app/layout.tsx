import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

/*
 * Logique: Layout racine avec polices optimisées via next/font
 * Structure: html > body > Header + children + Footer
 */

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Massage & Bien-être | Relaxation et Détente',
  description: 'Découvrez nos massages professionnels pour votre bien-être. Massage intuitif, californien et plus. Réservez votre séance de relaxation.',
  keywords: ['massage', 'bien-être', 'relaxation', 'détente', 'massage californien', 'massage intuitif'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
