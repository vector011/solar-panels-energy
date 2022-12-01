import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    overflow: hidden;
  }

  body {
    background:
      url("assets/images/background.png")
      ${({ theme }) => theme.colors.bg};
    background-size: 20.9%;
    background-position-x: 63.2%;

    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.colors.light};

    font-size: 20px;
    line-height: 24.2px;
    font-weight: 300;
  }

  input, button, textarea, select {
    font-family: "Inter", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: inherit;
    font-style: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  img {
    display: block;
  }

  iframe {
    border: 0;
    display: block;
  }

  a {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    color: inherit;
    border: 0;
  }

  .loading {
    position: relative;
    pointer-events: none;
    cursor: progress;

    &:before {
      content: '';
      display: inline-flex;

      z-index: ${({ theme }) => theme.zIndices.loading};
      position: absolute;
      inset: 0;

      background: inherit;
      border-radius: inherit;
      opacity: 0.9;
    }

    &:after {
      content: ' ';
      display: inline-flex;

      z-index: ${({ theme }) => theme.zIndices.loading + 9};
      position: absolute;
      top: calc(50% - 10px);
      left: calc(50% - 10px);

      width: 15px;
      height: 15px;

      border-radius: ${({ theme }) => theme.borderRadii.rounded};
      border: 3px solid ${({ theme }) => theme.colors.dark};
      border-color: ${({ theme }) => theme.colors.light} transparent
        ${({ theme }) => theme.colors.light} transparent;

      animation: dual-ring 1.2s linear infinite;

      @keyframes dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`
