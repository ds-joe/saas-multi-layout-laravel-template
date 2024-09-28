// Dependencies
import { defineConfig } from 'vite';

// Plugins
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

// Utils
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/react/main.tsx',
      refresh: true,
    }),
    react(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [
      './resources/react/bootstrap/testingSetup.ts',
      './resources/react/testing/vitest.setup.ts',
    ],
  },
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './resources/react')}/`,
      '~/': `${path.resolve(__dirname, './public')}/`,
      '~tailwind/': `${path.resolve(__dirname, './config/tailwind')}/`,
    },
  },
});
