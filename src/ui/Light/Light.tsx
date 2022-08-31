import React, { useMemo, useRef } from 'react'

import { useDistanceFrom } from 'hooks'
import { clamp } from 'utils/functions'
import type { TThemeColor } from 'styles/theme'

import * as S from './styled'

type Appearance = 'size' | 'top' | 'right' | 'bottom' | 'left'

export type Props = {
  bg?: TThemeColor
} & PartialRecord<Appearance, number | string>

// TODO: zIndex and size

const Light = ({ bg = 'primary', size = 428, ...props }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const distance = useDistanceFrom(ref)

  const coefficient = useMemo(
    () => Math.abs(distance / (window.innerHeight + window.innerWidth)),
    [distance, window.innerHeight, window.innerWidth]
  )

  return (
    <S.Wrapper
      style={{ opacity: clamp(0.3, 0.5 - coefficient, 0.7) }}
      {...{ ref, bg, size, ...props }}
    />
  )
}

export default React.memo(Light)
