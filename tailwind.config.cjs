/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        body: '#69707D',
        dark: '#1D2026;',
        grey: '#B6BCC8;',
      },
      backgroundColor: {
        form: '#F6F8FD;',
      },
      fontFamily: {
        display: ['Kumbh Sans'],
        brand: ['Poppins'],
      },
    },
  },
  plugins: [],
};
