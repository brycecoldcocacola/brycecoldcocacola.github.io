import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    preprocessorOptions: {
      // Bootstrap's SCSS emits deprecated color/@import warnings we don't control.
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import', 'color-functions', 'global-builtin'],
      },
    },
  },
  build: {
    // Three.js is ~500 kB min; it is lazy-loaded above the fold so only pay when needed.
    chunkSizeWarningLimit: 600,
    // Keep the large 3D / framework deps in their own cacheable chunks.
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          react: ['react', 'react-dom', 'react-bootstrap'],
        },
      },
    },
  },
});
