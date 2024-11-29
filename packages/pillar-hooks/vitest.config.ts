/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, UserConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import {} from 'vitest'

export default defineConfig({
  plugins: [react()] as UserConfig['plugins'],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
  },
})
