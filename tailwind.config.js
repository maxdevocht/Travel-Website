/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#FFFFFF",
          2: "#047272",
          3: "#FCDFEB",
          4: "#FFCE00",
          5: "#858DFF",
          6: "#FF98E2",
        },
      },
      fontFamily: {
        sans: "var(--font-onest)",
        phudu: "var(--font-phudu)",
        caveat: "var(--font-caveat)",
      },
    },
  },
  plugins: [],
}