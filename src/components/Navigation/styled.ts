/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { keyframes, styled } from '~/styles'
import { motion } from 'framer-motion'

const top = keyframes({
  '0%': {
    transform: 'scaleX(1) rotate(0deg)',
  },
  '30%': {
    transform: 'scaleX(1.4)',
  },
  '100%': {
    transform: 'rotate(45deg) translate(-15%, -8%) scaleX(1.4)',
  },
})

const topClose = keyframes({
  '0%': {
    transform: 'rotate(45deg) translate(-15%, -8%) scaleX(1.4)',
  },
  '70%': {
    transform: 'rotate(0deg) translate(0, 0) scaleX(1.4)',
  },
  '100%': {
    transform: 'scaleX(1)',
  },
})

const bottom = keyframes({
  '0%': {
    transform: 'scaleX(1)',
  },
  '20%': {
    transform: 'scaleX(1.4) translateX(-30%)',
  },
  '100%': {
    transform: 'rotate(-45deg) translate(-55%, 8%) scaleX(1.4)',
  },
})

const bottomClose = keyframes({
  '0%': {
    transform: 'rotate(-45deg) translate(-55%, 8%) scaleX(1.4)',
  },
  '70%': {
    transform: 'rotate(0deg) translateX(-40%) scaleX(1.4)',
  },
  '100%': {
    transform: 'scaleX(1)',
  },
})

const small = keyframes({
  '0%': {
    transform: 'scaleX(1)',
  },
  '30%': {
    transform: 'scaleX(0)',
  },
  '100%': {
    transform: 'scaleX(0)',
  },
})

const smallClose = keyframes({
  '0%': {
    transform: 'scaleX(0)',
  },
  '70%': {
    transform: 'scaleX(0)',
  },
  '100%': {
    transform: 'scaleX(1)',
  },
})

const reveal = keyframes({
  '0%': {
    transform: 'scaleY(1)',
  },
  '100%': {
    transform: 'scaleY(0)',
  },
})

export const Burger = styled('button', {
  display: 'flex',
  zIndex: 'calc($nav + 10)',

  padding: '$5',
  marginRight: '-$5',

  '@largeDesktop': {
    display: 'none',
  },

  svg: {
    width: 'clamp(27px, 3vw + 1rem, 35px)',
    height: 'auto',

    '#top-long': {
      transformOrigin: 'left',
      animation: `${topClose} 700ms forwards`,
    },

    '#top-small': {
      transformOrigin: 'right',
      animation: `${smallClose} 700ms forwards`,
    },

    '#middle': {
      transition: 'all 200ms',
      transformOrigin: 'center',

      transform: 'scaleX(1)',
      transitionDelay: '200ms',
    },

    '#bottom-long': {
      transformOrigin: 'left',
      animation: `${bottomClose} 700ms forwards`,
    },

    '#bottom-small': {
      transformOrigin: 'left',
      animation: `${smallClose} 700ms forwards`,
    },
  },

  '&.visible svg': {
    '#top-long': {
      animation: `${top} 700ms forwards`,
    },

    '#top-small': {
      animation: `${small} 700ms forwards`,
    },

    '#middle': {
      transform: 'scaleX(0)',
    },

    '#bottom-long': {
      animation: `${bottom} 700ms forwards`,
    },

    '#bottom-small': {
      animation: `${small} 700ms forwards`,
    },
  },
})

export const MobileNav = styled(motion.nav, {
  display: 'flex',
  alignItems: 'stretch',

  flexDirection: 'column',
  overflowY: 'auto',

  position: 'fixed',
  inset: 0,

  paddingBlock: '$10',

  '& > a': {
    display: 'inline-flex',
    alignItems: 'flex-start',

    position: 'relative',
    transition: 'opacity 200ms',

    opacity: 0.4,
    color: '$light',

    paddingBlock: 'clamp($5, 2.5vh + 0.1rem, $7)',
    paddingInline: '$10',

    fontSize: 'clamp(30px, 2vh + 1vw + 1rem, 42px)',
    lineHeight: 'clamp(40px, 2vh + 1vw + 1rem, 52px)',

    '&::before': {
      content: '',
      zIndex: '$nav',

      transformOrigin: 'bottom',
      position: 'absolute',
      inset: 0,

      background: 'url("/assets/images/grain.png") $dark',
      backgroundSize: '20%',

      animation: `${reveal} 700ms forwards`,
    },

    '&:hover': {
      opacity: 0.7,
    },

    '&.active': {
      opacity: 1,
    },
  },

  '@desktop': {
    alignItems: 'center',
  },

  '@largeDesktop': {
    display: 'none',
  },

  '& > *:first-child': {
    marginTop: 'auto',
  },

  '& > *:last-child': {
    marginBottom: 'auto',
  },

  background: 'url("/assets/images/grain.png") $dark',
  backgroundSize: '20%',

  '& > button > svg': {
    width: 43,
    height: 30,
  },

  ':nth-child(1)::before': {
    animationDelay: '300ms',
  },

  ':nth-child(2)::before': {
    animationDelay: '350ms',
  },

  ':nth-child(3)::before': {
    animationDelay: '400ms',
  },

  ':nth-child(4)::before': {
    animationDelay: '450ms',
  },

  ':nth-child(5)::before': {
    animationDelay: '500ms',
  },

  ':nth-child(6)::before': {
    animationDelay: '550ms',
  },

  ':nth-child(7)::before': {
    animationDelay: '600ms',
  },
})

export const Nav = styled('nav', {
  alignItems: 'stretch',

  '& > a': {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '$5',

    opacity: 0.4,
    color: '$light',

    transition: 'opacity 200ms',

    '&:hover': {
      opacity: 0.7,
    },

    '&.active': {
      opacity: 1,
    },
  },

  display: 'none',
  marginRight: '-$5',

  '& > button': {
    marginLeft: '$5',
  },

  '@largeDesktop': {
    display: 'flex',
  },
})
