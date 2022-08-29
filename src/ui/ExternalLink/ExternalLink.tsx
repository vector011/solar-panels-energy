import React, { AnchorHTMLAttributes, useMemo } from 'react'

import * as S from './styled'

type Props = {
  type?: 'mail' | 'phone' | 'default'
  children?: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

const ExternalLink = ({
  type = 'default',
  href,
  children,
  ...props
}: Props) => {
  const prefix = useMemo(
    () =>
      ({
        mail: 'mailto:',
        phone: 'tel:',
        default: '',
      }[type]),
    [type]
  )

  return (
    <S.Wrapper rel="noreferrer noopener" href={`${prefix}${href}`} {...props}>
      {children}
    </S.Wrapper>
  )
}

export default React.memo(ExternalLink)
