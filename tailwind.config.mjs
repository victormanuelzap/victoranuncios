// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}", // 👈 corregido
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
