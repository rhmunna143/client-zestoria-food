import Separator from "../Separator/Separator";
import "./about.css"

const About = () => {
    return (
        <div className="about-bg lg:py-40 py-10 px-4 lg:px-0">
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center">
                <div className="img">
                    <img className="" src="https://i.ibb.co/R43JdhB/juice.png" alt="juice" />
                </div>

                <div className="text max-w-xl md:w-3/4">
                    <h6 className="text-green-600 font-kush">Drink For Health</h6>
                    <h2 className="text-5xl font-bold">Fresh Fruit <span className="text-green-600">Juices</span></h2>
                    <div className="mt-5">
                        <Separator></Separator>
                    </div>

                    <p className="mt-8 text-slate-600 text-lg">
                        Fruit juice, derived from the natural essence of fruits, offers a refreshing and delicious way to stay hydrated while obtaining essential nutrients. With a vast array of flavors, it provides vital vitamins like vitamin C and essential minerals. Its natural sweetness makes it a palatable choice, ideal for quenching thirst and enjoying the health benefits of fruits in a convenient and flavorful form
                    </p>

                    <button className='mt-5 bg-green-600 text-white py-2 px-5 text-base hover:bg-green-700'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default About;