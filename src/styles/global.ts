import { globalCss, keyframes } from './theme'

const dualRign = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    outline: 0,
    margin: 0,
    padding: 0,
  },

  '#__next': {
    overflow: 'hidden',
  },

  html: {
    backgroundColor: '$bg',
  },

  body: {
    background: 'url("/assets/images/background.png") $bg',
    backgroundSize: '20.9%',
    backgroundPositionX: '63.2%',

    color: '$light',

    fontSize: '$3',
    lineHeight: '$4',
    fontWeight: 300,
  },

  'input, button, textarea, select': {
    fontFamily: 'inherit',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'inherit',
    fontStyle: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  },

  img: {
    display: 'block',
  },

  iframe: {
    border: 'none',
    display: 'block',
  },

  a: {
    textDecoration: 'none',
  },

  button: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: 'inherit',
    border: 'none',
  },

  '.loading': {
    position: 'relative',
    pointerEvents: 'none',
    cursor: 'progress',

    '&:before': {
      content: '',
      display: 'inline-flex',

      zIndex: '$loading',
      position: 'absolute',
      inset: 0,

      background: 'inherit',
      borderRadius: 'inherit',
      opacity: 0.9,
    },

    '&:after': {
      content: ' ',
      display: 'inline-flex',

      zIndex: 'calc($loading + 9)',
      position: 'absolute',
      top: 'calc(50% - 10px)',
      left: 'calc(50% - 10px)',

      size: '15px',

      borderRadius: '$rounded',
      border: '3px solid $dark',
      borderColor: '$light transparent $light transparent',

      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      animation: `${dualRign} 1.2s linear infinite`,
    },
  },
})
