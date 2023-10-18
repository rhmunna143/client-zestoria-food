import About from "../../Components/About/About";
import Brands from "../../Components/Brands/Brands";
import Banner from "../../Components/Header/Banner";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Brands></Brands>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;