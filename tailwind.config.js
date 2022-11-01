/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    screens: {
      'sm': '376px',
      // => @media (min-width: 576px) { ... }

      'md': '480px',
      // => @media (min-width: 960px) { ... }

      'lg': '1240px',
      // => @media (min-width: 1440px) { ... }
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    extend: {
      colors: {
        'primary':"#0A142F",
        'brightSun': '#FFC93E',
        'rawUmber':"#725114",
        'blueZodiac':"#111D5E",
      },
      backgroundImage: {
        'heroStroke':"url('/assets/images/heroBgStroke.svg')",
        'heroStrokeSm':"url('/assets/images/heroBgStrokeSm.svg')",
      },
    },
  },
  plugins: [],
}
