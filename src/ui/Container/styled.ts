import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  max-width: ${({ theme }) => `calc(${theme.breakpoints.container}px + 4%)`};

  padding-inline: 4%;
  margin-inline: auto;
`
