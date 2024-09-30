import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/trabajos-appsweb-moviles/', // Reemplaza <REPO> con el nombre de tu repositorio
  build: {
    outDir: 'dist',
  },
})
