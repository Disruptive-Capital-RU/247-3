/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        silver: {
          50: "#f9f9f9",
          100: "#D1D1D1",
          200: "#B8B8B8",
          300: "#A0A0A0",
          400: "#888888",
          500: "#707070",
          600: "#585858",
          700: "#404040",
          800: "#282828",
          900: "#101010",
        },
      },
      animation: {
        "sparkle-enter-exit": "sparkle-enter-exit 1s ease-in-out forwards",
        scroll:
          "scroll var(--duration, 40s) var(--direction, forwards) linear infinite",
        "scroll-reverse":
          "scroll var(--duration, 40s) var(--direction, backwards) linear infinite",
        "scroll-fast":
          "scroll var(--duration, 20s) var(--direction, forwards) linear infinite",
        "scroll-normal":
          "scroll var(--duration, 40s) var(--direction, forwards) linear infinite",
        "scroll-slow":
          "scroll var(--duration, 60s) var(--direction, forwards) linear infinite",
        pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "sparkle-enter-exit": {
          "0%": {
            transform: "scale(0) rotate(0deg)",
            opacity: 0,
          },
          "50%": {
            transform: "scale(1) rotate(90deg)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(0) rotate(180deg)",
            opacity: 0,
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
      },
      fontFamily: {
        sans: ["Inter var", "Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-default": {
          /* Firefox */
          "scrollbar-width": "auto",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
      });
    },
  ],
};
