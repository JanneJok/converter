import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin to inline CSS into HTML
function inlineCSS(): Plugin {
  return {
    name: 'vite-plugin-inline-css',
    apply: 'build',
    async transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html;

      const cssAssets = Object.values(ctx.bundle).filter(
        (asset): asset is any =>
          asset.type === 'asset' &&
          asset.fileName.endsWith('.css')
      );

      let transformedHtml = html;

      for (const cssAsset of cssAssets) {
        const cssLinkTag = `<link rel="stylesheet" crossorigin href="/${cssAsset.fileName}">`;
        const styleTag = `<style>${cssAsset.source}</style>`;
        transformedHtml = transformedHtml.replace(cssLinkTag, styleTag);
        delete ctx.bundle[cssAsset.fileName];
      }

      return transformedHtml;
    }
  };
}

export default defineConfig({
  plugins: [react(), inlineCSS()],
  base: '/',
  build: {
    cssCodeSplit: false,
    cssMinify: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})
