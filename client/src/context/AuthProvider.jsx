import React from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
  const [user, setUser] = React.useState({name: 'abc'})
  console.log('user', user)
  const value = {user}
  return (
    <AuthContext.Provider value={value}>
        {props.children}
    </AuthContext.Provider>
  )
}



export const useAuth = () => React.useContext(AuthContext)