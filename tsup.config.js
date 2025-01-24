import { defineConfig } from 'tsup'

export default defineConfig({
  cjsInterop: true,
  clean: true,
  entry: ['lib/index.ts'],
  format: ['cjs', 'esm'],
  shims: true,
  sourcemap: false,
  splitting: true,
  target: 'node20'
})
