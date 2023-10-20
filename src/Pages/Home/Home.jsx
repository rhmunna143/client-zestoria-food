import About from "../../Components/About/About";
import Brands from "../../Components/Brands/Brands";
import Banner from "../../Components/Header/Banner";
import HotDeal from "../../Components/HotDeal/HotDeal";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Brands></Brands>
            <HotDeal></HotDeal>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;