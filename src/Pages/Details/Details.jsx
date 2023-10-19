/* eslint-disable no-unused-vars */
import { Rate } from "antd";
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const product = useLoaderData()
    const { brandName, _id, image, name, price, description, type, ratings } = product;

    return (
        <div className="max-w-6xl mx-auto my-20 flex flex-col md:flex-row justify-center items-center gap-10 md:px-4 lg:px-0">
            <div className="img md:w-1/3 px-4 md:px-0">
                <img className="md:mx-0" src={image} alt="" />
            </div>

            <div className="text space-y-3">
                <h2 className="text-4xl font-bold mt-6 md:mt-0">{name}</h2>
                <h4 className="text-xl">{brandName}</h4>
                <h4 className="text-lg">{type}</h4>
                <p>Price: ${price}</p>
                <div className="rate">
                    <Rate value={ratings} />
                </div>

                <p>{description}</p>

                <button className="bg-green-600 text-white hover:bg-green-700 py-2 px-8">Att to Cart</button>
            </div>
        </div>
    );
};

export default Details;