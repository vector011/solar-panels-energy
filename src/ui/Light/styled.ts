import styled from 'styled-components'

import type { Props } from './Light'

export const Wrapper = styled.div<Props>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices.bg};
  user-select: none;

  ${({ top }) => top && `top: ${top}px;`}
  ${({ right }) => right && `right: ${right}px;`}
  ${({ bottom }) => bottom && `bottom: ${bottom}px;`}
  ${({ left }) => left && `left: ${left}px;`}

  width: ${({ size }) => `clamp(${size / 2}px, 50vw + 1rem, ${size}px)`};
  height: ${({ size }) => `clamp(${size / 2}px, 50vw + 1rem, ${size}px)`};
  border-radius: ${({ theme }) => theme.borderRadii.rounded};

  background-color: ${({ theme, bg }) => theme.colors[bg!]};
  opacity: 0.3;
  filter: blur(130px);

  // Safari bug fix
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
`
