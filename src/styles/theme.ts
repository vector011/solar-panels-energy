import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    palette: {
      white: '#F6F6F6',
      black: '#0A0A0A',

      black50: '#0A0A0A80',
      light50: '#F6F6F64d',
      light80: '#F6F6F680',

      red: '#FF4545',
      blue: '#576AE2',
      green: '#000E01',

      lightBlue: '#6ECBF6',
      alphaBlack: 'rgba(0, 0, 0, 0.5)',
    },

    colors: {
      light: '$palette$white',
      dark: '$palette$black',

      dark50: '$palette$black50',
      light50: '$palette$light50',
      light80: '$palette$light80',

      primary: '$palette$lightBlue',
      secondary: '$palette$blue',
      error: '$palette$red',

      modal: '$palette$alphaBlack',
      bg: '$palette$green',
    },

    space: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '12px',
      5: '16px',
      6: '20px',
      7: '24px',
      8: '32px',
      9: '40px',
      10: '48px',
      11: '56px',
      12: '64px',
      13: '72px',
      14: '80px',
      15: '88px',
      big: '100px',
      block: '120px',
      section: '160px',
      top: '260px',
    },

    fontSizes: {
      1: 'clamp(15px, 2.5vw + 0.1rem, 20px)',
      2: 'clamp(16px, 2.5vw + 0.1rem, 20px)',
      3: '20px',
      4: '24px',
      5: 'clamp(30px, 4.5vw + 1rem, 64px)',
      6: 'clamp(30px, 3.6vw + 1rem, 70px)',
      7: 'clamp(35px, 4.5vw + 1rem, 70px)',
      8: 'clamp(16px, 2vw + 0.1rem, 25px)',
    },

    lineHeights: {
      0: 'clamp(19px, 2.5vw + 0.1rem, 24px)',
      1: 'clamp(21px, 2.5vw + 0.1rem, 26px)',
      2: 'clamp(22px, 2.5vw + 0.1rem, 31px)',
      3: 'clamp(20px, 2vw + 0.1rem, 22px)',
      4: '24px',
      5: '29px',
      6: 'clamp(37px, 4.5vw + 1rem, 64px)',
      7: 'clamp(37px, 3.6vw + 1rem, 70px)',
      8: 'clamp(43px, 4.5vw + 1rem, 70px)',
    },

    radii: {
      1: '2px',
      2: '4px',
      3: '6px',
      4: '8px',
      5: '10px',
      6: '12px',
      7: '14px',
      8: '16px',
      9: '18px',
      10: '20px',
      11: '22px',
      12: '24px',
      button: '50px',
      rounded: '99999px',
    },

    zIndices: {
      bg: -1,
      base: 0,
      fg: 1,
      loading: 99,
      nav: 999,
      modal: 9999,
    },
  },

  media: {
    phone: '(min-width: 390px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
    middleDesktop: '(min-width: 1145px)',
    largeDesktop: '(min-width: 1440px)',
  },

  utils: {
    size: (value: string) => ({
      width: value,
      height: value,
    }),
  },
})
