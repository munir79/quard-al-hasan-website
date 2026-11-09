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
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          cobalt: "#2563EB",
          violet: "#7C3AED",
          light: "#EEF2FF",
          muted: "#818CF8",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#1E1B4B",
        },
        accent: {
          DEFAULT: "#A855F7",
          hover: "#9333EA",
          light: "#FAF5FF",
          orchid: "#A855F7",
          fuchsia: "#C026D3",
          blue: "#2563EB",
        },
        brand: {
          bg: "#FFFFFF",
          surface: "#F8FAFC",
          card: "#FFFFFF",
          cardHover: "#FBFBFE",
          border: "#E2E8F0",
          text: "#0F172A",
          muted: "#64748B",
          dark: "#0B0F19",
          darker: "#05070D",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "logo-gradient": "linear-gradient(135deg, #7C3AED 0%, #4F46E5 45%, #2563EB 100%)",
        "logo-gradient-hover": "linear-gradient(135deg, #6D28D9 0%, #4338CA 45%, #1D4ED8 100%)",
        "logo-accent-gradient": "linear-gradient(135deg, #A855F7 0%, #6366F1 50%, #2563EB 100%)",
      },
      boxShadow: {
        "logo-glow": "0 10px 30px -10px rgba(79, 70, 229, 0.35)",
        "logo-glow-lg": "0 20px 40px -15px rgba(37, 99, 235, 0.4)",
        card: "0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 4px 16px -2px rgba(15, 23, 42, 0.05)",
        "card-hover": "0 20px 35px -8px rgba(79, 70, 229, 0.15), 0 1px 2px rgba(15, 23, 42, 0.04)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        shimmer: "shimmer 2.5s infinite linear",
      },
    },
  },
  plugins: [],
};
