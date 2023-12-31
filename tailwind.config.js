/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        textPrimary: "#b6b6b6",
        textSecondary: "#ececec",
        bgPrimary: "#23232e",
        bgSecondary: "#141418",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "300px",
      },
      backgroundImage: {
        "about-pattern": "url('/src/assets/Gotham.jpeg')",
      },
     
    },
  }, 
  plugins: [('@tailwindcss/forms')],
};
