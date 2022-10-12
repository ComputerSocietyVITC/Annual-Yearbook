/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        adio: "audiowide",
        jalla: "jalla",
      },
      colors: {
        cygreen: {
          25: "#b7eedd",
          100: "#31ce9f",
          200: "#31cca2",
          300: "#31caa5",
          800: "#31bac0",
          900: "#65c3df",
        },
      },
    },
  },
  plugins: [],
};
