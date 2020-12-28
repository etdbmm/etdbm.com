module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '2rem'
        }
      },
      backgroundColor: {
        blue: '#0B0043',
        'cyan-blue': '#00A2A7',
        pink: '#FF9F9F',
        'pink-hover': '#D05A57'
      },
      backgroundImage: {
        'header-bg-mobile': "url('../assets/header-bg-mobile.svg')",
        'header-bg': "url('../assets/header-bg.svg')"
      },
      borderColor: {
        blue: '#0B0043',
        pink: '#FF9F9F',
        'pink-hover': '#D05A57'
      },
      fontFamily: {
        default: 'Quicksand, sans-serif'
      },
      textColor: {
        blue: '#0B0043',
        'cyan-blue': '#00A2A7',
        gray: '#454545',
        pink: '#FF9F9F'
      }
    }
  },
  variants: {
    extend: {
      gridColumn: ['first'],
      gridRow: ['first']
    }
  }
}
