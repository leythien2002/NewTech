import React from 'react'
import { useNavigate } from 'react-router-dom';
export const AuthContext = React.createContext({})
import axios from "axios";

export const AuthProvider = (props) => {
  const [user, setUser] = React.useState(null)
  const [token, setToken] = React.useState(null)
  const userId=localStorage.getItem('userId');
  const navigate = useNavigate()
  const baseUrl="http://localhost:3001";

  
  React.useEffect(() => {
    
    axios({
      method: 'get',
      url: `${baseUrl}/getUser/${userId}`,
     
    }).then(response => {
      if (response.status===200) {
        setUser(response.data.data);
      } else {
        alert('Login failed ' + response.data);
      }
      return;
    })
      .catch(err => {
        console.log("GetUserProfile",err)
      })
    // api get profile with access token in header bearer auth
    // .then(() => setUser(response.data))
  }, [token,userId])

  const login = (email,password) => {
    axios({
      method: 'post',
      url: `${baseUrl}/auth/login`,
      data: {
        username: email,
        password: password
      }
    }).then(response => {
      if (response.status === 200) {
        navigate('');
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('userId', response.data.id);
      } else {
        alert('Login failed ' + response.data);
      }
      return;
    })
      .catch(err => {
        console.log(err)
      })
  }

  const value = { user, login }
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}



export const useAuth = () => React.useContext(AuthContext)