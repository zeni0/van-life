
import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"

export default function Navigation() {
    return (
        <>
        <nav>
            <span className="logo">#VANLIFE</span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </>
    )
}