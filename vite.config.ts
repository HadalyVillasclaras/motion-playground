import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/motion-playground/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'framer-motion', 
            'gsap', 
            'matter-js', 
            'p5', 
            'react', 
            'react-dom', 
            'react-router-dom'
          ]
        }
      }
    }
  }
})
