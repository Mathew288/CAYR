/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      backgroundImage: theme => ({
        'your-image': "url('/src/assets/n667d7.jpg')",
    })
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),

  ],
}