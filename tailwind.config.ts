import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    colors: {
      black: "#000000",
      current: "currentColor",
      gray: {
        100: "#808080b3",
        200: "#161616b3",
        900: "#232323",
      },
      inherit: "inherit",
      red: {
        100: "#e50914",
        200: "#c11119",
      },
      transparent: "transparent",
      white: "#ffffff",
    },
    screens: {
      lg: "1280px",
      md: "960px",
      sm: "600px",
      xl: "1920px",
    },
  },
};
export default config;
