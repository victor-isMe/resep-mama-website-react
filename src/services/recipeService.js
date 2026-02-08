import { collection, getDocs, getDoc, doc } from "firebase/firestore"
import { db } from "./firebase"

const recipeCollection = collection(db, "recipes")

export const getAllRecipes = async () => {
    const snapshot = await getDocs(recipeCollection)
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))
}

export const getRecipeById = async (id) => {
    const docRef = doc(db, "recipes", id)
    const snapshot = await getDoc(docRef)

    if (!snapshot.exists()) return null

    return {
        id: snapshot.id,
        ...snapshot.data()
    }
}