import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center:true,
      screens: {
        'sm': '450px',
        'md': '768px',
        'lg': '1020px',
        'xl': '1250px',
        '2xl': '1450px',
        'custom': '1250px', 
      },

    },
    extend: {
      
      fontFamily: {
        kaushan: 'var(--font-kaushan)', // Add KaushanScript as a utility
        acilonica: ["Aclonica", "sans-serif"],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
