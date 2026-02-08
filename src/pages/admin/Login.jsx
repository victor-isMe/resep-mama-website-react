import { useState } from "react"
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../../services/firebase"
import { useNavigate  } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/admin")
        } catch (error) {
            alert("Login gagal")
        }
    }

    return (
        <main className="login-page">
            <h2>Admin Login</h2>

            <form onSubmit={handleLogin}>
                <input 
                    type="email"
                    placeholder="Enter admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input 
                    type="password" 
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">Login</button>
            </form>
        </main>
    )
}

export default Login