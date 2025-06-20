import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  server: {
    port: 8001,
  },
    build: {
    outDir: 'dist', // Ensure this is 'dist' if you don't change it
  },
})
