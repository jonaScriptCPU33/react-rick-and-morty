import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://github.com/jonaScriptCPU33/react-rick-and-morty",
  plugins: [react()],
})
