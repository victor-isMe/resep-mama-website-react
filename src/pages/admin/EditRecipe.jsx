import { use, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { Link } from "react-router-dom"

function EditRecipe() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [cookTime, setCookTime] = useState("")
    const [servings, setServings] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [steps, setSteps] = useState([])
    const [imageUrl, setImageUrl] = useState("")
    const [isPublished, setIsPublished] = useState(false)

    const handleAddIngredients = () => {
        setIngredients([...ingredients, ""])
    }

    const handleAddSteps = () => {
        setSteps([...steps, ""])
    }

    useEffect(() => {
        fetchRecipe()
    }, [])

    const fetchRecipe = async () => {
        const docRef = doc(db, "recipes", id)
        const snapshot = await getDoc(docRef)

        if(!snapshot.exists()) return
        
        const data = snapshot.data()
        setTitle(data.title)
        setDescription(data.description)
        setCookTime(data.cookTime)
        setServings(data.servings)
        setIngredients(data.ingredients || [])
        setSteps(data.steps || [])
        setImageUrl(data.imageUrl || "")
        setIsPublished(data.isPublished ?? false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await updateDoc(doc(db, "recipes", id), {
            title,
            description,
            cookTime,
            servings,
            ingredients,
            steps,
            imageUrl,
            isPublished,
            updatedAt: new Date(),
        })

        navigate('/admin')
    }

    return (
        <main className="edit-resep-page">
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
            
            <h2>Edit Resep</h2>

            <div className="edit-resep-container">
                <form onSubmit={handleSubmit}>

                    <h3>Judul Resep</h3>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <br /><br />

                    <h3>Deskripsi</h3>
                    <textarea 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br /><br />

                    <h3>Waktu Masak (menit)</h3>
                    <input 
                        type="number"
                        value={cookTime}
                        onChange={(e) => setCookTime(e.target.value)} 
                    />
                    <br /><br />

                    <h3>Porsi</h3>
                    <input 
                        type="number" 
                        value={servings}
                        onChange={(e) => setServings(e.target.value)}
                    />
                    <br /><br />

                    <h3>Bahan-bahan</h3>
                    {ingredients.map((item, index) => (
                        <input 
                            type="text" 
                            key={index}
                            value={item}
                            placeholder={`Bahan ${index+1}`}
                            onChange={(e) => {
                                const newItems = [...ingredients]
                                newItems[index] = e.target.value
                                setIngredients(newItems)
                            }}
                        />
                    ))}
                    <button type="button" onClick={handleAddIngredients}>
                        + Tambah Bahan
                    </button>
                    <br /><br />

                    <h3>Langkah-langkah</h3>
                    {steps.map((step, index) => (
                        <textarea 
                            key={index}
                            value={step}
                            placeholder={`Langkah ${index+1}`}
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
                    <br /><br />

                    <h3>URL Gambar</h3>
                    <input 
                        type="text" 
                        placeholder="Masukkan URL gambar"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <br /><br />

                    <label>
                        <input 
                            className="publish-checkbox"
                            type="checkbox" 
                            checked={isPublished}
                            onChange={(e) => setIsPublished(e.target.checked)}
                        />
                        Publish Resep
                    </label>
                    <br /><br />

                    <button className="save-btn" type="submit">Simpan Perubahan</button>
                </form>
            </div>
        </main>
    )
}

export default EditRecipe