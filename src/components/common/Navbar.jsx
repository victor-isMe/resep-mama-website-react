import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from "./Logo"
import { useLocation } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const location = useLocation()

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    return (
        <nav className="navbar">
            <Logo size={36} />

            <div className={`hamburger ${isOpen ? 'open':''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'open':''}`}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/resep'>Resep</Link>
                </li>
                <li>
                    <Link to='/tentang'>Tentang</Link>
                </li>
                <li>
                    <Link to='/contact'>Kontak</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar