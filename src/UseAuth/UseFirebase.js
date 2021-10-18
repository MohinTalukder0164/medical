import { useState } from "react"
import initializeAuthentication from "../Hooks/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, getRedirectResult, GithubAuthProvider } from "firebase/auth";


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

    const logInUsingGithub = () => {
        const githubProvider = new GithubAuthProvider();

        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
            })

            .catch((error) => {
                setError(error.code)
                setError(error.message)
            })

    }

    const logOutGoogle = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {

            });

    }

    return {
        signInUsingGoole,
        logOutGoogle,
        logInUsingGithub,
        user,
        error
    }


}

export default useFirebase;
