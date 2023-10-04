import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import {ThemeProvider} from 'styled-components'
import {tema} from "../src/styles/theme.js"

import {GlobalStyle} from './styles/GlobalStyle.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <GlobalStyle/>
      <LandingPage />

    </ThemeProvider>
  </React.StrictMode>,
)
