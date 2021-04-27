import path from 'path';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { nodeResolve } from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  resolve: {
    alias: {
      'preact-app': path.resolve(__dirname, './src'),
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      // need to be revisited.
      ...process.env.CI && {
        'preact/devtools': 'preact-app/node_modules/preact/devtools/src/index.js',
        'preact/hooks': 'preact-app/node_modules/preact/hooks/src/index.js',
        'preact/compat': 'preact-app/node_modules/preact/compat/src/index.js',
        preact: 'preact-app/node_modules/preact/src/index.js'
      }
    }
  },
  build: {
    assetsInlineLimit: 0,
    outDir: '../dist/preact-app',
    minify: false,
    sourcemap: true,
    rollupOptions: {
      plugins: [
        nodeResolve({
          extensions: ['.js', '.json', '.node', '.css', '.scss', '.ico', '.jpg']
        })
      ],
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js'
      }
    }
  },
  plugins: [
    preact({
      devtoolsInProd: true
    })
  ],

  server: {
    open: true
  }
});
