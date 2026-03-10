import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Logique : Définit la base URL pour GitHub Pages (nom du dépôt)
// Structure : Configuration Vite avec plugin React et chemin de base
export default defineConfig({
  plugins: [react()],
  base: '/Sites-web-Massage/',
})
