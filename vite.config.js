import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.', // Explicitly define root
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'public/index.html', // Fix for Vercel HTML entry
    },
  },
})
