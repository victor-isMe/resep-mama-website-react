import { auth } from '../../services/firebase'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { FaEnvelope } from 'react-icons/fa'

function Dashboard() {
    const navigate = useNavigate()
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetchRecipes()
    }, [])

    const fetchRecipes = async () => {
        const q = query(
            collection(db, "recipes"), 
            orderBy("createdAt", "desc")
        )
        const snapshot = await getDocs(q)
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        setRecipes(data)
    }

    const handleDelete = async (id) => {
        const confirmDelete = confirm("Yakin ingin hapus resep ini?")
        if (!confirmDelete) return
        
        await deleteDoc(doc(db, "recipes", id))
        fetchRecipes()
    }

    return (
        <main className='dashboard-page'>
            <h2>Admin Dashboard</h2>
            <p>Selamat datang, Admin</p>
            <Link className='inbox-btn' to='/admin/contacts'>
                <FaEnvelope />
                <small>Cek Kotak Pesan</small>
            </Link>
            <br /><br />
            <Link className='add-recipe-btn' to='/admin/create'>
                <small>Tambah Resep Baru</small>
            </Link>
            <br /><br />

            <div className="dashboard-content">
                <h3>Daftar Resep</h3>

                {recipes.length === 0 && <p style={{ padding: "32px" }}>Belum ada resep</p>}

                <div className="content-grid">
                    {recipes.map((recipe) => (
                        <div className='resep-wrap'
                            key={recipe.id} 
                            style={{ 
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                                padding: "12px",
                                marginBottom: "12px" 
                            }}>
                            <div className="img-container">
                                <img src={recipe.imageUrl} alt={recipe.title}/>
                            </div>
                            <h3>{recipe.title}</h3>
                            <p>Status: {recipe.isPublished ? "Published" : "Draft"}</p>
                            <div className="btn-wrap">
                                <Link className='edit-btn' to={`/admin/edit/${recipe.id}`}>Edit</Link>
                                <button className='delete-btn' onClick={() => handleDelete(recipe.id)}>
                                    Hapus Resep
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br /><br />
        </main>
    )
}

export default Dashboard