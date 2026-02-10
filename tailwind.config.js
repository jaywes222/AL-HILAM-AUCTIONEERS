/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      /* ─── COLOR SYSTEM ─── */
      colors: {
        /* Main brand */
        secondary: "#ADD8E6",     // MAIN COLOR (dominant)
        primary: "#7B6CF6",       // Accent (purple only)

        /* Blues (supporting) */
        blue: {
          dark: "#2F4858",       // Text on light blue
          soft: "#6FA8DC",       // Borders / subtle hover
          tint: "#EAF4FB",       // Backgrounds
        },

        /* Neutrals (blue-warmed) */
        grey: {
          light: "#F2F8FB",
          mild: "#D6E9F4",
          neutral: "#8FB7CC",
          darker: "#5F7F96",
          dark: "#2F4858",
        },

        /* Purple accents */
        purple: {
          hero: "#7B6CF6",
          soft: "#9B8AFB",
          deep: "#4F46B5",
        },

        /* Status */
        error: {
          bg: "#FEF3F2",
          text: "#B42318",
        },
      },

      boxShadow: {
        header: "0 10px 30px rgba(47,72,88,0.15)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};
