import RecipeCard from '../components/recipe/RecipeCard'
import { useEffect, useState } from 'react'
import { getAllRecipes } from '../services/recipeService'
import Hero from '../components/home/Hero'
import HomeAside from '../components/home/HomeAside'
import RecipeSlider from '../components/home/RecipeSlider'

function Home() {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getAllRecipes()
            const publishedRecipes = data.filter(
                (recipe) => recipe.isPublished === true
            )
            setRecipes(publishedRecipes)
            setLoading(false)
        }

        fetchRecipes()
    }, [])

    if (loading) {
        return <p style={{ padding: "32px", minHeight: "100vh" }}>Loading...</p>
    }

    return (
        <main>
            <Hero />
            <h2 style={{ padding: "32px 32px 0 32px" }}>Resep Terbaru Mama</h2>

            <section className="home-layout">
                <div className="home-main">
                    <div className="home-slider">
                        {recipes.length === 0 && <p>Belum ada resep</p>}
            
                        <RecipeSlider recipes={recipes}/>
                    </div>
                </div>

                <div className="home-aside">
                    <HomeAside />
                </div>
            </section>
        </main>
    )
}

export default Home