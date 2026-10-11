import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// En production, le site est servi depuis un sous-dossier GitHub Pages
// (https://<compte>.github.io/rasmote-fan-site/). En développement, base = '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/rasmote-fan-site/' : '/',
  plugins: [react()],
}))
