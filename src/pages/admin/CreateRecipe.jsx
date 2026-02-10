import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function CreateRecipe() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [cookTime, setCookTime] = useState("")
    const [servings, setServings] = useState("")
    const [ingredients, setIngredients] = useState([""])
    const [steps, setSteps] = useState([""])
    const [imageUrl, setImageUrl] = useState("")
    const [isPublished, setIsPublished] = useState(false)

    const handleAddIngredients = () => {
        setIngredients([...ingredients, ""])
    }

    const handleAddSteps = () => {
        setSteps([...steps, ""])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await addDoc(collection(db, "recipes"), {
            title,
            description,
            cookTime: Number(cookTime),
            servings: Number(servings),
            ingredients: ingredients.filter(Boolean),
            steps: steps.filter(Boolean),
            imageUrl,
            isPublished,
            createdAt: new Date()
        })

        navigate("/admin")
    }

    return (
        <main className="create-resep-page" style={{ padding: "32px" }}>
            <Link 
                className="back-btn"
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

            <h2>Tambah Resep</h2>

            <div className="add-resep-container">
                <form onSubmit={handleSubmit}>

                    <h3>Judul Resep</h3>
                    <input 
                        type="text"
                        placeholder="Masukkan judul resep"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />

                    <h3>Deskripsi</h3>
                    <textarea 
                        placeholder="Deskripsi"
                        value={description}
                        rows="6"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br />

                    <h3>Waktu Masak</h3>
                    <input
                        type="number"
                        placeholder="Waktu masak (menit)"
                        value={cookTime}
                        onChange={(e) => setCookTime(e.target.value)}
                    />
                    <br />

                    <h3>Porsi</h3>
                    <input 
                        type="number" 
                        placeholder="Jumlah porsi"
                        value={servings}
                        onChange={(e) => setServings(e.target.value)}
                    />
                    <br />

                    <h3>Bahan-bahan</h3>
                    {ingredients.map((item, index) => (
                        <input 
                            type="text" 
                            key={index}
                            placeholder={`Bahan ${index+1}`}
                            value={item}
                            onChange={(e) => {
                                const newIngredients = [...ingredients]
                                newIngredients[index] = e.target.value
                                setIngredients(newIngredients)
                            }}
                        />
                    ))}
                    <button type="button" onClick={handleAddIngredients}>
                        + Tambah Bahan
                    </button>
                    <br />

                    <h3>Langkah-langkah</h3>
                    {steps.map((step, index) => (
                        <textarea
                            key={index}
                            placeholder={`Langkah ${index+1}`}
                            value={step}
                            rows={3}
                            onChange={(e) => {
                                const newSteps = [...steps]
                                newSteps[index] = e.target.value
                                setSteps(newSteps)
                            }}
                        />
                    ))}
                    <button type="button" onClick={handleAddSteps}>
                        + Tambah Langkah
                    </button>
                    <br />

                    <h3>URL Gambar</h3>
                    <input 
                        type="text" 
                        placeholder="Masukkan URL gambar"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <br /><br />

                    <button className="save-btn" type="submit">Save</button>
                </form>

                <label>
                    <input 
                        className="publish-checkbox"
                        type="checkbox" 
                        style={
                            { cursor: "pointer" }
                        }
                        checked={isPublished}
                        onChange={(e) => setIsPublished(e.target.checked)}
                    />
                    Publish Resep
                </label>
            </div>
        </main>
    )
}

export default CreateRecipe