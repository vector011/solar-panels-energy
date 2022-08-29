import React, { useCallback, useEffect, VideoHTMLAttributes } from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './styled'

export type Props = {
  time?: number
  cover?: boolean
  fullHeight?: boolean
  playInView?: boolean
} & VideoHTMLAttributes<HTMLVideoElement>

const Video = ({ src, time = 0, playInView, ...props }: Props) => {
  const { ref, inView, entry } = useInView()

  const handleInView = useCallback(
    async (target: HTMLVideoElement) => {
      if (!inView) return target.pause()
      target.currentTime = 0
      await target.play()
    },
    [inView]
  )

  useEffect(() => {
    const target = entry?.target as HTMLVideoElement
    if (playInView && target) handleInView(target)
  }, [inView, playInView, entry, handleInView])

  return (
    <S.Wrapper
      ref={ref}
      src={`/assets/videos/${src}${time ? `#t=${time}` : ''}`}
      {...props}
    >
      Your browser does not support the video tag.
    </S.Wrapper>
  )
}

export default React.memo(Video)
