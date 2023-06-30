/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.ts"],
  theme: {
    extend: {
      animation: {
        "spin-once": "spin 0.3s linear 1",
      },
    },
  },
  plugins: [],
};
