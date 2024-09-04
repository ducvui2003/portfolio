/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: { max: "450px" },
      },
      colors: {
        primary: {
          DEFAULT: "#1F2626",
          dark: "#BDEBEA",
        },
        secondary: {
          DEFAULT: "#5222D0",
          dark: "#2C2C2C",
        },
        background: {
          DEFAULT: "#E5E5E5",
          dark: "#041F31",
        },
        text: "#1F2626",
        "sub-title": {
          DEFAULT: "#151717",
          dark: "#D7E5EC",
        },
        button: {
          DEFAULT: "#DBFFFF",
          dark: "#252728",
        },
        card: {
          DEFAULT: "#F5F2FD",
          dark: "#222525",
        },
        backdrop: "rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        linear: "linear-gradient(to right,#00F5A0 0%, #00D9F5 100%)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif", " system-ui"],
        serif: ["Tinos", "serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", scrollbar],
};
