import './index.css'

import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from '@/App'
import { GlobalStyle } from '@assets/styles/Global.styled'
import { theme } from '@assets/styles/Theme'

createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
)
