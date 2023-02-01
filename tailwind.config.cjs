/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "txt-gray": "#767676",
        navbar: "#323232",
        "side-border": "#f9f9f9",
        "dark-black": "#111",
        "light-bg": "#f8f8f8",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        avatar: "60% 40% 30% 70%/60% 30% 70% 40%",
      },
      backgroundImage: {
        avatar: "url('assets/images/avatar.jpg')",
      },
      animation: {
        avatar: "morph 8s ease-in-out 1s infinite",
      },
      // boxShadow: {
      //   avatar: "inset 0 0 0 9px hsl(0deg 0% 100% / 30%)",
      // },
      screens: {
        xl: "1200px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
