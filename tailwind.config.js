/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6EC1E4',
        accent: '#61CE70',
        dark: 'rgb(var(--bg) / <alpha-value>)',
        darker: '#0D0D0D',
        card: 'rgb(var(--bg-elevated) / <alpha-value>)',
        soft: 'rgb(var(--bg-soft) / <alpha-value>)',
        mid: 'rgb(var(--mid) / <alpha-value>)',
        body: 'rgb(var(--body-c) / <alpha-value>)',
        heading: 'rgb(var(--heading) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
      },
      fontFamily: {
        slab: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        morph: {
          '0%,100%': { borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' },
          '33%': { borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%' },
          '66%': { borderRadius: '70% 30% 50% 50% / 40% 70% 30% 60%' },
        },
        waPulse: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        waPulse: 'waPulse 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
