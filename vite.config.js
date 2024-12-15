import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/triche-nest/', 
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});
