/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        lblack: "#171717",
        xlblack: "#191919",
        crimson: "#DC143C",
        lblue: "#1A73E8",
        grey: "#737373",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-banner": "url('/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
