/** @type {import('tailwindcss').Config} */
let plugins = [];

try {
  const forms = require('@tailwindcss/forms');
  const typography = require('@tailwindcss/typography');
  plugins = [forms, typography];
} catch (e) {
  console.warn('Some Tailwind plugins are not installed. Running without them.');
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
      },
    },
  },
  plugins,
};
