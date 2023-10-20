import { useState } from "react";
import Separator from "../Separator/Separator";
import { useEffect } from "react";
import Brand from "./Brand";


const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch("https://server-zistoria.vercel.app/brands")
        .then(res => res.json())
        .then(data => setBrands(data))
    }, [])

    return (
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
            <div className="w-fit mx-auto text-center">
                <h6 className="text-green-600 font-kush mt-10">Best For You</h6>
                <h2 className="text-5xl font-bold">Our Special Brands</h2>
                <div className="mt-5 w-fit mx-auto">
                    <Separator></Separator>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        brands?.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brands;