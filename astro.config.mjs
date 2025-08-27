import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isCI = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  integrations: [tailwind()],
  base: isCI ? '/victoranuncios/' : '/',   // 👈 base correcta para GitHub Pages
});
