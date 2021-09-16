import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { hot } from 'react-hot-loader'
import auth from './auth/auth-helper'
import { refreshToken } from './auth/api-auth'

const App = () => {
  const [jwtFromCookie, setjwtFromCookie] = React.useState(false)

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
    
    refreshToken().then(res => {
      if (res.t)
        auth.authenticate(res.t, () => setjwtFromCookie(true))
      })
      .catch(e => console.log(e))
  }, [])
  
  return (
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter/>
      </ThemeProvider>
  </BrowserRouter>
)}

export default hot(module)(App)
