import { useEffect, useState } from "react"
import { collection, query, orderBy, getDocs } from "firebase/firestore"
import { db } from "../services/firebase"
import RecipeCard from "../components/recipe/RecipeCard"

function Recipes() {
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

        const published = data.filter(
            (recipe) => recipe.isPublished === true
        )

        setRecipes(published)
    }

    return (
        <main className="resep-page">
            <h2>Semua Resep</h2>

            <section className="resep-grid">
                {recipes.length === 0 && <p>Belum ada resep</p>}

                {recipes.map((recipe) => (
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