import { memo, type HTMLProps } from 'react'
import { type ComponentProps } from '@stitches/react'

import Text from '../Text'

type TBaseProps = HTMLProps<HTMLButtonElement>
type TStyledProps = ComponentProps<typeof Text>

type TProps = {
  onClick?: () => void
  isLoading?: boolean
  children?: React.ReactNode
  secondary?: boolean
  wide?: boolean
}

type TButtonProps = Omit<TBaseProps, keyof TProps> & TStyledProps & TProps

const Button = ({
  children,
  secondary,
  isLoading,
  wide,
  css,
  ...props
}: TButtonProps) => (
  <Text
    as="button"
    variant="button"
    {...props}
    className={isLoading ? 'loading' : undefined}
    css={{
      display: 'inline',
      alignSelf: wide ? 'center' : 'flex-start',

      paddingBlock: 'clamp($4, 2.5vw + 0.1rem, $6)',
      paddingInline: 'clamp($7, 2.5vw + 0.1rem, $8)',

      width: wide ? '100%' : undefined,
      minWidth: 288,
      maxWidth: wide ? 800 : undefined,

      backgroundColor: secondary ? 'transparent' : '$primary',
      boxShadow: '0px 4px 4px rgba(128, 49, 49, 0.25)',

      border: '2px solid $primary',
      borderRadius: '$button',

      color: secondary ? '$primary' : '$dark',
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

      ...css,
    }}
  >
    {children}
  </Text>
)

export default memo(Button) as typeof Button
