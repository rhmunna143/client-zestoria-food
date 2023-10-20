/* eslint-disable react/prop-types */
import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config";

export const AllContext = createContext(null)

const ContextProvider = ({children}) => {
    // shared context statements

    const register = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }
    

    const contextValue = {
        register,
        login
    }

    return (
        <AllContext.Provider value={contextValue}>
            {children}
        </AllContext.Provider>
    );
};

export default ContextProvider;