
import { Link, NavLink } from "react-router-dom"
import loginIcon from "../assets/images/login-icon.png"

export default function Header() {
    
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <span className="logo"><Link to="/">#VANLIFE</Link></span>
            <nav>
                <NavLink 
                    style={({isActive}) => isActive ? styles : null} 
                    to="/host"
                    state={{message: "You must login first"}}>Host</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null} to="/about">About</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null} to="/vans">Vans</NavLink>
                <NavLink to="/login">
                    <img src={loginIcon} alt="Login" />
                </NavLink>
            </nav>
        </header>
    )
}