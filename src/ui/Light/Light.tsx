import { memo, useRef } from 'react'
import { type ComponentProps } from '@stitches/react'

import Box from '../Box'
import { useChangeOpacityByDistance } from '~/hooks'

type TStyledProps = ComponentProps<typeof Box>

type TProps = {
  size?: number
}

type TLightProps = TStyledProps & TProps

const Light = ({ size = 428, css, ...props }: TLightProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useChangeOpacityByDistance(ref)

  /*const coefficient = useMemo(() => {
    if (typeof window === 'undefined') return 0
    return Math.abs(distance / (window.innerHeight + window.innerWidth))
  }, [distance])*/

  return (
    <Box
      ref={ref}
      css={{
        position: 'absolute',
        zIndex: '$bg',
        userSelect: 'none',

        size: `clamp(${size / 2}px, 50vw + 1rem, ${size}px)`,
        borderRadius: '$rounded',

        backgroundColor: '$primary',
        filter: 'blur(130px)',
        opacity: 0.3,

        // Safari bug fix
        backfaceVisibility: 'hidden',
        transform: 'translate3d(0, 0, 0)',

        ...css,
      }}
      {...props}
    />
  )
}

export default memo(Light) as typeof Light
