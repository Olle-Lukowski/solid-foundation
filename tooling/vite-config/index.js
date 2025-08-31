import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { cwd } from 'process'

export function createLibConfig(globalName, options = {}) {
  const { bundleInternalDeps = false, entry = 'src/index.ts', dirname = cwd() } = options

  return defineConfig({
    plugins: [
      solid(),
      dts({
        insertTypesEntry: true,
        rollupTypes: true,
        exclude: ['../../apps/**/*'],
      }),
    ],
    build: {
      lib: {
        entry: resolve(dirname, entry),
        name: globalName,
        fileName: 'index',
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: ['solid-js', 'solid-js/web', ...(bundleInternalDeps ? [] : [/^@solid-foundation\/.*/])],
        output: {
          globals: {
            'solid-js': 'SolidJS',
            'solid-js/web': 'SolidJSWeb',
          },
        },
      },
      emptyOutDir: true,
      sourcemap: true,
      minify: false,
    },
    esbuild: {
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['node_modules/@testing-library/jest-dom/vitest'],
      globals: false,
      isolate: false,
    },
  })
}
