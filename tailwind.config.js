module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "var(--black_900)" },
        blue: {
          100: "var(--blue_100)",
          800: "var(--blue_800)",
          900: "var(--blue_900)",
          "900_01": "var(--blue_900_01)",
          "900_02": "var(--blue_900_02)",
        },
        blue_gray: {
          100: "var(--blue_gray_100)",
          500: "var(--blue_gray_500)",
          700: "var(--blue_gray_700)",
          800: "var(--blue_gray_800)",
          900: "var(--blue_gray_900)",
          "700_01": "var(--blue_gray_700_01)",
          "900_01": "var(--blue_gray_900_01)",
        },
        gray: {
          50: "var(--gray_50)",
          600: "var(--gray_600)",
          700: "var(--gray_700)",
          "50_01": "var(--gray_50_01)",
          "50_02": "var(--gray_50_02)",
        },
        green: { 900: "var(--green_900)" },
        indigo: { 400: "var(--indigo_400)", 900: "var(--indigo_900)" },
        orange: { 400: "var(--orange_400)" },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: {},
      fontFamily: { urbanist: "Urbanist" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
