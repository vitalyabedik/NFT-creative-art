import { createGlobalStyle } from 'styled-components'

import bg from '../images/bg.webp'

import { theme } from './Theme'

import { font } from '@assets/styles/Common'
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.mainFont};
    line-height: 1.6;
    min-width: 360px;

    overflow-x: hidden;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(${theme.colors.primaryBg} 0%,${
      theme.colors.primaryBg
    } 100%), url("${bg}");
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat
  }

  a {
    text-decoration: none;
    color: ${theme.colors.headerLink};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }
  
  section {
    padding: 92px 16px;

    @media ${theme.media.tablet} {
      padding: 40px 16px;
    }
  }
  
  h1 {
    ${font({
      family: 'Canela',
      weight: 500,
      lineHeight: 1.2,
      Fmax: 64,
      Fmin: 39,
    })}
  }

  h2 {
    ${font({
      family: 'Canela',
      weight: 500,
      lineHeight: 1.2,
      Fmax: 48,
      Fmin: 31,
    })}
  }

  h3 {
    ${font({
      weight: 700,
      lineHeight: 1.2,
      Fmax: 20,
      Fmin: 20,
    })}
  }

  h4 {
    ${font({
      weight: 700,
      lineHeight: 1.2,
      Fmax: 24,
      Fmin: 20,
    })}
  }

  h5 {
    ${font({
      weight: 700,
      lineHeight: 1.2,
      Fmax: 16,
      Fmin: 16,
    })}
  }
`
