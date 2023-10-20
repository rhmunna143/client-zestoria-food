/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* https://i.ibb.co/P6Mj7tw/coke2.jpg
https://i.ibb.co/54ptzKF/spencer-davis-dx-TBgn-HZ8-ZE-unsplash.jpg
https://i.ibb.co/XFsRXg5/thomas-tucker-MNtag-e-XMKw-unsplash.jpg */

const SliderImg = ({products}) => {
    const slicedProducts = products?.slice(1, 4);

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{delay: 1000}}
            >
                {/* <SwiperSlide>
                    <img className='w-full' src="https://i.ibb.co/P6Mj7tw/coke2.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='w-full' src="https://i.ibb.co/54ptzKF/spencer-davis-dx-TBgn-HZ8-ZE-unsplash.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='w-full' src="https://i.ibb.co/XFsRXg5/thomas-tucker-MNtag-e-XMKw-unsplash.jpg" alt="" />
                </SwiperSlide> */}

                {
                    slicedProducts?.map(product=> <SwiperSlide key={product._id}>
                        <img className='h-screen w-full' src={product.image} alt="slider img" />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default SliderImg;