import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    const { user } = useAuth();
    console.log('default layout')
  if (user) {
    return <Navigate to="/" />;
  }
  return <Outlet />
}

export default DefaultLayout