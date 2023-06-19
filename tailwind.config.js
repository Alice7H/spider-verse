/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'hero-pattern': 'linear-gradient(#0069e3,#0056ba)'
    },
    extend: {
      'maxWidth': {
        'hero': '1920px',
      },
      height: {
        'spider-man-616-height': '360px',
        'spider-woman-65-height': '300px',
        'spider-man-1610-height': '324px',
        'spider-man-dr-14512-height': '324px',
        'spider-man-8311-height': '146px',
        'spider-man-90214-height': '376px',
        'spider-man-928-height': '360px',
      }
    }
  },
  plugins: [],
}
