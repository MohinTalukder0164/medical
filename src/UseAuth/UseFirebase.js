import { useEffect, useState } from "react"
import initializeAuthentication from "../Hooks/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";


initializeAuthentication()

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const signInUsingGoole = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))


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
            .finally(() => setIsLoading(false))
            .catch((error) => {

            });

    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

        return () => unsubscribe;
    }, [])

    return {
        signInUsingGoole,
        logOutGoogle,
        logInUsingGithub,
        user,
        isLoading,
        error
    }


}

export default useFirebase;
