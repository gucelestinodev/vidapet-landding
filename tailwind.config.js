/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F0EEE9",
        orange: {
          DEFAULT: "#FF7631",
          50: "#FFF1E9",
          100: "#FFE0CC",
          500: "#FF7631",
          600: "#E85F1C"
        },
        navy: {
          DEFAULT: "#00313C",
          900: "#00313C",
          800: "#063A45",
          700: "#0C4854"
        },
        bluebrand: "#1D57A5",
        greendark: "#007C58",
        greenmid: "#67B171",
        lime: "#D6E865"
      },
      fontFamily: {
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 49, 60, 0.08)",
        card: "0 6px 18px rgba(0, 49, 60, 0.06)"
      }
    },
  },
  plugins: [],
}
