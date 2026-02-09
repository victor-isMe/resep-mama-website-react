import { useEffect, useState } from "react"
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"
import { Link } from "react-router-dom"

function HomeAside() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchLatest = async () => {
            const q = query(
                collection(db, "recipes"),
                orderBy("createdAt", "desc"),
                limit(5)
            )
            const snapshot = await getDocs(q)
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))

            setRecipes(data)
        }
        fetchLatest()
    }, [])

    return (
        <aside style={{ padding: "16px" }}>
            <h3>Resep Terbaru</h3>
            <ol>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/resep/${recipe.id}`}>
                            {recipe.title}
                        </Link>
                    </li>
                ))}
            </ol>

            <h4>Tips Dapur</h4>
            <ul>
                <li>Gunakan bahan segar</li>
                <li>Cicipi sebelum disajikan</li>
                <li>Masak dengan sepenuh hati</li>
            </ul>
        </aside>
    )
}

export default HomeAside