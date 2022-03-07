import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdtdOHgeo1fJzC3k_or7YeCujVrt7U2IM",
  authDomain: "shopcorner-e3fa5.firebaseapp.com",
  projectId: "shopcorner-e3fa5",
  storageBucket: "shopcorner-e3fa5.appspot.com",
  messagingSenderId: "712709029191",
  appId: "1:712709029191:web:25fd1487e35f5328e0a062"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const firestore = getFirestore();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signOutFromAuth = () => signOut(auth);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const docRef = doc(firestore, "users", `${userAuth.uid}`);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(doc(firestore, "users", `${userAuth.uid}`), {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error creating user: ', error.message)
        }
    }

    return docRef;
}