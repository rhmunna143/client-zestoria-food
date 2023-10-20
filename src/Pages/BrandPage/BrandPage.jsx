import { useParams } from "react-router-dom";
import SliderImg from "../../Components/Slider/SliderImg";
import { useEffect, useState } from "react";
import Product from "../../Components/Product/Product";
import Separator from "../../Components/Separator/Separator";

const BrandPage = () => {
    const [products, setProducts] = useState([])
    const params = useParams()
    const name = params.brandName;

    useEffect(() => {
        fetch(`https://server-zistoria.vercel.app/brand/${name}`)
            .then(res => res.json())
            .then(data => setProducts(data))

            .catch(err => console.error(err))
    }, [name])

    return (
        <div className="my-12">
            <SliderImg products={products}></SliderImg>
            <div className="w-fit mx-auto text-center mt-20">
                <h4 className="font-kush text-green-600">Our Best Products from</h4>
                <h2 className="text-5xl font-bold">{name}</h2>
                <div className="w-fit mx-auto mt-5">
                    <Separator />
                </div>
            </div>
            <div className="max-w-6xl mx-auto my-20">
                {
                    products.length > 0 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            products.map(product => <Product key={product.id} product={product}></Product>)
                        }
                    </div>
                }

                {
                    products.length == 0 && <p className="text-center text-4xl font-bold text-green-800">Products from this Brand is not available right now. Come again later.</p>
                }
            </div>
        </div>
    );
};

export default BrandPage;