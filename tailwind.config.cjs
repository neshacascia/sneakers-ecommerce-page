/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        body: '#69707D',
        dark: '#1D2026;',
        grey: '#B6BCC8;',
        navGray: '#69707D',
      },
      backgroundColor: {
        form: '#F6F8FD;',
        overlay: 'rgba(0, 0, 0, 0.7)',
      },
      fontFamily: {
        display: ['Kumbh Sans'],
        brand: ['Poppins'],
      },
      width: {
        desktop: '445px',
        images: '88px',
        modal: '400px',
        quantity: '157px',
        cart: '360px',
        cartItem: '50px',
        cartIcon: '19px',
      },
      height: {
        imageModal: '450px',
        cart: '300px',
        cartItem: '50px',
        cartIcon: '13px',
      },
      opacity: {
        images: '0.02',
      },
      boxShadow: {
        cart: '0px 20px 50px -20px rgba(29, 32, 38, 0.503143)',
      },
      gap: {
        modal: '405px',
      },
      text,
    },
  },
  plugins: [require('tailwindcss-text-fill')],
};
