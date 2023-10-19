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


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },

                {
                    path: "/add-product",
                    element: <AddProduct></AddProduct>
                },

                {
                    path: "/register",
                    element: <Registration></Registration>
                },

                {
                    path: "/login",
                    element: <Login></Login>
                },

                {
                    path: "/cart",
                    element: <Cart></Cart>
                },

                {
                    path:"brand/:brandName",
                    element: <BrandPage></BrandPage>,
                },

                {
                    path: "/details/:id",
                    element: <Details></Details>,
                    loader: ({params}) => fetch(`http://localhost:7000/details/${params.id}`)
                },

                {
                    path:"/update/:id",
                    element: <UpdateProduct></UpdateProduct>,
                    loader: ({params}) => fetch(`http://localhost:7000/details/${params.id}`)
                }
            ]
        }
    ]
)

export default router;