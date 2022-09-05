import { css } from 'styled-components'

import { createProp } from './functions'
import type { TThemeBreakpoint } from 'styles/theme'

const makeStyles = (p) => css`
  /* paddings props */
  ${createProp('padding', p.padding, 'sizes')}
  ${createProp('padding-block', p.pv || p.paddingVertical, 'sizes')}
  ${createProp('padding-inline', p.ph || p.paddingHorizontal, 'sizes')}
  ${createProp('padding-top', p.pt || p.paddingTop, 'sizes')}
  ${createProp('padding-right', p.pr || p.paddingRight, 'sizes')}
  ${createProp('padding-bottom', p.pb || p.paddingBottom, 'sizes')}
  ${createProp('padding-left', p.pl || p.paddingLeft, 'sizes')}

  /* margin props */
  ${createProp('margin', p.m, 'sizes')}
  ${createProp('margin-block', p.mv || p.marginVertical, 'sizes')}
  ${createProp('margin-inline', p.mh || p.marginHorizontal, 'sizes')}
  ${createProp('margin-top', p.mt || p.marginTop, 'sizes')}
  ${createProp('margin-right', p.mr || p.marginRight, 'sizes')}
  ${createProp('margin-bottom', p.mb || p.marginBottom, 'sizes')}
  ${createProp('margin-left', p.ml || p.marginLeft, 'sizes')}

  /* spacing props */
  ${createProp('gap', p.gap, 'sizes')}

  /* size props */
  ${createProp('width', p.size, 'sizes')}
  ${createProp('height', p.size, 'sizes')}
  ${createProp('width', p.w || p.width, 'sizes')}
  ${createProp('height', p.h || p.height, 'sizes')}
  ${createProp('max-width', p.maxw || p.maxWidth, 'sizes')}
  ${createProp('max-height', p.maxh || p.maxHeight, 'sizes')}
  ${createProp('min-width', p.minw || p.minWidth, 'sizes')}
  ${createProp('min-height', p.minh || p.minHeight, 'sizes')}

  /* position props */
  ${createProp('position', p.position)}
  ${p.absolute && 'position: absolute;'}
  ${createProp('z-index', p.zIndex, 'zIndices', true)}
  ${createProp('inset', p.inset, 'sizes')}
  ${createProp('left', p.left, 'sizes')}
  ${createProp('right', p.right, 'sizes')}
  ${createProp('bottom', p.bottom, 'sizes')}
  ${createProp('left', p.left, 'sizes')}

  /* display props */
  ${createProp('flex-direction', p.flexDirection)}
  ${p.row && 'flex-direction: row;'}
  ${p.flexWrap && 'flex-wrap: wrap;'}
  ${createProp('align-items', p.alignItems)}
  ${createProp('align-content', p.alignContent)}
  ${createProp('justify-items', p.justifyItems)}
  ${createProp('justify-content', p.justifyContent)}

  /* text visual props */
  ${createProp('font-size', p.fontSize)}
  ${createProp('font-weight', p.fontWeight)}
  ${createProp('line-height', p.lineHeight)}
  ${createProp('color', p.color, 'colors')}

  /* text transform props */
  ${createProp('text-transform', p.textTransform)}
  ${createProp('text-align', p.textAlign)}
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
