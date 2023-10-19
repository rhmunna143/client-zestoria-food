import { Outlet } from "react-router-dom";
import Nav from "../../Components/Header/Nav";
import Footer from "../../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Root;