import Separator from "../Separator/Separator";

const Testimonial = () => {
    return (
        <section className="text-slate-700 mt-20">
            <div className="w-fit mx-auto text-center">
                <h6 className="font-kush text-green-600">Testimonial</h6>
                <h2 className="font-bold text-5xl text-black">What People Say</h2>
                <div className="w-fit mx-auto mt-5">
                    <Separator></Separator>
                </div>
            </div>
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                    <svg className="h-12 mx-auto mb-3 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                    </svg>
                    <blockquote>
                        <p className="text-2xl font-medium ">"Discovering this website has been a delightful culinary journey. The tantalizing recipes and expertly crafted content have elevated my cooking skills and inspired my passion for food. I can't thank the team enough for sharing their knowledge and making every meal an exciting adventure. Bravo!"

                           - Happy Foodie</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                        <div className="flex items-center divide-x-2 ">
                            <div className="pr-3 font-medium ">Micheal Gouge</div>
                            <div className="pl-3 text-sm font-light ">CEO at Google</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Testimonial;