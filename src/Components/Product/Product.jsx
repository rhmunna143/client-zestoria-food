/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";


const Product = ({product}) => {
    const { brandName, _id, image, name, price, description, type, rating} = product
    return (
        <div className="shadow-md border-green-500 p-4">
            <div className="img">
                <img className="h-96" src={image} alt="" />
            </div>

            <div className="text">
                <h3 className="text-xl font-medium mt-5">{name}</h3>
                <h4 className="text-base mt-1">{type}</h4>

                <Link to={`/details/${_id}`}>
                    <button className="bg-green-600 text-white py-2 px-4 w-full my-2 hover:bg-green-700">Details</button>
                </Link>

                <Link to={`/update/${_id}`}>
                    <button className="bg-green-600 text-white py-2 px-4 w-full my-2  hover:bg-green-700">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default Product;