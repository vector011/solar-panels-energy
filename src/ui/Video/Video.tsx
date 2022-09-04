import React, {
  useCallback,
  useEffect,
  useMemo,
  VideoHTMLAttributes,
} from 'react'
import { useInView } from 'react-intersection-observer'
import { FlattenInterpolation, ThemeProps } from 'styled-components'

import type { TTheme } from 'styles/theme'
import { getFile } from 'utils/functions'

import * as S from './styled'

export type Props = {
  time?: number
  cover?: boolean
  fullHeight?: boolean
  playInView?: boolean
  disableWebm?: boolean
  css?: FlattenInterpolation<ThemeProps<TTheme>>
} & VideoHTMLAttributes<HTMLVideoElement>

// TODO: video size

const Video = ({ src, time = 0, playInView, disableWebm, ...props }: Props) => {
  const { ref, inView, entry } = useInView()

  const file = useMemo(() => getFile(src!), [src])
  const webm = useMemo(() => src?.replace(file[1], 'webm'), [file, src])

  const handleInView = useCallback(
    async (target: HTMLVideoElement) => {
      const isPlaying =
        target.currentTime > 0 &&
        !target.paused &&
        !target.ended &&
        target.readyState > target.HAVE_CURRENT_DATA

      if (!inView && isPlaying) {
        return target.pause()
      }

      if (inView && !isPlaying) {
        target.currentTime = 0
        await target.play()
      }
    },
    [inView]
  )

  useEffect(() => {
    const target = entry?.target as HTMLVideoElement
    if (playInView && target) handleInView(target)
  }, [inView, playInView, entry, handleInView])

  return (
    <S.Wrapper ref={ref} {...props}>
      {!disableWebm && (
        <source
          src={`/assets/videos/${webm}${time ? `#t=${time}` : ''}`}
          type="video/webm"
        />
      )}
      <source
        src={`/assets/videos/${src}${time ? `#t=${time}` : ''}`}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </S.Wrapper>
  )
}

export default React.memo(Video)
