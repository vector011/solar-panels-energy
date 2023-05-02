import { memo, type HTMLProps } from 'react'
import { type ComponentProps } from '@stitches/react'
import Link from 'next/link'

import * as S from './styled'

type TBaseProps = HTMLProps<HTMLButtonElement>
type TStyledProps = ComponentProps<typeof S.Button>

type TProps = {
  onClick?: () => void
  href?: string
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
  <S.Button
    as={props.href ? Link : 'button'}
    {...props}
    className={isLoading ? 'loading' : undefined}
    css={{
      alignSelf: wide ? 'center' : 'flex-start',

      width: wide ? '100%' : undefined,
      minWidth: 288,
      maxWidth: wide ? 800 : undefined,

      backgroundColor: secondary ? 'transparent' : '$primary',

      color: secondary ? '$primary' : '$dark',

      ...css,
    }}
  >
    {children}
  </S.Button>
)

export default memo(Button) as typeof Button
