import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_TIMESTAMP__: JSON.stringify(process.env.BUILD_TIMESTAMP || ''),
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
})
