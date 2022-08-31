import { css } from 'styled-components'

import type { TThemeBreakpoint } from 'styles/theme'
import { createProp } from 'utils/functions'

const makeStyles = (p) => css`
  /* paddings props */
  ${createProp('sizes', 'padding', p.padding)}
  ${createProp('sizes', 'padding-block', p.pv || p.paddingVertical)}
  ${createProp('sizes', 'padding-inline', p.ph || p.paddingHorizontal)}
  ${createProp('sizes', 'padding-top', p.pt || p.paddingTop)}
  ${createProp('sizes', 'padding-right', p.pr || p.paddingRight)}
  ${createProp('sizes', 'padding-bottom', p.pb || p.paddingBottom)}
  ${createProp('sizes', 'padding-left', p.pl || p.paddingLeft)}

  /* margin props */
  ${createProp('sizes', 'margin', p.m)}
  ${createProp('sizes', 'margin-block', p.mv || p.marginVertical)}
  ${createProp('sizes', 'margin-inline', p.mh || p.marginHorizontal)}
  ${createProp('sizes', 'margin-top', p.mt || p.marginTop)}
  ${createProp('sizes', 'margin-right', p.mr || p.marginRight)}
  ${createProp('sizes', 'margin-bottom', p.mb || p.marginBottom)}
  ${createProp('sizes', 'margin-left', p.ml || p.marginLeft)}

  /* spacing props */
  ${createProp('sizes', 'gap', p.gap)}

  /* size props */
  ${createProp('sizes', 'width', p.size)}
  ${createProp('sizes', 'height', p.size)}
  ${createProp('sizes', 'width', p.w || p.width)}
  ${createProp('sizes', 'height', p.h || p.height)}
  ${createProp('sizes', 'max-width', p.maxw || p.maxWidth)}
  ${createProp('sizes', 'max-height', p.maxh || p.maxHeight)}
  ${createProp('sizes', 'min-width', p.minw || p.minWidth)}
  ${createProp('sizes', 'min-height', p.minh || p.minHeight)}

  /* position props */
  ${p.position && `position: ${p.position};`}
  ${p.absolute && 'position: absolute;'}
  ${createProp('zIndices', 'z-index', p.zIndex)}
  ${createProp('sizes', 'inset', p.inset)}
  ${createProp('sizes', 'left', p.left)}
  ${createProp('sizes', 'right', p.right)}
  ${createProp('sizes', 'bottom', p.bottom)}
  ${createProp('sizes', 'left', p.left)}

  /* display props */
  ${p.flexDirection && `flex-direction: ${p.flexDirection};`}
  ${p.row && 'flex-direction: row;'}
  ${p.flexWrap && 'flex-wrap: wrap;'}
  ${p.alignItems && `align-items: ${p.alignItems};`}
  ${p.alignContent && `align-content: ${p.alignContent};`}
  ${p.justifyItems && `justify-items: ${p.justifyItems};`}
  ${p.justifyContent && `justify-content: ${p.justifyContent};`}

  /* text visual props */
  ${p.fontSize && `font-size: ${p.fontSize};`}
  ${p.fontWeight && `font-weight: ${p.fontWeight};`}
  ${createProp('sizes', 'line-height', p.lineHeight)}
  ${createProp('colors', 'color', p.color)}

  /* text transform props */
  ${p.textTransform && `text-transform: ${p.textTransform};`}
  ${p.textAlign && `text-align: ${p.textAlign};`}
  ${p.uppercase && 'text-transform: uppercase;'}
`

export const makeAllStyles = css`
  /* Make main styles */
  ${(p) => makeStyles(p)}

  /* Make responsive styles */
  ${(p) => {
    if (!p.theme.breakpoints) return null
    const breakpoints = Object.keys(p.theme.breakpoints) as TThemeBreakpoint[]

    return breakpoints.map((item: TThemeBreakpoint) => {
      if (!p[item]) return null

      return css`
        @media (min-width: ${p.theme.breakpoints[item]}px) {
          ${makeStyles(p[item]!)}
        }
      `
    })
  }}
`
