/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AllContext = createContext(null)

const ContextProvider = ({children}) => {
    // shared context statements
    

    const contextValue = {

    }

    return (
        <AllContext.Provider value={contextValue}>
            {children}
        </AllContext.Provider>
    );
};

export default ContextProvider;