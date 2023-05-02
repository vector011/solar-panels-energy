import { motion } from 'framer-motion'
import { memo } from 'react'

import { Box, Skeleton } from '~/ui'

type TBaseProps = React.ComponentProps<typeof motion.article>

const PanelSkeleton = (props: TBaseProps) => (
  <Box
    as={motion.article}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    {...props}
    css={{
      alignItems: 'center',
      padding: '$9',
      gap: '$7',
    }}
  >
    <Skeleton
      width={240}
      height={150}
      css={{
        width: '100%',
        height: '100%',
        maxWidth: 240,
        aspectRatio: '16/9',
      }}
    />

    <Box
      css={{
        justifyContent: 'space-between',
        gap: '$7',
        flex: 1,
        width: '100%',
      }}
    >
      <Box css={{ gap: '$8' }}>
        <Skeleton variant="paragraph2" css={{ textTransform: 'uppercase' }} />

        <Box css={{ gap: '$5' }}>
          <Skeleton variant="paragraph2" css={{ textTransform: 'uppercase' }} />
          <Skeleton variant="paragraph2" css={{ textTransform: 'uppercase' }} />
          <Skeleton variant="paragraph2" css={{ textTransform: 'uppercase' }} />
        </Box>
      </Box>

      <Skeleton width={170} height={50} />
    </Box>
  </Box>
)

export default memo(PanelSkeleton) as typeof PanelSkeleton
