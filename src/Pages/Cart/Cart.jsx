/* eslint-disable no-unused-vars */
import CartCard from "./CartCard";
import { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import toast from "react-hot-toast";
import { AllContext } from "../../Context/ContextProvider";


const Cart = () => {
    const [loadedMyCart, setLoadedMyCart] = useState([])
    const [myCart, setMyCart] = useState([])

    const { user } = useContext(AllContext)
    const uid = user?.uid;

    useEffect(() => {
        fetch(`https://server-zistoria.vercel.app/cart/${uid}`)
            .then(res => res.json())
            .then(data => {
                setLoadedMyCart(data)
                setMyCart(data)
                // console.log(data);
            })
    }, [uid])

    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you have to add to cart again prof product details.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://server-zistoria.vercel.app/my-cart/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                toast.success("Item Deleted from your Cart.")

                                const filter = myCart.filter(items => items._id != _id);
                                setMyCart(filter)
                            }
                        })
                } else {
                    swal("Your cart item is not deleted.");
                }
            });
    }

    return (
        <div className="max-w-6xl mx-auto my-20 px-4 lg:px-0">
            <h2 className="text-4xl text-center mt-5 mb-10 font-bold">My Cart</h2>
            <p className="text-center my-10">Added items: {myCart?.length}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    myCart?.map(item => <CartCard key={item._id} cart={item} handleDelete={handleDelete}></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;