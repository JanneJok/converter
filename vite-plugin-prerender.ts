import { Plugin } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

// Routes to pre-render
const routes = [
  '/',
  '/jpg-to-webp',
  '/png-to-webp',
  '/jpeg-to-webp',
  '/webp-to-jpg',
  '/webp-to-png',
  '/faq',
  '/contact',
  '/privacy',
  '/terms'
];

export function prerenderPlugin(): Plugin {
  return {
    name: 'vite-plugin-prerender',
    apply: 'build',
    closeBundle: async () => {
      console.log('\n🔄 Starting pre-rendering...');

      const outDir = 'dist';
      const indexHtmlPath = join(outDir, 'index.html');

      // Read the built index.html template
      if (!existsSync(indexHtmlPath)) {
        console.error('❌ index.html not found in dist directory');
        return;
      }

      const template = readFileSync(indexHtmlPath, 'utf-8');

      // Pre-render each route
      for (const route of routes) {
        try {
          let html = template;

          // Update canonical URL for this specific route
          const canonicalUrl = `https://imageconversions.com${route}`;
          html = html.replace(
            /<link rel="canonical" href="[^"]*" \/>/,
            `<link rel="canonical" href="${canonicalUrl}" />`
          );

          // For non-root routes, create directory and index.html
          if (route !== '/') {
            const routePath = route.slice(1); // Remove leading slash
            const dir = join(outDir, routePath);
            const filePath = join(dir, 'index.html');

            // Create directory if it doesn't exist
            if (!existsSync(dir)) {
              mkdirSync(dir, { recursive: true });
            }

            // Write the HTML file
            writeFileSync(filePath, html, 'utf-8');
            console.log(`✅ Pre-rendered: ${route} -> ${routePath}/index.html`);
          } else {
            // Update root index.html as well
            writeFileSync(indexHtmlPath, html, 'utf-8');
            console.log(`✅ Using root: / -> index.html`);
          }
        } catch (error) {
          console.error(`❌ Failed to pre-render ${route}:`, error);
        }
      }

      console.log('✨ Pre-rendering complete!\n');
    }
  };
}
