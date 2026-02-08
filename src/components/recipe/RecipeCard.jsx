import {Link} from 'react-router-dom'

//Untuk meringkas deskripsi resep yang terlalu panjang
function cuttDesc(text, maxLength) {
    if (!text) return ""
    return text.length > maxLength ?
        text.slice(0, maxLength) + "..." : text
}

function RecipeCard({ id, title, description, imageUrl }) {
    return (
        <Link to={`/resep/${id}`} style={{textDecoration: "none"}}>
            <div className="recipe-card">
                {imageUrl && (
                    <img 
                        src={imageUrl} 
                        alt={title}
                        style={{ width: "100%", borderRadius: "8px" }} 
                    />
                )}
                <h3>{title}</h3>
                <p>
                    {cuttDesc(description, 165)}
                </p>
                <p className="read-more">
                    BACA SELENGKAPNYA
                </p>
            </div>
        </Link>
    )
}

export default RecipeCard