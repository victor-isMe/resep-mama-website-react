import logo from "../../assets/icons/resep-mama-logo.png"
import { Link } from "react-router-dom"

function Logo({ size = 40 }) {
    return (
        <>
            <Link to={'/'}>
                <img 
                    src={logo}
                    alt="Resep Mama"
                    style={{ height: size }} 
                />
            </Link>
        </>
    )
}

export default Logo