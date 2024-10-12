/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#F1E3D3",
        secondary: "#B3B792",
        accent: "#C58C6D",
        "secondary-accent": "#725C3A",
      },
      boxShadow: {
        "3xl": "0 4px 5px 0 #00000050",
        "3xl-inner": "2px 0 5px 0 #00000050",
      },
    },
  },
  plugins: [],
};
