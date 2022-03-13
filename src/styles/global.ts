import { darken, lighten } from 'polished'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.pink500};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
      background: ${({ theme }) => darken(0.09, theme.black900)};
    }
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.black800};
  }

  body, input, textarea, select, button {
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow-x: hidden;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 600;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`
