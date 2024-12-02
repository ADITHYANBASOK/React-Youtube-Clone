/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yt-black': '#0F0F0F',
        'yt-red': '#FF0000',
        'yt-white': '#FFFFFF',
        'yt-light-black': '#272727',
        'yt-light': '#AAAAAA',
        'yt-gray': '#717171',
      },
      spacing: {
        'navbar': '3.5rem',
        'sidebar-expanded': '16rem',
        'sidebar-collapsed': '5rem',
      },
      fontSize: {
        'video-title': '1.1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}