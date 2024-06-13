interface TailwindConfig {
  darkMode: "class" | "media" | false;
  content: string[];
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"];
      };
    };
  };
  plugins: string[];
}

const config: TailwindConfig = {
  darkMode: "class", /// if chnaged to media then mode will be selected based on users system settings
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
