/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#f6a5b0',   // Rosa pastel
          blue: '#a6dcef',   // Azul pastel
          yellow: '#fef3b0', // Amarillo pastel
          green: '#b0e2a1',   // Verde pastel
          purple: '#c7a7e8',  // Morado pastel
          gray: '#f7f7f7',    // Gris pastel
        },
      },
    },
  },
  plugins: [],
}
