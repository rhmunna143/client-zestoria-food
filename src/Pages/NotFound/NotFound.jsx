
import { Link, Navigate } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-blue-200">
            <div className="text-center">
                <h1 className="text-6xl text-red-600 font-extrabold">404</h1>
                <p className="text-2xl text-gray-800">Page Not Found</p>
                <img onClick={() => <Navigate to="/" />}
                    src="https://i.ibb.co/GxwVwgN/Pu-Xip-AW3-AXUz-UJ4u-Yyx-PKC-1200-80.jpg"
                    alt="Funny 404 Image"
                    className="mx-auto w-[20vw] mt-6"
                />

                <p className="text-lg text-gray-700">
                    Oops! It seems you've stumbled upon an unknown path.
                </p>

                <p className="text-lg text-gray-700">
                    Don't worry; you can go back to the{" "}
                    <Link to={"/"} className="text-blue-500 hover:underline">
                        
                            Home Page
                        
                    </Link>
                    .
                </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="fill-current text-blue-200"
                >
                    <path d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,186.7C840,192,960,160,1080,138.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
                </svg>
            </div>
        </div>
    );
};

export default NotFoundPage;