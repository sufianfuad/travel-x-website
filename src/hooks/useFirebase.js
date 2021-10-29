import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut

} from "firebase/auth";


// Auth initialize
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("")

    //from firebase
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    //user SIGN IN with google 
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     // console.log(result.user)
        //     setUser(result.user);
        // })
        // .catch(err => {
        //     setError(err.message)
        // })
    }
    //LOGOUT user
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    //Observed signIn or Login user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return () => unsubscribed;
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;