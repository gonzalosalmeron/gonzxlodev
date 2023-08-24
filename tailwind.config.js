/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s infinite',
        'spin-slow': 'spin 32s linear infinite',
        'float': 'floating 4s infinite ease-in-out',
        'blink': 'blink infinite 2s ease-in',
      },
      keyframes: {
        'cursor-blink': {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        floating: {
          '0%': { transform: 'translate(0,  0px)' },
          '50%':  { transform: 'translate(0, 15px)' },
          '100%': { transform: 'translate(0, -0px)' } 
        },
        blink: {
            '0%': { boxShadow: '0px -4px 30px 3px rgb(253 224 71)'},
            '4%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 0)'},
            '8%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 71)'},
            '12%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 0)'},
            '16%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 71)'},
            '20%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 0)'},
            '24%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 71)'},
            '26%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 0)'},
            '30%': { boxShadow: '0px -4px 30px 3px rgba(253, 223, 71, 71)'},
            '80%': { boxShadow: '0px -4px 30px 3px rgb(253 224 71)'},
            '100%': { boxShadow: '0px -4px 30px 3px rgb(253 224 71);'},
        }
      },
    },
  },
  plugins: [],
}
