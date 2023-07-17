/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'batman': "url('/img/batman.jpg')",        
        'footer-texture': "url('/img/footer-texture.png')",
      }
    
    },
  },
  plugins: [],
}

