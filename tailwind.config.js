/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        nunitoSans: ["Nunito Sans", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          default: "1200px",
        },
      },
      colors: {
        blue: {
          DEFAULT: "#162466",
          100: "#F5F7FF",
          200: "#E9F7FF",
          300: "#E9F0FF",
          500: "#5956E8",
          600: "#FFD1C8",
          900: "#181B31",
        },
        green: {
          700: "#38E55E",
        },
        red: {
          DEFAULT: "#FF3B33",
          100: "#FFF8F8",
          400: "#FFDBD4",
          700: "#FF1850",
        },
        yellow: {
          DEFAULT: "#FFB545",
          300: "#FFF3CA",
          700: "#FFDC60",
        },
        gray: {
          DEFAULT: "#555555",
          100: "#ECECEC",
          200: "#dcdcdc",
          300: "#d0d0d0",
          800: "#CFCFCF",
        },
      },
      backgroundImage: {
        hero_bg: "url(/src/assets/hero-bg.png)",
        hero_image: "url(/src/assets/hero-image.png)",
        banner_about: "url(/src/assets/about-banner.png)",
        banner_service: "url(/src/assets/service-banner.png)",
        banner_contact: "url(/src/assets/contact-banner.png)",
        subscribe: "url(/src/assets/Subscribe-bg-img.png)",
        statistic: "url(/src/assets/statistic-img.png)",
        cta_bg: "url(/src/assets/bg-cta.png)",
      },
    },
  },
  plugins: [],
};
