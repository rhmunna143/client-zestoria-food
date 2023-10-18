import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"


const Nav = () => {
    return (
        <div className="max-w-6xl mx-auto flex justify-center md:justify-between flex-wrap py-5 md:px-4 lg:px-0">
            <div className="logo font-kush text-green-600">
                <h2 className="text-5xl">Zestoria</h2>
            </div>

            <div className="menu flex justify-center md:justify-between gap-4 flex-wrap items-center">
                <div className="menus flex justify-center md:justify-between gap-4 flex-wrap items-center">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-600" : "text-black"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/add-product"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-600" : "text-black"
                        }
                    >
                        Add Product
                    </NavLink>


                </div>

                <div className="user flex justify-center md:justify-between gap-4 flex-wrap items-center">

                    <p>
                        |
                    </p>

                    <div className="auth flex justify-center md:justify-between gap-4 flex-wrap items-center">
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600" : "text-black"
                            }
                        >
                            Registration
                        </NavLink>

                        <NavLink
                            to="/cart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 text-xl" : "text-black text-xl"
                            }
                        >
                            <p title="My Cart">
                                <AiOutlineShoppingCart />
                            </p>

                        </NavLink>

                        <div className="info">
                            pp username
                        </div>

                        <Link to="/login">
                            <button className="bg-green-600 text-white py-1 px-4">Login</button>
                        </Link>

                        <button className="bg-green-600 text-white py-1 px-4">Logout</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;