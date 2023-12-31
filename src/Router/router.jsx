import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Details/Details";
import Cart from "../Pages/Cart/Cart";
import BrandPage from "../Pages/BrandPage/BrandPage";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import ProtectedRoute from "../Context/ProtectedRoute";
import NotFoundPage from "../Pages/NotFound/NotFound";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            errorElement: <NotFoundPage />,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },

                {
                    path: "/add-product",
                    element: <ProtectedRoute><AddProduct></AddProduct></ProtectedRoute>
                },

                {
                    path: "/register",
                    element: <Registration></Registration>
                },

                {
                    path: "/login",
                    element: <Login></Login>
                },

                // https://server-zistoria.vercel.app/my-cart

                {
                    path: "/cart",
                    element: <ProtectedRoute><Cart></Cart></ProtectedRoute>,
                    // loader: () => fetch("https://localhost:7000/my-cart", {
                    //     method: "GET",
                    //     headers: {
                    //         "content-type": "application/json"
                    //     },
                    //     body: JSON.stringify(uid)
                    // })
                },

                {
                    path:"brand/:brandName",
                    element: <BrandPage></BrandPage>,
                },

                {
                    path: "/details/:id",
                    element: <ProtectedRoute><Details></Details></ProtectedRoute>,
                    loader: ({params}) => fetch(`https://server-zistoria.vercel.app/details/${params.id}`)
                },

                {
                    path:"/update/:id",
                    element: <ProtectedRoute><UpdateProduct></UpdateProduct></ProtectedRoute>,
                    loader: ({params}) => fetch(`https://server-zistoria.vercel.app/details/${params.id}`)
                }
            ]
        }
    ]
)

export default router;