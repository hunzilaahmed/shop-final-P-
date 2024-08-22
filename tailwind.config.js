/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceHorizontal: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translatey(20px)" },
        },
      },
      animation: {
        "bounce-horizontal": "bounceHorizontal 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
