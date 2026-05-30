// @ts-check

import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig( {
  // Deploying to GitHub Pages under the repository subpath
  site: 'https://ecompjr.github.io',
  base: '/pj-labelu',
  integrations: [ icon(), mdx(), sitemap() ],

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Atkinson',
      cssVariable: '--font-atkinson',
      fallbacks: [ 'sans-serif' ],
      options: {
        variants: [
          {
            src: [ './src/assets/fonts/atkinson-regular.woff' ],
            weight: 400,
            style: 'normal',
            display: 'swap',
          },
          {
            src: [ './src/assets/fonts/atkinson-bold.woff' ],
            weight: 700,
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],

  vite: {
    plugins: [ tailwindcss() ],
  },
} )