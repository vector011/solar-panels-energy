import React from 'react'
import { type ComponentProps } from '@stitches/react'
import ReactSkeleton from 'react-loading-skeleton'

import Text from '../Text'
import { theme } from '~/styles'

type TBaseProps = React.ComponentProps<typeof ReactSkeleton>
type TStyledProps = ComponentProps<typeof Text>

type TSkeletonProps = TBaseProps & TStyledProps

const Skeleton = ({ css, ...props }: TSkeletonProps) => (
  <Text
    as={ReactSkeleton}
    baseColor={theme.colors.light50.computedValue}
    highlightColor={theme.colors.light50.computedValue}
    css={{ '&&': css }}
    {...props}
  />
)

export default React.memo(Skeleton) as typeof Skeleton
