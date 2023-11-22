/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'titleBold': ['Outfit-Bold'],
        'titleExtraLight': ['Outfit-ExtraLight'],
        'titleMedium': ['Outfit-Medium'],
        'titleRegular': ['Outfit-Regular'],
        'titleSemibold': ['Outfit-Semibold'],
        'bodyRegular': ['PlusJakartaSans-Regular'],
        'bodyMedium': ['PlusJakartaSans-Medium'],
        'bodyLight': ['PlusJakartaSans-ExtraLight'],
      },
      colors: {
        'primary': "#4caf50",
        'dark': "#263b5e"
      }
    },
  },
  plugins: [],
}
