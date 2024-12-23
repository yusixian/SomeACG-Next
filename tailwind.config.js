module.exports = {
  darkMode: 'class', // https://tailwindcss.com/docs/dark-mode
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/hooks/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xs: { max: '475px' },
        md: { max: '768px' },
        tablet: '640px',
        xl: '1366px',
        '2xl': '1366px',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'var(--accent-100)',
          200: 'var(--accent-200)',
        },
        danger: 'var(--danger)',
        header: 'var(--bg-header)',
        text: {
          100: 'var(--text-100)',
          200: 'var(--text-200)',
        },
        bg: {
          100: 'var(--bg-100)',
          200: 'var(--bg-200)',
          300: 'var(--bg-300)',
          900: 'var(--bg-900)',
        },
        blue: {
          DEFAULT: '#49a1f5',
        },
        yellow: {
          DEFAULT: '#fec61d',
        },
        red: {
          DEFAULT: '#ec4f41',
        }
      },
      spacing: {
        21: '5.25rem',
      },
      backgroundImage: {
        gradient: 'var(--gradient-bg)',
      },
      fontFamily: {
        poppins: 'var(--font-poppins)',
        averia: 'var(--font-averia)',
      },
    },
  },
  plugins: [],
};
