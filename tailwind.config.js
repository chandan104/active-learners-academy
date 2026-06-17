/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c4d5ff',
          300: '#9bb5ff',
          400: '#6b8cff',
          500: '#4361ee',
          600: '#2c45d9',
          700: '#2335b0',
          800: '#212e8e',
          900: '#1f2b6e',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc170',
          400: '#ff9c37',
          500: '#ff7f11',
          600: '#f05f07',
          700: '#c74408',
          800: '#9e360f',
          900: '#7f2f10',
        },
        navy: {
          50: '#f0f3f7',
          100: '#dce3ed',
          200: '#bdc9db',
          300: '#95a7c4',
          400: '#6e84ab',
          500: '#526994',
          600: '#405379',
          700: '#354362',
          800: '#2e3953',
          900: '#1a2133',
        }
      }
    },
  },
  plugins: [],
}
