// @ts-check

import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig( {
  // Deploying to GitHub Pages under the repository subpath
  site: process.env.SITE_URL || 'https://labelu.uefs.br',
  base: process.env.BASE_URL || '/website/',
  integrations: [ icon(), mdx(), sitemap() ],

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-body',
      fallbacks: [ 'sans-serif' ],
      options: {
        variants: [
          {
            src: [ './src/assets/fonts/Inter-VariableFont_opsz,wght.ttf' ],
            weight: '400 600',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Literata',
      cssVariable: '--font-heading',
      fallbacks: [ 'serif' ],
      options: {
        variants: [
          {
            src: [ './src/assets/fonts/Literata-VariableFont_opsz,wght.ttf' ],
            weight: '500 700',
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
