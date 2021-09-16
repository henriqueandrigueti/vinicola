import { signout } from './api-auth.js' 

let jwtInMemory = ''

const auth = {

  isAuthenticated() {
    if (typeof window == "undefined")
      return false

    //if (sessionStorage.getItem('jwt'))
      //return JSON.parse(sessionStorage.getItem('jwt'))

    if (jwtInMemory)
      return JSON.parse(jwtInMemory)
    else
      return false
  },

  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
      //sessionStorage.setItem('jwt', JSON.stringify(jwt))
      jwtInMemory = JSON.stringify(jwt)
    cb()
  },

  clearJWT(cb) {
    if (typeof window !== "undefined")
      //sessionStorage.removeItem('jwt')
      jwtInMemory = ''
    cb()
    //optional
    signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
  }
}

export default auth
