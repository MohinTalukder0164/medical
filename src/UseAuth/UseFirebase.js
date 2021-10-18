import { useState } from "react"
import initializeAuthentication from "../Hooks/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


initializeAuthentication()

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({})
    const [error, setError] = useState('');

    const signInUsingGoole = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })


            .catch((error) => {
                setError(error.code)
                setError(error.message)
            });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {

            })

            .catch((error) => {

            });

    }

    return {
        signInUsingGoole,
        logOut,
        user,
        error
    }


}

export default useFirebase;
