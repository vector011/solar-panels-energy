import { css } from '~/styles'

export const wrapperResponsive = css({
  '@phone': {
    flexDirection: 'column',

    '& > div:last-of-type': {
      alignSelf: 'center',
    },
  },

  '@tablet': {
    alignItems: 'center',

    '& > div, nav': {
      alignItems: 'center',
    },
  },

  '@desktop': {
    flexDirection: 'row',
    alignItems: 'flex-start',

    '& > div, nav': {
      alignItems: 'stretch',
    },

    '& > div:last-of-type': {
      width: '100%',
      alignItems: 'center',
    },
  },

  '@middleDesktop': {
    flexDirection: 'row',
    alignItems: 'flex-start',

    '& > div, nav': {
      alignItems: 'stretch',
    },

    '& > div:last-of-type': {
      width: 'auto',
      alignItems: 'flex-start',
      alignSelf: 'flex-start',
    },
  },
})
