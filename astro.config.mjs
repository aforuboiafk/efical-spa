// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon  from 'astro-icon';
import preact from '@astrojs/preact';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]  
  },
  site: 'https://efical-spa.cl',
  integrations: [icon({
    include: {
      mdi: ['certificate-outline', 'tools', 'cart', 'warehouse', 'air-conditioner',"map-marker",
        "phone",
        "email",
        "clock-outline"]
    }
  }), preact(), sitemap()],
});