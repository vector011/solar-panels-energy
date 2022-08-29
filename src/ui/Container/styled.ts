import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) =>
    `calc(${theme.breakpoints.container}px + 2 * ${theme.sizes.s})`};

  padding-inline: ${({ theme }) => theme.sizes.s};
  margin-inline: auto;
`
