/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        agmobile: {
          primary: "#dc143c",
          secondary: "#2aa9db",
          accent: "#dbd22a",
          neutral: "#06688f",
          "base-100": "#efefef",
          info: "#06688f",
          success: "#2aa9db",
          warning: "#dbd22a",
          error: "#dc143c",
        },
      },
    ],
  },
}
