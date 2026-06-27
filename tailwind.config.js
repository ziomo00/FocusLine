/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        muted: '#74748a',
      },
      boxShadow: {
        card: '0 22px 48px rgba(23, 23, 38, 0.20)',
      },
      backgroundImage: {
        'focus-card': 
          'linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(248, 246, 255, 0.90)), radial-gradient(circle at 88% 22%, rgba(68, 88, 242, 0.16), transparent 32%)',
      },
    },
  },
  plugins: [],
}

