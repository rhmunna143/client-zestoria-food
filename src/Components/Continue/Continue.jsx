import { useContext } from "react";
import { AllContext } from "../../Context/ContextProvider";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";


const Continue = () => {
    const {googleSignIn, path} = useContext(AllContext)
    const [socialUser, setSocialUser] = useState(null)

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result=> {
            const user = result?.user;

            setSocialUser(user)

            toast.success("Welcome, Login Success!!")
        })
        .catch(err => {
            toast.error(err.message)
        })
    }

    return (
        <div>
            <hr className="mt-4 w-1/4" />
            <p className="my-2">OR-</p>
            <hr className="w-1/4" />

            <button onClick={handleGoogleSignIn} className="bg-slate-200 text-green-600 mt-4 py-2 px-4 w-full">Continue with <span className="text-green-700">Google</span></button>

            {
                socialUser && (<Navigate to={path || "/"} />)
            }

        </div>
    );
};

export default Continue;