import React from 'react'
import SVG, { Props as SVGProps } from 'react-inlinesvg'

import * as S from './styled'

type Props = {
  name: string
} & Omit<SVGProps, 'src'>

const Icon = ({ name, ...props }: Props) => (
  <SVG src={`/assets/icons/${name}.svg`} {...props} />
)

export default React.memo(Icon)
