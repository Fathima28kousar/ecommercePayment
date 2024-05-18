import React from 'react'
import {Route,Redirect} from 'react-router-dom'


const ProtectedRoutes = ({ children }) => {
  const auth = localStorage.getItem('loggedIn')
  return (
    <Route render={() => auth ? (children) : (<Redirect to="/login"/>)}/>
 )
}

export default ProtectedRoutes