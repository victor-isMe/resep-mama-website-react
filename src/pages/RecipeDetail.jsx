import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getRecipeById } from "../services/recipeService"
import { formatDate } from "../utils/formatDate"

function RecipeDetail() {
    const {id} = useParams()
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRecipe = async () => {
            const data = await getRecipeById(id)
            setRecipe(data)
            setLoading(false)
        }

        fetchRecipe()
    }, [id])

    if (loading) {
        return <p style={{ padding: "32px", minHeight: "100vh" }}>Loading...</p>
    }

    if (!recipe) {
        return <p style={{ padding: "32px", minHeight: "100vh" }}>Resep tidak ditemukan</p>
    }

    return (
        <main className="recipe-detail-page" style={{padding: "32px"}}>
            <h2>{recipe.title}</h2>
            {recipe.imageUrl && (
                <img 
                    src={recipe.imageUrl} 
                    alt={recipe.title}
                    style={{
                        margin: "0 auto",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "16px"
                    }}
                />
            )}
            <p>Dipublikasikan: {formatDate(recipe.createdAt)}</p>
            {recipe.updatedAt && (
                <p>Diperbarui: {formatDate(recipe.updatedAt)}</p>
            )}
            <br />
            <p>{recipe.description}</p>

            <p>Waktu Masak: {recipe.cookTime} menit</p>
            <p>Porsi: {recipe.servings}</p>

            <h3>Bahan-bahan</h3>
            <ul>
                {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>Langkah-langkah</h3>
            <ol>
                {recipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </main>
    )
}

export default RecipeDetail