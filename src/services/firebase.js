// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfC5b1fZNydplh4aExwW05vf9TklVDrtM",
  authDomain: "resep-mama-web.firebaseapp.com",
  projectId: "resep-mama-web",
  storageBucket: "resep-mama-web.firebasestorage.app",
  messagingSenderId: "880249976973",
  appId: "1:880249976973:web:23b932de49726c95dacac4",
  measurementId: "G-XBG7E0TFBM"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)