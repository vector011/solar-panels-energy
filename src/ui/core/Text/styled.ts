import styled, { css } from 'styled-components'

import type { Props } from './Text'
import { createProp } from 'utils/functions'

const paddings = css<Props>`
  ${({ padding }) => createProp('sizes', 'padding', padding)}

  ${({ pv, paddingVertical }) =>
    createProp('sizes', 'padding-block', pv || paddingVertical)}
  ${({ ph, paddingHorizontal }) =>
    createProp('sizes', 'padding-inline', ph || paddingHorizontal)}

  ${({ pt, paddingTop }) =>
    createProp('sizes', 'padding-top', pt || paddingTop)}
  ${({ pr, paddingRight }) =>
    createProp('sizes', 'padding-right', pr || paddingRight)}
  ${({ pb, paddingBottom }) =>
    createProp('sizes', 'padding-bottom', pb || paddingBottom)}
  ${({ pl, paddingLeft }) =>
    createProp('sizes', 'padding-left', pl || paddingLeft)}
`

const margins = css<Props>`
  ${({ margin }) => createProp('sizes', 'margin', margin)}

  ${({ mv, marginVertical }) =>
    createProp('sizes', 'margin-block', mv || marginVertical)}
  ${({ mh, marginHorizontal }) =>
    createProp('sizes', 'margin-inline', mh || marginHorizontal)}

  ${({ mt, marginTop }) => createProp('sizes', 'margin-top', mt || marginTop)}
  ${({ mr, marginRight }) =>
    createProp('sizes', 'margin-right', mr || marginRight)}
  ${({ mb, marginBottom }) =>
    createProp('sizes', 'margin-bottom', mb || marginBottom)}
  ${({ ml, marginLeft }) =>
    createProp('sizes', 'margin-left', ml || marginLeft)}
`

const sizes = css<Props>`
  ${({ size }) => createProp('sizes', 'width', size)}
  ${({ size }) => createProp('sizes', 'height', size)}

  ${({ w, width }) => createProp('sizes', 'width', w || width)}
  ${({ h, height }) => createProp('sizes', 'height', h || height)}

  ${({ maxw, maxWidth }) => createProp('sizes', 'max-width', maxw || maxWidth)}
  ${({ maxh, maxHeight }) =>
    createProp('sizes', 'max-height', maxh || maxHeight)}

  ${({ minw, minWidth }) => createProp('sizes', 'min-width', minw || minWidth)}
  ${({ minh, minHeight }) =>
    createProp('sizes', 'min-height', minh || minHeight)}
`

const visual = css<Props>`
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ lineHeight }) => createProp('sizes', 'line-height', lineHeight)}
  ${({ color }) => createProp('colors', 'color', color)}
`

const transform = css<Props>`
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ uppercase }) => uppercase && 'text-transform: uppercase;'}
`

export const Wrapper = styled.p<Props>`
  ${({ theme, variant }) => theme.textVariants[variant!]}

  ${visual}
  ${transform}
  ${sizes}
  ${paddings}
  ${margins}
`
