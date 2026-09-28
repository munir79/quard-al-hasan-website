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
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          light: "var(--primary-light)",
          muted: "var(--primary-muted)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          hover: "var(--secondary-hover)",
          light: "var(--secondary-light)",
        },
        ppt: {
          cyan: "var(--ppt-cyan)",
          deep: "var(--ppt-cyan-deep)",
          light: "var(--ppt-cyan-light)",
          bg: "var(--ppt-cyan-bg)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          light: "var(--accent-light)",
        },
        brand: {
          bg: "var(--brand-bg)",
          surface: "var(--brand-surface)",
          card: "var(--brand-card)",
          cardHover: "var(--brand-card-hover)",
          border: "var(--brand-border)",
          text: "var(--brand-text)",
          muted: "var(--brand-muted)",
          dark: "var(--brand-dark)",
          darker: "#040711",
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px var(--primary-glow)",
        "glow-cyan": "0 0 25px -5px rgba(0, 240, 255, 0.4)",
        "glow-indigo": "0 0 25px -5px rgba(99, 102, 241, 0.4)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--brand-border)",
        "card-hover": "0 16px 36px -4px rgba(0, 0, 0, 0.7), 0 0 24px -4px rgba(0, 240, 255, 0.3)",
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
