import { useEffect, useState } from "react"
import { collection, query, orderBy, getDocs } from "firebase/firestore"
import { db } from "../services/firebase"
import RecipeCard from "../components/recipe/RecipeCard"
import { FaSearch } from "react-icons/fa"

function Recipes() {
    const [recipes, setRecipes] = useState([])
    
    const [search, setSearch] = useState("")

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

        const published = data.filter(
            (recipe) => recipe.isPublished === true
        )

        setRecipes(published)
    }

    const filteredRecipes = recipes.filter((recipe) => `${recipe.title} ${recipe.description}`.toLowerCase().includes(search.toLowerCase()))

    return (
        <main className="resep-page">
            <h2>Semua Resep</h2>

            <div className="search-wrapper">
                <FaSearch className="search-icon"/>
                <input 
                    type="text" 
                    placeholder="Temukan resep pilihan anda"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <section className="resep-grid">
                {filteredRecipes.length === 0 && <p>Resep tidak ditemukan</p>}


                {filteredRecipes.map((recipe) => (
                    <RecipeCard 
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        description={recipe.description}
                        imageUrl={recipe.imageUrl}
                    />
                ))}
            </section>
        </main>
    )
}

export default Recipes