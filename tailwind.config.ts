import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'azure-blue': 'var(--color-azure-blue)',
        'electric-purple': 'var(--color-electric-purple)',
        'light-gray': 'var(--color-light-gray)',
        'deep-navy': 'var(--color-deep-navy)',
        'tech-green': 'var(--color-tech-green)',
        'soft-cyan': 'var(--color-soft-cyan)',
        'magenta': 'var(--color-magenta)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-magiklabs": "linear-gradient(135deg, var(--color-azure-blue), var(--color-electric-purple))",
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;