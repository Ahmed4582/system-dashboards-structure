// tailwind.config.js
module.exports = {
  darkMode: 'class',
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ['var(--font-montserrat)'],
        },
      },
    },
    plugins: [],
  };
  