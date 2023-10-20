/* eslint-disable react/prop-types */
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AllContext = createContext(null)

const ContextProvider = ({ children }) => {
    // shared context statements
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [path, setPath] = useState("")

    const googleProvider = new GoogleAuthProvider()

    const register = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn =() => {

        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {

        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            setUser(user)

            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const contextValue = {
        register,
        login,
        user,
        loading,
        path,
        setPath,
        logout,
        googleSignIn
    }

    return (
        <AllContext.Provider value={contextValue}>
            {children}
        </AllContext.Provider>
    );
};

export default ContextProvider;