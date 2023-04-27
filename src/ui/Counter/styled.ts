import { styled } from '~/styles'

export const Button = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  size: '50px',

  fontWeight: 300,
  fontSize: '$3',
  lineHeight: '$4',

  transition: 'all 200ms',

  '&:hover:not(:disabled)': {
    backgroundColor: '$secondary',
    borderColor: '$secondary',
    color: '$light',
  },

  '&:active:not(:disabled)': {
    backgroundColor: '$dark',
  },
})
