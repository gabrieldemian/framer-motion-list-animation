module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        xl: '0rem'
      }
    },
    backgroundColor: {
      primary: "var(--bg-primary)",
      secondary: "var(--bg-secondary)",
      accent: "var(--bg-accent)",
    },
    textColor: {
      primary: "var(--text-primary)",
      secondary: "var(--text-secondary)",
      accent: "var(--text-accent)",
    },
    colors: {
      primary: 'rgb(255, 38, 98)',
      secondary: 'rgb(255, 98, 158)'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '900px',
          },
          '@screen 2xl': {
            maxWidth: '1400px',
          },
        },
      })
    },
  ],
}
