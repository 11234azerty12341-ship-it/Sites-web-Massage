import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Logique : Définit la base URL pour GitHub Pages (nom du dépôt)
// Structure : Configuration Vite avec plugin React et chemin de base
// Logique : Configuration Vite standard pour Vercel (base à la racine)
// Structure : Export de la config avec plugin React
export default defineConfig({
  plugins: [react()],
  base: '/',
})
