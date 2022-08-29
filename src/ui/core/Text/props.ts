import type { TThemeSize, TThemeColor } from 'styles/theme'

type Spacing = TThemeSize | number | Omit<string, TThemeSize>
type Color = TThemeColor | Omit<string, TThemeColor>
type Align = 'center' | 'left' | 'right' | 'justify'
type Transform = 'uppercase' | 'lowercase' | 'capitalize'
type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type TTextVisualProps = {
  fontSize?: Spacing
  fontWeight?: Weight
  lineHeight?: Spacing
  color?: Color
}

export type TTextTranformProps = {
  textTransform?: Transform
  textAlign?: Align
  uppercase?: boolean
}
