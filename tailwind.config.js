/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
    secondary: "var(--secondary)",
    blue : "var(--blue)",
    dull : "var(--dull-blue)",
    fading : "var(--fading-blue)",
    txtblue : "var(--txt-blue)",
    },
    boxShadow: {
    ssss: "var(--ssss)",
    },
    },
    },
  plugins: [],
}

