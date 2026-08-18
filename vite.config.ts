import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // 👈 for Railway
  preview: {
    allowedHosts: ['fajle-portfolio.up.railway.app']
  }
})
