import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isCI = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  integrations: [tailwind()],
  // 👇 URL pública real de tu sitio en GitHub Pages
  site: 'https://victormanuelzap.github.io/victoranuncios/',
  // 👇 base correcta: en CI usa /victoranuncios/, en local usa /
  base: isCI ? '/victoranuncios/' : '/',
});
