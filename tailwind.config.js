module.exports = {
  content: ["./*.html"], // позже легко сменишь на ./src/**/*.{js,jsx,ts,tsx}
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
