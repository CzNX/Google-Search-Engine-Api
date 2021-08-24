const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const comps = {
        ".link": {
          "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
          },
        },
        ".btn": {
          background: "#f8f9fa",
        },
      };

      addComponents(comps);
    }),

    require("@tailwindcss/line-clamp"),
  ],
};
