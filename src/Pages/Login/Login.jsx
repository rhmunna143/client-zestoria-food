/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()

        const from = e.target;

        const email = from.email.value;
        const password = from.password.value;

        // login statements

        
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
                </div>
            </div>
        </div>
    );
};

export default Login;