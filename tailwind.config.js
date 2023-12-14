/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        BLUE: "#3294F8",
        BASE: {
          TITLE: "#E7EDF4",
          SUBTITLE: "#C4D4E3",
          TEXT: "#AFC2D4",
          SPAN: "#7B96B2",
          LABEL: "#3A536B",
          BORDER: "#1C2F41",
          POST: "#112131",
          PROFILE: "#0B1B2B",
          BACKGROUND: "#071422",
          INPUT: "#040F1A",
        },
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
