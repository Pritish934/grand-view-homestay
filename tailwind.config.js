/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        mist: '#F1F4F1',
        fog: '#E4E9E3',
        pine: '#16231C',
        pineLight: '#1F3128',
        slate: '#4B5D55',
        stone: '#9AA69E',
        amber: '#C17A3E',
        amberDeep: '#A6612C',
        moss: '#5B7A5C',
        mossDeep: '#3E5940',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
      },
      maxWidth: {
        prose: '38rem',
      },
    },
  },
  plugins: [],
};
