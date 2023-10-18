import './banner.css'

const Banner = () => {
    return (
        <div className="banner-bg text-xl">
            <div className='max-w-6xl mx-auto p-4 lg:p-0'>
                <div className='max-w-3xl'>
                    <h2 className='font-kush text-5xl md:text-7xl text-white'>"Where Every Bite is a Celebration."</h2>
                    <p className='text-white mt-5'>
                        "Satisfy your cravings, explore diverse cuisines, and sip on perfection. Join us on a gastronomic adventure that celebrates food and beverages, transforming every meal into an exquisite experience."
                    </p>

                    <button className='mt-4 bg-green-600 text-white py-2 px-5 text-base hover:bg-green-700'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;