/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#003349",
        cream: "#FFE4CC",
        regalBlue: "#004765",
      },
      keyframes: {
        wave: {
          "0%": { backgroundColor: "hsl(200, 20%, 80%)" },
          "100%": { backgroundColor: "hsl(200, 20%, 95%)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "spin-slow": "spin 2s ease-in-out infinite  ",
      },
    },
  },
  plugins: [],
};
