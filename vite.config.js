import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function normalizeBase(raw) {
  if (raw == null || String(raw).trim() === '') return '/'
  let s = String(raw).trim()
  if (!s.startsWith('/')) s = `/${s}`
  if (!s.endsWith('/')) s = `${s}/`
  return s
}

// https://vite.dev/config/
// GitHub Pages (sitio de proyecto): VITE_BASE_PATH=/nombre-repo/
// Dominio en raíz: dejar sin variable o VITE_BASE_PATH=/
export default defineConfig({
  base: normalizeBase(process.env.VITE_BASE_PATH),
  plugins: [react(), tailwindcss()],
})
