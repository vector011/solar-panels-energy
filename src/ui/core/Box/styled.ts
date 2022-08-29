import styled, { css } from 'styled-components'

import { createProp } from 'utils/functions'
import type { Props } from './Box'

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

const display = css<Props>`
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ row }) => row && 'flex-direction: row;'}
  ${({ flexWrap }) => flexWrap && 'flex-wrap: wrap;'}


  ${({ equal }) =>
    equal &&
    css`
      & > * {
        flex: 1;
      }
    `}

  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ alignContent }) => alignContent && `align-content: ${alignContent};`}
  ${({ justifyItems }) => justifyItems && `justify-items: ${justifyItems};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
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

const position = css<Props>`
  ${({ position }) => position && `position: ${position};`}
  ${({ absolute }) => absolute && 'position: absolute;'}

  ${({ zIndex }) => createProp('zIndices', 'z-index', zIndex)}

  ${({ inset }) => createProp('sizes', 'inset', inset)}

  ${({ left }) => createProp('sizes', 'left', left)}
  ${({ right }) => createProp('sizes', 'right', right)}
  ${({ bottom }) => createProp('sizes', 'bottom', bottom)}
  ${({ left }) => createProp('sizes', 'left', left)}
`

const spacings = css<Props>`
  ${({ gap }) => createProp('sizes', 'gap', gap)}
`

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${display}
  ${position}
  ${sizes}
  ${spacings}
  ${margins}
  ${paddings}

  ${({ css }) => css && css}
`
