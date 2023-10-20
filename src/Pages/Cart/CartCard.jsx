/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const CartCard = ({ cart, handleDelete }) => {
    const { brandName, _id, image, name, price, type } = cart;

    return (
        <div className="shadow-md p-4">
            <div className="img">
                <img className="h-80 w-full" src={image} alt="" />
            </div>

            <div className="text space-y-2 mt-5 text-base">
                <h5 className="text-xl font-medium text-green-600">{name}</h5>
                <p className="">{brandName}</p>
                <p>{type}</p>
                <p className="font-medium">Price: ${price}</p>

                <div className="flex justify-between items-center gap-5">
                    <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 mt-2 ">Checkout</button>
                    <button onClick={()=> handleDelete(_id)} className="bg-green-600 hover:bg-green-700 text-white py-2 px-8 mt-2 ">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;