/* eslint-disable no-unused-vars */
import { Link, Navigate } from "react-router-dom";
import Continue from "../../Components/Continue/Continue";
import { useContext } from "react";
import { AllContext } from "../../Context/ContextProvider";
import toast from "react-hot-toast";
import { useState } from "react";


const Login = () => {
    const [loggedUser, setLoggedUser] = useState(null)
    const { login } = useContext(AllContext);

    const handleLogin = (e) => {
        e.preventDefault()

        const from = e.target;

        const email = from.email.value;
        const password = from.password.value;

        // login statements

        login(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoggedUser(user)

                toast.success(user?.displayName + ", Welcome. Login successful.")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                toast.error(errorCode + errorMessage)
            })
    }

    return (
        <div className="max-w-6xl mx-auto px-4 lg:px-0 my-20">
            <div className="w-80 md:w-1/2 mx-auto shadow-md">
                <h3 className="text-center text-4xl font-bold text-white bg-green-600 p-5 mb-2">Login</h3>
                <div className="p-4">
                    <form onSubmit={handleLogin}>
                        <input type="email" name="email" id="email" placeholder="Your Email" className="border border-green-700 py-2 px-4 my-2 w-full bg-transparent" required />

                        <input type="password" name="password" id="password" placeholder="Password" className="border border-green-700 py-2 px-4 my-2 w-full bg-transparent" required />

                        <button type="submit" className="bg-green-600 text-white py-2 px-4 w-full my-2 hover:bg-green-700">Login</button>

                        <p className="text-center">No account? <Link to="/register"><span className="text-green-600 hover:text-green-700">Register Now</span></Link></p>
                    </form>
                    <div>
                        <Continue />
                    </div>
                </div>
            </div>

            {
                loggedUser && (<Navigate to="/" />)
            }
        </div>
    );
};

export default Login;