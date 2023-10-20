/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Continue from "../../Components/Continue/Continue";
import { useContext } from "react";
import { AllContext } from "../../Context/ContextProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase.config";


const Registration = () => {
    const [error, setPassError] = useState("")
    const {register} = useContext(AllContext)
    const [sign, setSign] = useState(null)

    const handleRegister = (e) => {
        e.preventDefault()

        const passwordPattern = /^.{6,}$/;
        const capitalLetterPattern = /[A-Z]/;
        const specialCharacterPattern = /[^A-Za-z0-9]/;

        const from = e.target;

        const name = from.name.value;
        const image = from.image.value;
        const email = from.email.value;
        const password = from.password.value;

        setPassError("")

        if (!passwordPattern.test(password)) {
            setPassError("Password must be 6 character or greater!")

            return;
        } else if (!capitalLetterPattern.test(password)) {
            setPassError("Password must have one Capital letter!")

            return;
        } else if (!specialCharacterPattern.test(password)) {
            setPassError("Password must have a special character!")

            return;
        }

        // for truthy password go to register
        // register statements

        register(email, password)
        .then(userCredentials => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image
            })
            
            setSign(userCredentials?.user)
            toast.success('Registration successful Login now.')
        })
        .catch(err => {
            toast.error(err?.message)
        })
    
    }

    return (
        <div className="max-w-6xl mx-auto px-4 lg:px-0 my-20">
            <div className="w-80 md:w-1/2 mx-auto shadow-md">
                <h3 className="text-center text-4xl font-bold text-white bg-green-600 p-5 mb-2">Registration</h3>
                <div className="p-4">
                    <form onSubmit={handleRegister}>
                        <input type="text" name="name" id="name" placeholder="Your Name" className="border border-green-700 py-2 px-4 my-2 w-full bg-transparent" required />

                        <input type="text" name="image" id="image" placeholder="Display Picture URL" className="border border-green-700 py-2 px-4 my-2 w-full bg-transparent" required />

                        <input type="email" name="email" id="email" placeholder="Your Email" className="border border-green-700 py-2 px-4 my-2 w-full bg-transparent" required />

                        <input type="password" name="password" id="password" placeholder="Password" className="border border-green-700 py-2 px-4 my-2 w-full bg-transparent" required />

                        {
                            error && <p className="my-2 text-red-700">
                                {error}
                            </p>
                        }

                        <button type="submit" className="bg-green-600 text-white py-2 px-4 w-full my-2 hover:bg-green-700">Register Now</button>

                        <p className="text-center">Already have account? <Link to="/login"><span className="text-green-600 hover:text-green-700">Login</span></Link></p>
                    </form>

                    <div>
                        <Continue />
                    </div>
                </div>
            </div>

            {
                sign && (<Navigate to="/login" />)
            }
        </div>
    );
};

export default Registration;