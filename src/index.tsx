import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { I18nProvider } from 'contexts'

import App from './App'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <ThemeProvider {...{ theme }}>
    <I18nProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>

    <GlobalStyles />
  </ThemeProvider>
)
