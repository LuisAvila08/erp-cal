import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/erp-cal",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Mantén el alias de @ para que funcione el path
    }
  }
})
