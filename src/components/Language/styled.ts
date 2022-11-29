import styled from 'styled-components'

export const Wrapper = styled.div`
  cursor: pointer;
  user-select: none;

  svg {
    transition: all 200ms;
    margin-top: -4px;
    transform: scaleY(1);
  }

  &:hover svg {
    transform: scaleY(-1);
  }

  &:hover article {
    display: flex;
  }

  article {
    display: none;

    top: calc(100% - ${({ theme }) => theme.sizes.xxs});
    left: 0;
    right: 0;

    button {
      padding-inline: ${({ theme }) => theme.sizes.s};
      padding-block: ${({ theme }) => theme.sizes.xxs};

      opacity: 0.4;
      transition: all 200ms;

      &:hover {
        opacity: 1;
      }
    }
  }
`
