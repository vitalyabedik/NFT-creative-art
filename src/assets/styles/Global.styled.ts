import { createGlobalStyle } from 'styled-components'

import { theme } from './Theme'

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
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.mainFont};
    line-height: 1.6;
    
    min-width: 375px;
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
    padding: 92px 0;
  }
`
