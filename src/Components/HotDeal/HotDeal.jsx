import BottomDivider from "../Separator/BootomDivider";
import Separator from "../Separator/Separator";
import TopDivider from "../Separator/TopDivider";
import "./hot.css"

const HotDeal = () => {
    return (
        <div className="deal-bg py-[150px] my-20 relative">
            <div className="separator-top absolute top-0">
                <TopDivider />
            </div>
            
            <div className="flex justify-center items-center circle-deal w-[350px] md:w-[500px] h-full aspect-square md:aspect-square rounded-full p-10 relative md:left-20">
                <div className="text-white text-center">
                    <h4 className="font-kush">30% off for hot now</h4>
                    <h2 className="text-4xl font-bold mt-2">Hot Deals</h2>
                    <div className="w-fit mx-auto mt-5 text-white">
                        <Separator />
                    </div>

                    <button className="bg-white text-black font-medium mt-5 py-2 px-4 hover:text-white hover:bg-black">Buy Now</button>
                </div>
            </div>

            <div className="bottom-separator absolute bottom-0">
                <BottomDivider />
            </div>
        </div>
    );
};

export default HotDeal;