import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--ih-font-display)", "Georgia", "serif"],
        body: ["var(--ih-font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
