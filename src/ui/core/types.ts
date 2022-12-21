import type { TThemeColor, TThemeSize, TThemeZIndex } from 'styles/theme'

type Spacing = TThemeSize | number | Omit<string, TThemeSize>
type TIndices = TThemeZIndex | Omit<string, TThemeZIndex>
type TBackground = TThemeColor | Omit<string, TThemeColor>

type TPlacement =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'space-between'
  | 'space-around'
  | 'stretch'

export type TClamp = { clamp: [Spacing, Spacing, Spacing] }

type TPaddingProps =
  | 'padding'
  | 'paddingVertical'
  | 'paddingHorizontal'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'

type TPaddingShorthandProps =
  | /** @alias padding */ 'p'
  | /** @alias paddingVertical */ 'pv'
  | /** @alias paddingHorizontal */ 'ph'
  | /** @alias paddingTop */ 'pt'
  | /** @alias paddingRight */ 'pr'
  | /** @alias paddingBottom */ 'pb'
  | /** @alias paddingLeft */ 'pl'

type TMarginProps =
  | 'margin'
  | 'marginVertical'
  | 'marginHorizontal'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'

type TMarginShorthandProps =
  | /** @alias margin */ 'm'
  | /** @alias marginVertical */ 'mv'
  | /** @alias marginHorizontal */ 'mh'
  | /** @alias marginTop */ 'mt'
  | /** @alias marginRight */ 'mr'
  | /** @alias marginBottom */ 'mb'
  | /** @alias MarginLeft */ 'ml'

type DisplayProps =
  | 'alignItems'
  | 'alignContent'
  | 'justifyItems'
  | 'justifyContent'

type SizeProps =
  | 'width'
  | 'height'
  | 'maxWidth'
  | 'maxHeight'
  | 'minWidth'
  | 'minHeight'
  | 'size'

type SizeShorthandProps =
  | /** @alias width */ 'w'
  | /** @alias height */ 'h'
  | /** @alias maxWidth */ 'maxw'
  | /** @alias maxHeight */ 'maxh'
  | /** @alias minWidth */ 'minw'
  | /** @alias minHeight */ 'minh'

type PositionProps = 'top' | 'right' | 'bottom' | 'left' | 'inset'

type TAllSpacings =
  | TPaddingProps
  | TPaddingShorthandProps
  | TMarginProps
  | TMarginShorthandProps

export type TSpacingProps = {
  gap?: Spacing
} & PartialRecord<TAllSpacings, Spacing | TClamp>

export type TDisplayProps = {
  display?: 'flex' | 'inline-flex' | 'block' | 'inline' | 'grid' | 'none'
  flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
  flexWrap?: boolean
  row?: boolean
  equal?: boolean
} & PartialRecord<DisplayProps, TPlacement>

export type TBackgroundProps = {
  backgroundColor?: TBackground
}

export type TPositionProps = {
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky'
  absolute?: boolean
  zIndex?: TIndices
} & PartialRecord<PositionProps, Spacing>

export type TSizeProps = PartialRecord<SizeProps | SizeShorthandProps, Spacing>
