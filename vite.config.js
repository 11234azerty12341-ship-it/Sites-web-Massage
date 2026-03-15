import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Logique : Définit la base URL pour GitHub Pages (nom du dépôt)
// Structure : Configuration Vite avec plugin React et chemin de base
// Logique : Configuration Vite pour GitHub Pages avec chemin de base du dépôt
// Structure : Export de la config avec plugin React et base URL
export default defineConfig({
  plugins: [react()],
  base: '/Sites-web-Massage/',
})
