import { styled } from '~/styles'

export const Field = styled('input', {
  fontWeight: 300,
  fontSize: '$3',
  lineHeight: '$4',

  color: '$light',

  backgroundColor: 'transparent',
  border: 'none',

  borderBottom: '0.5px solid $light50',
  paddingBlock: '$3',

  transition: 'border-bottom-color 200ms',

  '&::placeholder': {
    color: '$light80',
    textTransform: 'capitalize',
  },

  '&:hover, &:focus': {
    borderBottomColor: '$light',
  },

  '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus':
    {
      '-webkit-text-fill-color': '#F6F6F6',
      transition: 'background-color 5000s ease-in-out 0s',
    },
})
