import { styled } from '~/styles'
import { Field as FormikField } from 'formik'

export const Field = styled(FormikField, {
  fontWeight: 400,
  fontSize: '$2',
  lineHeight: '$0',

  color: '$light',

  backgroundColor: 'transparent',
  border: 'none',

  borderBottom: '0.5px solid $light50',
  paddingBlock: '$3',

  transition: 'border-bottom-color 200ms',

  '$:disabled': {
    cursor: 'not-allowed',
  },

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
