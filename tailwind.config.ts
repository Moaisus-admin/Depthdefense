interface TailwindConfig {
  darkMode: "class" | "media" | false;
  content: string[];
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"];
      };
      animation: {
        marquee: string;
        "marquee-vertical": string;
        "marquee-reverse": string;
        ripple: string; // Add ripple animation
      };
      keyframes: {
        marquee: {
          from: { transform: string };
          to: { transform: string };
        };
        "marquee-vertical": {
          from: { transform: string };
          to: { transform: string };
        };
        "marquee-reverse": {
          from: { transform: string };
          to: { transform: string };
        };
        ripple: {
          "0%, 100%": { transform: string };
          "50%": { transform: string };
        };
      };
    };
  };
  plugins: string[];
}

const config: TailwindConfig = {
  darkMode: "class", // Set darkMode to "class" for class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // If using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "marquee-reverse": "marquee-reverse var(--duration) linear infinite",
        ripple: "ripple 3400ms ease infinite", // Add ripple animation
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(100%)" }, // Start from right
          to: { transform: "translateX(calc(-100% - var(--gap)))" }, // Move to left
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(calc(-100% - var(--gap)))" }, // Start from left
          to: { transform: "translateX(100%)" }, // Move to right
        },
        ripple: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
