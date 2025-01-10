/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const customTailwindPlugin = require( './custom-tailwind-plugin' );


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // Brug 'class' for manuel styring
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FFFFFF',
          foreground: '#1F1F1F',
        },
        dark: {
          background: '#0A5D71',
          foreground: '#1F1F1F',
        },

        // https://coolors.co/palette/fbbf24-f97316-0d9488-06b6d4-3b82f6
        'tahiti': {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
        'golden': {
          light: '#FCCF5F',
          DEFAULT: '#FBBF24',
          dark: '#DC9F04',
        },
        'pumpkin': {
          light: '#FBA060',
          DEFAULT: '#F97316',
          dark: '#C75605',
        },
        'greenocean': {
          light: '#12CEBF',
          DEFAULT: '#0D9488',
          dark: '#085E57',
        },
        'cikorie': {
          light: '#77A8F9',
          DEFAULT: '#3B82F6',
          dark: '#0B60EA',
        },

      }


    },

  },
  plugins: [
    // require( 'daisyui' ),
    customTailwindPlugin  // Importer og brug eget plugin
  ],
}

