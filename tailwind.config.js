/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend:{
      gridTemplateColumns:{
        custom: ['3fr 1fr']
      }
    }
  },
  plugins: [],
};
