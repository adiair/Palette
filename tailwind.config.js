/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem', // Smaller than xs (10px)
      },
    },
  },
  plugins: [],
};
