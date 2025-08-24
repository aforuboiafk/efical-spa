// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; 
import icon  from 'astro-icon';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]  
  },
  integrations: [
    icon({
      include: {
        mdi: ['certificate-outline', 'tools', 'cart', 'warehouse', 'air-conditioner',"map-marker",
          "phone",
          "email",
          "clock-outline"]
      }
    }),
    preact(),
  ],
});