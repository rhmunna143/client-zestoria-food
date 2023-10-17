import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            Root

            <Outlet></Outlet>
        </div>
    );
};

export default Root;