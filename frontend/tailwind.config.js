/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      feedback: {
        alert_1: "#cd2b31",
        alert_2: "#fdd8d8",
        alert_3: "#ffe5e5",
        sucess_1: "#18794e",
        sucess_2: "#ccebd7",
        sucess_3: "#ddf3e4",
      },
      random: {
        random_1: "#e34d8c",
        random_2: "#c04277",
        random_3: "#7d2a4d",
        random_4: "#7000ff",
        random_5: "#6200e3",
        random_6: "#36007d",
        random_7: "#349974",
        random_8: "#2a7d5f",
        random_9: "#153d2e",
        random_10: "#6100ff",
        random_11: "#5700e3",
        random_12: "#30007d",
      },
      brand: {
        brand_1: "#4529e6",
        brand_2: "#5126ea",
        brand_3: "#b0a6f0",
        brand_4: "#edeafd",
      },
      grey: {
        grey_0: "#0b0d0d",
        grey_1: "#212529",
        grey_2: "#495057",
        grey_3: "#868e96",
        grey_4: "#adb5bd",
        grey_5: "#ced4da",
        grey_6: "#dee2e6",
        grey_7: "#e9ecef",
        grey_8: "#f1f3f5",
        grey_9: "#f8f9fa",
        grey_10: "#fdfdfd",
      },
      colors_color_white_fixed: "#ffffff",
      transparent: "transparent"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
