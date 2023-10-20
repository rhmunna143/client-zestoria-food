import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"
import DarkModeToggle from "../../DarkMode/DarkModeToggle";
import { useContext } from "react";
import { AllContext } from "../../Context/ContextProvider";
import LoadingSmall from "../Loading/LoadingSmall";

const Nav = () => {
    const { user, logout, loading } = useContext(AllContext)

    return (
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center lg:justify-between py-5 md:px-4 lg:px-0">
            <div className="logo font-kush text-green-600">
                <h2 className="text-5xl">Zestoria</h2>
            </div>

            <div className="menu flex justify-center md:justify-between gap-4 items-center">
                <div className="menus flex justify-center md:justify-between gap-4 flex-wrap items-center">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-600" : ""
                        }
                    >
                        Home
                    </NavLink>

                    {
                        user && <NavLink
                            to="/add-product"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600" : ""
                            }
                        >
                            Add Product
                        </NavLink>
                    }

                    <p>
                        |
                    </p>

                    <div className="auth flex justify-center md:justify-between gap-4 flex-wrap items-center">
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600" : ""
                            }
                        >
                            Registration
                        </NavLink>

                        <NavLink
                            to="/cart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 text-xl" : " text-xl"
                            }
                        >
                            <p title="My Cart">
                                <AiOutlineShoppingCart />
                            </p>

                        </NavLink>

                        {
                            !loading ? <div className="info flex items-center gap-2">
                                {
                                    user && <img src={user?.photoURL} alt="DP" className="w-12 h-12 aspect-square rounded-full" />
                                }

                                {
                                    user && <p>{user.displayName}</p>
                                }
                            </div>

                            :

                            <LoadingSmall></LoadingSmall>
                        }

                        {
                            !user && <Link to="/login">
                                <button className="bg-green-600 text-white py-1 px-4">Login</button>
                            </Link>
                        }

                        {
                            user && <button onClick={logout} className="bg-green-600 text-white py-1 px-4">Logout</button>
                        }

                        <div>
                            <DarkModeToggle></DarkModeToggle>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;