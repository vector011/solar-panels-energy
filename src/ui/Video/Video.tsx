import { memo, useCallback, useEffect, useMemo, type HTMLProps } from 'react'
import { type ComponentProps } from '@stitches/react'
import { useInView } from 'react-intersection-observer'

import Box from '../Box'
import { getFile } from '~/utils/functions'

type TBaseProps = HTMLProps<HTMLVideoElement>
type TStyledProps = ComponentProps<typeof Box>

export type TProps = {
  time?: number
  cover?: boolean
  fullHeight?: boolean
  playInView?: boolean
  disableWebm?: boolean
}

type TVideoProps = Omit<TBaseProps, keyof TProps> & TStyledProps & TProps

const Video = ({
  src = '',
  time = 0,
  cover,
  playInView,
  disableWebm,
  fullHeight,
  css,
  ...props
}: TVideoProps) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  })

  const webm = useMemo(() => {
    return src?.replace(getFile(src)[1] || '', 'webm')
  }, [src])

  const handleInView = useCallback(
    (target: HTMLVideoElement) => {
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
        void target.play()
      }
    },
    [inView]
  )

  useEffect(() => {
    const target = entry?.target as HTMLVideoElement
    if (playInView && target) void handleInView(target)
  }, [inView, playInView, entry, handleInView])

  return (
    <Box
      as="video"
      ref={ref}
      {...props}
      css={{
        width: '100%',
        objectFit: cover ? 'cover' : undefined,
        minHeight: fullHeight ? '100vh' : undefined,
        ...css,
      }}
    >
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
    </Box>
  )
}

export default memo(Video) as typeof Video
