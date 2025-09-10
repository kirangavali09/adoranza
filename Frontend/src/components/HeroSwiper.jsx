import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from "../components/SwiperNavButtons";
import { Pagination, Autoplay, Navigation } from 'swiper/modules';



import HERO_IMG_1 from '../assets/hero-slider-1.webp';
import HERO_IMG_2 from '../assets/hero-slider-2.webp';
import HERO_IMG_3 from '../assets/hero-slider-3.webp';
import HERO_IMG_4 from '../assets/hero-slider-4.webp';
const HeroSwiper = () => {

    return (
        <>
            <Swiper 
                pagination={true} autoplay={{ delay: 2500, disableOnInteraction: false,}}
                modules={[Pagination, Autoplay, Navigation]}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                className="w-full h-52 sm:h-80 md:h-96 xl:h-[calc(100vh-4rem)] cursor-pointer">
                    <SwiperSlide><img src={HERO_IMG_1} className="w-full h-full object-cover object-top-left"  alt="img1"/></SwiperSlide>
                    <SwiperSlide><img src={HERO_IMG_2} className="w-full h-full object-cover object-top-left"  alt="img2"/></SwiperSlide>
                    <SwiperSlide><img src={HERO_IMG_3} className="w-full h-full object-cover object-top-left"  alt="img3"/></SwiperSlide>
                    <SwiperSlide><img src={HERO_IMG_4} className="w-full h-full object-cover object-top-left"  alt="img4"/></SwiperSlide>
                    <SwiperNavButtons />
            </Swiper>
        </>
    )
}

export default HeroSwiper;