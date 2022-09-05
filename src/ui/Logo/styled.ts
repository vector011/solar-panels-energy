import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

interface IWrapper {
  $responsive?: boolean
}

const responsiveVariant = css`
  width: clamp(105px, 20vw + 1rem, 195px);
  height: auto;
`

export const Wrapper = styled(NavLink)<IWrapper>`
  img {
    ${({ $responsive }) => $responsive && responsiveVariant}
  }
`
