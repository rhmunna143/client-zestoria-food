/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { brandName, image } = brand;

    return (
        <Link to={`/brand/${brandName}`}>
            <div className="shadow-md p-4">
                <div className="img">
                    <img className="h-[480px] w-96" src={image} alt="brand" />
                </div>

                <div className="text mt-4">
                    <h5 className="text-lg font-semibold text-slate-600">{brandName}</h5>
                </div>
            </div>
        </Link>
    );
};

export default Brand;