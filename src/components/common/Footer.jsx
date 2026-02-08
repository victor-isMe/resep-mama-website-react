import { Link } from "react-router-dom"
import Logo from "./Logo"
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <footer>
            <div className="footer-grid">
                <div className="desc">
                    <Logo size={36}/>
                    <p>Membawa kehangatan dapur keluarga ke setiap rumah melalui resep-resep tradisional yang penuh conta.</p>
                </div>

                <div className="nav">
                    <h3>Menu</h3>
                    <ul className="navList">
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
                </div>

                <div className="contact-us">
                    <h3>Kontak</h3>
                    <p>
                        Ds. Balerejo, Kec. Kebonsari, Kab. Madiun, Prov. Jawa Timur, Indonesia
                        <br /><br />
                        (+62) 89 696 549 425 
                        <br />
                        godaggodog7@gmail.com
                    </p>
                </div>

                <div className="media-icons">
                    <h3>Ikuti Kami</h3>
                    <nav>
                        <a href="https://www.instagram.com/fzznw_?igsh=MWxyMHgzeGp2Y2hmNw==" target="_blank"><FaInstagram /></a>
                        <a href="https://x.com/SemogaBerhasi11?t=Z4O54QGI1WMfj1QIJiIECQ&s=09" target="_blank"><FaTwitter /></a>
                        <a href="www.linkedin.com/in/muhammad-faizniwansyah-37b803347" target="_blank"><FaLinkedin /></a>
                    </nav>
                </div>
            </div>
            
            <div className="footer">
                <small>&copy; {new Date().getFullYear()} Resep Mama. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer