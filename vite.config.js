import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Logique : Utilise VITE_BASE_URL pour adapter le chemin selon la plateforme
//           GitHub Pages = '/Sites-web-Massage/', Vercel = '/'
// Structure : Configuration Vite avec plugin React et base URL dynamique
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/',
})
