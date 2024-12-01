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
      backgroundImage: {
        "metal-gradient": "linear-gradient(-90deg, #D1D1D1, #A6A6A6, #6E6E6E)",

        cake: "linear-gradient(to top, #F3C99C, #F1B97A, #E7A15C)",
        glass:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(230, 230, 230, 0.6), rgba(255, 255, 255, 0.7))",
      },
    },
  },
  plugins: [],
};
