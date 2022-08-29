import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <ThemeProvider {...{ theme }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    <GlobalStyles />
  </ThemeProvider>
)
