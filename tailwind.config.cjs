/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* primary */
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        /* neutral */
        "cool-gray": " hsl(231, 11%, 63%)",
        "light-gray": " hsl(229, 24%, 87%)",
        magnolia: " hsl(217, 100%, 97%)",
        alabaster: " hsl(231, 100%, 99%)",
        white: " hsl(0, 0%, 100%)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      animation: {
        "spring-bounce": "spring-bounce 0.3s ease-in-out",
        "fade-in": "fade-in 0.3s forwards",
      },
      keyframes: {
        "spring-bounce": {
          "0%": { transform: "translateY(3px)" },
          "50%": { transform: "translateY(-3px)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
