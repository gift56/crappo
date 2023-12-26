/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3671E9",
        dark: "#0D0D2B",
        gray1: "#ffffff1a",
        textgray: "#E0E0E0",
        textgray2: "#828282",
        secondary: "#2B076E",
        cardColor: "#491F98",
        chartBgColor: "#35068C",
      },
      backgroundImage: {
        heroLinear:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.49%, rgba(255, 255, 255, 0.04) 39.06%, rgba(255, 255, 255, 0.00) 99.92%)",
        chartLinear:
          "linear-gradient(180deg, rgba(40, 5, 105, 0.00) 46.14%, rgba(51, 7, 133, 0.70) 100%)",
      },
      boxShadow: {
        exchangeShad: "0px 80px 40px 0px #391777",
      },
    },
  },
  plugins: [],
};
