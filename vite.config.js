import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/triche-nest/', // Replace <triche-nest> with your repo name
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});
