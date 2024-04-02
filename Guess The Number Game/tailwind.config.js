/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        btn: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
