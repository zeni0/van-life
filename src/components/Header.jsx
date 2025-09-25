
import { Link, NavLink } from "react-router-dom"

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
                <ul>
                    <li><NavLink style={({isActive}) => isActive ? styles : null} to="/host">Host</NavLink></li>
                    <li><NavLink style={({isActive}) => isActive ? styles : null} to="/about">About</NavLink></li>
                    <li><NavLink style={({isActive}) => isActive ? styles : null} to="/vans">Vans</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}