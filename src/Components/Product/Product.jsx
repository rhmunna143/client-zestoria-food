/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Rate } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Product = ({ product }) => {
    const { brandName, _id, image, name, price, type, ratings } = product;
    const [value, setValue] = useState(ratings);

    return (
        <div className="shadow-md border-green-500 p-4">
            <div className="img">
                <img className="h-80 w-full" src={image} alt="product" />
            </div>

            <div className="text">
                <h3 className="text-xl font-medium mt-5">{name}</h3>
                <h4 className="text-lg mt-1">{brandName}</h4>
                <h4 className="text-base">{type}</h4>

                <p>Price: ${price}</p>

                <div className="rating my-2">
                    <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                </div>

                <div className="flex justify-between">
                    <Link to={`/details/${_id}`}>
                        <button className="bg-green-600 text-white py-2 px-8 my-2 hover:bg-green-700">Details</button>
                    </Link>

                    <Link to={`/update/${_id}`}>
                        <button className="bg-green-600 text-white py-2 px-8 my-2  hover:bg-green-700">Update</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Product;