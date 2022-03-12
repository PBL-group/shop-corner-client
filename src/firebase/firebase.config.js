import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyARzy2-zCqScHqIx23_VZd6c7pAJCGURqo",
	authDomain: "shopcorner-225d0.firebaseapp.com",
	projectId: "shopcorner-225d0",
	storageBucket: "shopcorner-225d0.appspot.com",
	messagingSenderId: "981824006210",
	appId: "1:981824006210:web:64cba20e9d01d0c8b065db",
	measurementId: "G-P4K4M1KPZ0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider();