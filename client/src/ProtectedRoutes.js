import React from 'react'
import { Route, Routes, Link, Outlet, Navigate } from 'react-router-dom'
import { UserContext } from './UserContext'

export default function ProtectedRoutes() {
    const [user, setUser] = React.useContext(UserContext)
    return (
        user ? <Outlet /> : <Navigate to="/"/>
    )
}