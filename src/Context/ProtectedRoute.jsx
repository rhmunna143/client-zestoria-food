/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AllContext } from "./ContextProvider";
import Loading from "../Components/Loading/Loading";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AllContext)

    if(loading) {
        
        return (
            <div className="h-screen flex justify-center items-center">
                <Loading></Loading>
            </div>
        )
    }

    if(!user){
        
        return <Navigate to="/login" />
    }
    
    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;