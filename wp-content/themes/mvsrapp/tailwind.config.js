module.exports = {
  mode: 'jit',
  purge: {
    content: ["./_views/**/*.twig", './safelist.txt'],
  },
  theme: {
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    fontFamily: {
      sans: ["'Exo 2'", "sans-serif"],
    },
    filter: {
      none: "none",
      grayscale: "grayscale(1)",
    },
    extend: {
      colors: {
        'noir': {
          DEFAULT: '#0B0E13',
          50: '#3D4E6A',
          100: '#384761',
          200: '#2D394D',
          300: '#212B3A',
          400: '#161C26',
          500: '#0B0E13',
          600: '#090C10',
          700: '#07090D',
          800: '#050709',
          900: '#040406',
          950: '#030304'
        },
        'highlight': {
          DEFAULT: '#FFD600',
          50: '#FFF4B8',
          100: '#FFF0A3',
          200: '#FFEA7A',
          300: '#FFE352',
          400: '#FFDD29',
          500: '#FFD600',
          600: '#E6C100',
          700: '#CCAB00',
          800: '#B39600',
          900: '#998000',
          950: '#8C7600'
        },
        'messi': {
          DEFAULT: '#00B9BF',
          50: '#78FBFF',
          100: '#63FAFF',
          200: '#3AF9FF',
          300: '#12F8FF',
          400: '#00E1E8',
          500: '#00B9BF',
          600: '#00969B',
          700: '#007478',
          800: '#005154',
          900: '#002F30',
          950: '#001D1E'
        },
        'ronaldo': {
          DEFAULT: '#FE317E',
          50: '#FFE8F0',
          100: '#FFD3E4',
          200: '#FFABCA',
          300: '#FE82B1',
          400: '#FE5A97',
          500: '#FE317E',
          600: '#F6015D',
          700: '#BE0148',
          800: '#860133',
          900: '#4E001E',
          950: '#320013'
        },
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      inset: (theme, { negative }) => ({
        full: "100%",
        "1/2": "50%",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        25: "25vh",
        50: "50vh",
        75: "75vh",
      }),
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
    padding: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
  },
  plugins: [
    //require('@tailwindcss/forms'),
  ],
  corePlugins: {
    container: false,
  },
};
