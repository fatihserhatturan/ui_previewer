/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',  // dark mode'u 'class' stratejisi ile ekleyin
  theme: {
    extend: {
      // Burada tema özelleştirmeleri yapılabilir
      colors: {
        // Örnek renk paletiniz
        'primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
        }
      }
    },
  },
  plugins: [],
}
