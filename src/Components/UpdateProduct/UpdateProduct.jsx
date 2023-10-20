/* eslint-disable react/no-unescaped-entities */
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const product = useLoaderData()
    const { brandName, _id, image, name, price, description, type, ratings } = product;

    const handleUpdateProduct = (e) => {
        e.preventDefault()

        const form = e.target;

        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brand.value;
        const price = form.price.value;
        const type = form.type.value;
        const description = form.description.value;
        const ratings = form.rating.value;

        const send = {
            image,
            name,
            brandName,
            price,
            description,
            ratings,
            type
        }

        fetch(`https://server-zistoria.vercel.app/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(send)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    toast.success("Product Update Success..!")
                }
            })
            .catch(err => toast.error(err))
    }


    return (
        <div className="max-w-6xl mx-auto my-20 bg-gray-200 py-10 px-4 lg:px-0">
            <h2 className="text-5xl font-bold text-center">Update A Product</h2>
            <div className="form mt-10 w-80 md:w-1/2 mx-auto">
                <form onSubmit={handleUpdateProduct}>
                    <input className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" type="text" name="image" required id="image" defaultValue={image} />

                    <input className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" type="text" name="name" required id="name" defaultValue={name} />

                    <select defaultValue={brandName} className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" name="brand" required id="brand">
                        <option value="">Select a Brand</option>
                        <option value="CocaCola">CocaCola</option>
                        <option value="Kellogg's">Kellogg's</option>
                        <option value="McDonald's">McDonald's</option>
                        <option value="Nestle">Nestle</option>
                        <option value="Pepsico">Pepsico</option>
                        <option value="Starbucks">Starbucks</option>
                    </select>

                    <input className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" type="text" name="type" required id="type" defaultValue={type} />

                    <input className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" type="text" name="price" required id="price" defaultValue={price} />

                    <input className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full h-16 mb-5" type="text" name="description" required id="description" defaultValue={description} />

                    <select defaultValue={ratings} className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" name="rating" required id="rating">
                        <option value="">Star Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <button type="submit" className="bg-green-600 text-white hover:bg-green-700 w-full px-4 py-2">Update Product</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;