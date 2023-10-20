import { useParams } from "react-router-dom";
import SliderImg from "../../Components/Slider/SliderImg";
import { useEffect, useState } from "react";
import Product from "../../Components/Product/Product";


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
        <div>
            <SliderImg></SliderImg>
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