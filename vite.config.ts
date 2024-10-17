import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});

// import {defineConfig} from 'vitest/config'
// import {svelte} from '@sveltejs/vite-plugin-svelte'
// import {svelteTesting} from '@testing-library/svelte/vite'

// export default defineConfig({
//   plugins: [svelte(), svelteTesting()],
//   test: {
//     environment: 'jsdom',
//     setupFiles: ['./vitest-setup.js'],
//   },
// })
