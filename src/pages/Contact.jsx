import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../services/firebase"
import { FaEnvelope, FaPhone, FaMapPin } from "react-icons/fa"

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await addDoc(collection(db, "contacts"), {
            name,
            email,
            message,
            createdAt: new Date()
        })

        setName("")
        setEmail("")
        setMessage("")
        setSuccess(true)
    }

    return (
        <main className="contact-page">
            <h2>Contact</h2>
            <p>Punya pertanyaan atau ingin berbagi resep keluarga Anda? Kami senang mendengar dari Anda.</p>

            {success && <p className="notif-submit">Pesan berhasil dikirim</p>}

            <div className="contact-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Kirim Pesan</h2>

                    <label>Nama:</label><br />
                    <input 
                        type="text"
                        placeholder="Masukkan nama anda"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    <br /><br />

                    <label>Email:</label><br />
                    <input 
                        type="email" 
                        placeholder="Masukkan email anda"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br /><br />

                    <label>Isi Pesan:</label><br />
                    <textarea 
                        placeholder="Tulis pesan anda"
                        value={message}
                        rows="6"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <br /><br />

                    <button type="submit">Kirim</button>
                </form>

                <div className="contact-info">
                    <div className="email-info">
                        <FaEnvelope /> 
                        <p>Email <br /><b>muhammadfaizniwansyah23@gmail.com</b></p>
                    </div>
                    <div className="telp-info">
                        <FaPhone />
                        <p>Telepon <br /><b>(+62) 89 696 549 425</b></p>
                    </div>
                    <div className="map-info">
                        <FaMapPin />
                        <p>Alamat <br /><b>Ds. Balerejo, Kec. Kebonsari, Kab. Madiun, Prov. Jawa Timur, Indonesia</b></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact