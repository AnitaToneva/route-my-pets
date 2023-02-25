export const login = (email) => {
   localStorage.setItem('email', email)
}

export const logout = () => {
localStorage.removeItem('email')
}

export const getUser = () => {
   let email = localStorage.getItem('email')
   return email
}

export const isAuthenticated = () => {
   return Boolean(getUser())
}