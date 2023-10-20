/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AllContext } from "./ContextProvider";
import Loading from "../Components/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {user, loading, setPath} = useContext(AllContext)

    const location = useLocation()
    const pathName = location.pathname;
    
    setPath(pathName)

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