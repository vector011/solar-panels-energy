import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Box from '../Box'

type TProps = {
  responsive?: boolean
}

type TLogoProps = TProps

const Logo = ({ responsive }: TLogoProps) => (
  <Box
    as={Link}
    href="/"
    css={{
      width: responsive ? 'clamp(105px, 20vw + 1rem, 195px)' : undefined,
      height: responsive ? 'auto' : undefined,
    }}
  >
    <Image
      src="/assets/logo-long.svg"
      alt="JP Green Energy logo"
      width={195}
      height={67}
    />
  </Box>
)

export default memo(Logo) as typeof Logo
