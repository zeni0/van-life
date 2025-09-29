
import { Outlet, Navigate, useLocation } from 'react-router-dom'

export default function AuthRequired() {
    const authenticated = localStorage.getItem("loggedin");
    const location = useLocation()

    if (!authenticated) {
        return <Navigate 
                    to="/login" 
                    state={{message: "You must log in first", userLoc: location.pathname }}
                    replace/>
    }

    return <Outlet />
}