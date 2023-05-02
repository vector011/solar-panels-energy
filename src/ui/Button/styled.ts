import { styled } from '~/styles'

export const Button = styled('button', {
  display: 'inline',

  paddingBlock: 'clamp($4, 2.5vw + 0.1rem, $6)',
  paddingInline: 'clamp($7, 2.5vw + 0.1rem, $8)',

  fontWeight: 400,
  fontSize: '$2',
  lineHeight: '$0',

  boxShadow: '0px 4px 4px rgba(128, 49, 49, 0.25)',
  border: '2px solid $primary',
  borderRadius: '$button',

  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 200ms',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:hover:not(:disabled)': {
    backgroundColor: '$secondary',
    borderColor: '$secondary',
    color: '$light',
  },

  '&:active:not(:disabled)': {
    backgroundColor: '$dark',
  },
})
