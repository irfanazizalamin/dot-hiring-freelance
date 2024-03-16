/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ['64px', 1.7],
        h2: ['40px', 1.7],
        h3: ["32px", 1.7],
        h4: ["24px", 1.7],
        h5: ["20px", 1.7],
        h6: ['16px', 1.7],
        body: ["16px", 1.7],
        label: ["14px", 1.5],
        label2: ["12px", 1.4],
      },
    },
  },
  plugins: [],
};
