
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <>
        <nav className="host-nav">
            <NavLink end style={({isActive}) => isActive ? styles : null} to="/host">Host</NavLink>
            <NavLink style={({isActive}) => isActive ? styles : null} to="/host/income">Income</NavLink>
            <NavLink style={({isActive}) => isActive ? styles : null} to="/host/vans">Vans</NavLink>
            <NavLink style={({isActive}) => isActive ? styles : null} to="/host/reviews">Reviews</NavLink>
        </nav>
        <Outlet />
        </>
    )
}