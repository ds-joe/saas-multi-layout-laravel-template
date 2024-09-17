import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from "path";

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
    setupFiles: './resources/react/testing/config.ts',
  },
  server: {
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "./resources/react")}/`,
      "~/": `${path.resolve(__dirname, "./public")}/`,
      "~tailwind/": `${path.resolve(__dirname, "./config/tailwind")}/`,
    },
  },
});
