import { styled } from '~/styles'

export const Item = styled('li', {
  display: 'flex',
  alignItems: 'center',

  paddingBlock: '$7',
  paddingRight: '9%',

  borderBottom: '0.5px solid $light',

  '&::before': {
    content: '',

    display: 'inline-block',
    alignSelf: 'flex-start',
    flexShrink: 0,

    size: 8,
    borderRadius: '$rounded',

    marginTop: '0.6ch',

    backgroundColor: '$light',
    marginRight: '$5',

    '@tablet': {
      marginRight: '$8',
    },

    '@desktop': {
      marginRight: '$11',
    },
  },
})
