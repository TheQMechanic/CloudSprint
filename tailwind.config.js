export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        footer: '0 20px 45px rgba(15, 23, 42, 0.28)',
      },
    },
  },
  plugins: [],
};
