const palette = {
  white: '#F6F6F6',
  black: '#0A0A0A',
  red: '#FF4545',
  blue: '#576AE2',
  green: '#000E01',
  lightBlue: '#6ECBF6',
  alphaBlack: 'rgba(0, 0, 0, 0.5)',
} as const

const THEME = {
  colors: {
    light: palette.white,
    dark: palette.black,
    primary: palette.lightBlue,
    secondary: palette.blue,
    error: palette.red,
    modal: palette.alphaBlack,
    bg: palette.green,
  },

  sizes: {
    '4xs': '2px',
    '3xs': '4px',
    xxs: '8px',
    xs: '12px',
    s: '16px',
    sm: '20px',
    m: '24px',
    l: '32px',
    xl: '40px',
    xxl: '48px',
    '3xl': '56px',
    '4xl': '64px',
    '5xl': '72px',
    '6xl': '80px',
    '7xl': '88px',
    big: '100px',
    block: '120px',
    section: '160px',
    top: '260px',
  },

  borderRadii: {
    rounded: '50%',
    button: '50px',
    card: '16px',
    video: '24px',
  },

  zIndices: {
    bg: -1,
    base: 1,
    loading: 9,
    nav: 999,
    modal: 9999,
  },

  breakpoints: {
    phone: 0,
    tablet: 768,
    desktop: 1024,
    largeDesktop: 1440,
    modal: 1200,
    container: 1600,
  },

  textVariants: {
    heading1: `
      font-family: "Visuelt", sans-serif;
      font-weight: 300;
      font-size: clamp(35px, 4.5vw + 1rem, 88px);
      line-height: clamp(43px, 4.5vw + 1rem, 88px);
    `,
    heading2: `
      font-family: "Visuelt", sans-serif;
      font-weight: 300;
      font-size: clamp(30px, 4.5vw + 1rem, 80px);
      line-height: clamp(37px, 4.5vw + 1rem, 80px);
    `,
    homepage: `
      font-family: "Visuelt", sans-serif;
      font-weight: 400;
      font-size: clamp(30px, 3.6vw + 1rem, 88px);
      line-height: clamp(37px, 3.6vw + 1rem, 88px);
    `,
    subheading: `
      font-family: "Visuelt", sans-serif; // Inter
      font-weight: 300;
      font-size: clamp(15px, 2.5vw + 0.1rem, 20px);
      line-height: clamp(19px, 2.5vw + 0.1rem, 24px);
      text-transform: uppercase;
    `,
    subheading2: `
      font-family: "Visuelt", sans-serif; // Inter
      font-weight: 400;
      font-size: clamp(16px, 2vw + 0.1rem, 25px);
      line-height: clamp(22px, 2.5vw + 0.1rem, 31px);
    `,
    paragraph: `
      font-family: "Visuelt", sans-serif; // Inter
      font-weight: 300;
      font-size: clamp(15px, 2.5vw + 0.1rem, 20px);
      line-height: clamp(21px, 2.5vw + 0.1rem, 26px);
    `,
    paragraph2: `
      font-family: "Visuelt", sans-serif; // Inter
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
    `,
    navlink: `
      font-family: "Visuelt", sans-serif;
      font-weight: 300;
      font-size: 24px;
      line-height: 29px;
    `,
    button: `
      font-family: "Visuelt", sans-serif; // Inter
      font-weight: 400;
      font-size: clamp(16px, 2.5vw + 0.1rem, 20px);
      line-height: clamp(19px, 2.5vw + 0.1rem, 24px);
    `,
    footer: `
      font-family: "Visuelt", sans-serif; // Inter
      font-weight: 400;
      font-size: clamp(16px, 2vw + 0.1rem, 18px);
      line-height: clamp(20px, 2vw + 0.1rem, 22px);
    `,
  },
} as const

export type TTheme = typeof THEME

export type TThemeColor = keyof TTheme['colors']

export type TThemeSize = keyof TTheme['sizes']

export type TThemeBorderRadius = keyof TTheme['borderRadii']

export type TThemeZIndex = keyof TTheme['zIndices']

export type TThemeBreakpoint = keyof TTheme['breakpoints']

export type TThemeTextVariant = keyof TTheme['textVariants']

export default THEME
