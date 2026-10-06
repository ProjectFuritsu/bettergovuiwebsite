import process from 'node:process'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The folder the site is served from: "/" by default, "/<repository>/" on GitHub Pages (set in the deploy workflow)
  base: process.env.BASE_PATH ?? '/',
})
