/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.ts"],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0% ": { transform: "scale(0)" },
          "100% ": { transform: "scale(1)" },
        },
      },
      animation: {
        "spin-once": "spin 0.3s linear 1",
        "grow-once": "grow 0.3s ease-out 1",
      },
    },
  },
  plugins: [],
};
