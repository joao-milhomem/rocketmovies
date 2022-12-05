import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import GlobalStyle from '../src/styles/global'
import {Preview} from './pages/Preview'
import {Routes} from './Routes/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Preview/>
      </Routes>
      
    </ThemeProvider>

  </React.StrictMode>
)
