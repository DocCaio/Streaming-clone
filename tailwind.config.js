module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'batman': "url('/img/batman')",
        'rrr': "url('/img/movie/background.jpg')"
      },
    
      fontFamily: {
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
