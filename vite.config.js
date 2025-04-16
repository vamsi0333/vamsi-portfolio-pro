import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensures root directory is base
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html'
    }
  }
})
