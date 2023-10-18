/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";

const UpdateProduct = () => {
    const [brand, setBrand] = useState("")
    const [rating, setRating] = useState("")

    const handleBrand = (e) => {
        const brand = e.target.value;
        setBrand(brand)
    }

    const handleRating = (e) => {
        const rating = e.target.value;
        setRating(rating)
    }

    const handleUpdateProduct = (e) => {
        e.preventDefault()

        const form = e.target;

        const image = form.image.value;
        const name = form.name.value;
        const brandName = brand;
        const price = form.price.value;
        const description = form.description.value;
        const ratings = rating;

        const send = {
            image,
            name,
            brandName,
            price,
            description,
            ratings
        }

        console.log(send);
    }


    return (
        <div className="max-w-6xl mx-auto my-20 bg-gray-200 py-10 px-4 lg:px-0">
            <h2 className="text-5xl font-bold text-center">Update A Product</h2>
            <div className="form mt-10 w-80 md:w-1/2 mx-auto">
                <form onSubmit={handleUpdateProduct}>
                    <input className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" type="text" name="image" required id="image" placeholder="Image URL" />

                    <input className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" type="text" name="name" required id="name" placeholder="Product Name" />

                    <select onChange={handleBrand} value={brand} className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" name="brand" required id="brand">
                        <option value="">Select a Brand</option>
                        <option value="CocaCola">CocaCola</option>
                        <option value="Kellogg's">Kellogg's</option>
                        <option value="McDonald's">McDonald's</option>
                        <option value="Nestle">Nestle</option>
                        <option value="Pepsico">Pepsico</option>
                        <option value="Starbucks">Starbucks</option>
                    </select>

                    <input className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" type="text" name="type" required id="type" placeholder="Product Type" />

                    <input className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" type="text" name="price" required id="price" placeholder="Price" />

                    <input className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full h-16 mb-5" type="text" name="description" required id="description" placeholder="Short Description" />

                    <select onChange={handleRating} value={rating} className="border border-green-600 text-green-950 px-4 py-2 bg-transparent w-full mb-5" name="rating" required id="rating">
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