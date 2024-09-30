import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://billycastrob.github.io/trabajos-insti-apps', // Reemplaza <REPO> con el nombre de tu repositorio
  build: {
    outDir: 'dist',
  },
})
