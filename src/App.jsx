import { ThemeProvider } from 'styled-components'
// import { DoughnutComponent } from './components/DoughnutComponent'
// import { LineComponent } from './components/LineComponent'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* <LineComponent />
      <DoughnutComponent /> */}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
