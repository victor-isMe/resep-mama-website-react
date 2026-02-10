import { useEffect, useState } from "react"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "../../services/firebase"
import { Link } from "react-router-dom"
import { formatDateInbox } from "../../utils/formatDate"

function ContactInbox() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetchMessages()
    }, [])

    const fetchMessages = async () => {
        const q = query(
            collection(db, "contacts"),
            orderBy("createdAt", "desc")
        )

        const snapshot = await getDocs(q)
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))

        setMessages(data)
    }

    return (
        <main style={{ padding: "32px" }}>
            <Link 
                to='/admin'
                style={
                    {
                        padding: "12px 24px",
                        backgroundColor: "#5d3a1a",
                        color: "#eaddca",
                        fontSize: "20px",
                        borderRadius: "12px"
                    }
                }>
                <small>&#60; Back</small>
            </Link>

            <h2>Pesan Masuk</h2>

            {messages.map((msg) => (
                <div key={msg.id} style={{ borderBottom: "1px solid #ccc" }}>
                    <p><b>{msg.name}</b> ({msg.email})</p>
                    <small>{formatDateInbox(msg.createdAt)}</small>
                    <p>{msg.message}</p>
                </div>
            ))}
        </main>
    )
}

export default ContactInbox