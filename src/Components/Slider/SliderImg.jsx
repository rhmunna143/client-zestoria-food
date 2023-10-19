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

const SliderImg = () => {
    return (
        <div className='relative'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{delay: 1000}}
            >
                <SwiperSlide>
                    <img className='w-full' src="https://i.ibb.co/P6Mj7tw/coke2.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='w-full' src="https://i.ibb.co/54ptzKF/spencer-davis-dx-TBgn-HZ8-ZE-unsplash.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='w-full' src="https://i.ibb.co/XFsRXg5/thomas-tucker-MNtag-e-XMKw-unsplash.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SliderImg;