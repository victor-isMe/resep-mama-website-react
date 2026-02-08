import { Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { useEffect, useState } from 'react'

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    if (loading) {
        return <p style={{ padding: "32px", height: "100vh" }}>Loading...</p>
    }

    if (!user) {
        return <Navigate to='/admin/login' />
    }

    return children
}

export default ProtectedRoute