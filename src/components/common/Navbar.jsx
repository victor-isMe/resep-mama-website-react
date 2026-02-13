import { useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import Logo from "./Logo"
import { useLocation } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../../services/firebase"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const user = auth.currentUser

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const location = useLocation()

    const handleLogout = async () => {
        await signOut(auth)
        navigate('/')
    }

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    return (
        <nav className="navbar">
            <Logo size={36} />

            {user ? (
                <div className="admin-nav">
                    <span>Admin</span>
                    <span className={`arrow ${isOpen ? 'open':''}`} onClick={toggleMenu}>&gt;</span>
                </div>
            ) : (
                <div className={`hamburger ${isOpen ? 'open':''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            )}

            {user ? (
                <ul className={`admin-links ${isOpen ? 'open':''}`}>
                    <li>
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            ) : (
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
                    <li>
                        <Link to='/admin/login'>Login</Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar