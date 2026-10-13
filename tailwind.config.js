/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4D47D7",
          hover: "#3d37c9",
          light: "#f0effe",
          muted: "#7873ec",
          50: "#f3f2ff",
          100: "#ecebff",
          200: "#dcd9fd",
          300: "#c2beea",
          400: "#9c96f4",
          500: "#746df0",
          600: "#4D47D7",
          700: "#3d37c9",
          800: "#332ea7",
          900: "#2c2787",
        },
        secondary: {
          DEFAULT: "#6366f1",
          hover: "#4f46e5",
          light: "#eef2ff",
        },
        accent: {
          DEFAULT: "#0ea5e9",
          hover: "#0284c7",
          light: "#e0f2fe",
        },
        brand: {
          bg: "#ffffff",
          surface: "#f8fafc",
          card: "#ffffff",
          cardHover: "#fbfbfe",
          border: "#e2e8f0",
          text: "#0f172a",
          muted: "#64748b",
          dark: "#1e293b",
          darker: "#0f172a",
          primary: "#4D47D7",
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(77, 71, 215, 0.35)",
        "glow-primary": "0 0 25px -5px rgba(77, 71, 215, 0.45)",
        card: "0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 4px 16px -2px rgba(15, 23, 42, 0.04), 0 0 0 1px rgba(226, 232, 240, 0.8)",
        "card-hover": "0 20px 35px -8px rgba(77, 71, 215, 0.12), 0 0 0 1px rgba(77, 71, 215, 0.25)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-right": "slideRight 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};

