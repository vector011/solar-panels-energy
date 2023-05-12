import React from 'react'
import SVG, { type Props } from 'react-inlinesvg'

type TProps = {
  name: string
}

type TIconProps = Omit<Props, 'src'> & TProps

const Icon = ({ name, ...props }: TIconProps) => (
  <SVG src={`/assets/icons/${name}.svg`} {...props} />
)

export default React.memo(Icon) as typeof Icon
