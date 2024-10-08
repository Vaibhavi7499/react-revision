import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    let token = sessionStorage.getItem("token")

  return (
token ? <Outlet/> : <Navigate to="/login"/>
)
}

export default ProtectedRoute