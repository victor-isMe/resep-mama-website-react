import {Link} from 'react-router-dom'
import Logo from './Logo'

function Navbar() {
    return (
        <nav className="navbar">
            <Logo size={36} />

            <ul className="nav-links">
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