import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa6";
import { SwiperProductNavButtons } from "../components/SwiperNavButtons";

import HERO_PRODUCT_IMG_1 from '../assets/hero-product-1.webp';
import HERO_PRODUCT_IMG_2 from '../assets/hero-product-2.webp';
import HERO_PRODUCT_IMG_3 from '../assets/hero-product-3.webp';
import HERO_PRODUCT_IMG_4 from '../assets/hero-product-4.webp';
import HERO_PRODUCT_IMG_5 from '../assets/hero-product-5.webp';

const ProductSwiper = () => {

    return (
        <Swiper
            slidesPerView={1.5}
            spaceBetween={20}
            modules={[FreeMode, Navigation]}
            breakpoints={{
                425: {
                    slidesPerView: 1.8,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3.2,
                    spaceBetween: 30,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
            navigation={{
                nextEl: '.custom-products-swiper-button-next',
                prevEl: '.custom-products-swiper-button-prev',
            }} 
            className="w-full h-64 sm:h-96 md:h-96 lg:h-[30rem] cursor-pointer !static"
        >
            <SwiperSlide className="w-56 sm:w-68 md:w-96 lg:w-4xl relative overflow-hidden rounded-lg">
                <img src={HERO_PRODUCT_IMG_1} className="w-full h-full object-cover object-top-left rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-105"  alt="img1"/>
                <div className="absolute w-4/5 h-10 lg:h-14 bg-zinc-300 bottom-10 translate-x-4 lg:translate-x-10 opacity-75 flex items-center justify-center gap-4">
                    <span className="font-bold text-md sm:text-xl text-zinc-900">Rings</span>
                    <FaArrowRight />
                </div>
            </SwiperSlide>
            
            <SwiperSlide className="w-56 sm:w-68 md:w-96 lg:w-4xl overflow-hidden rounded-lg">
                <img src={HERO_PRODUCT_IMG_2} className="w-full h-full object-cover object-top-left rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-105"  alt="img2"/>
                <div className="absolute w-4/5 h-10 lg:h-14 bg-zinc-300 bottom-10 translate-x-4 lg:translate-x-10 opacity-75 flex items-center justify-center gap-4">
                    <span className="font-bold text-md sm:text-xl text-zinc-900">Ornaments</span>
                    <FaArrowRight />
                </div>
            </SwiperSlide>
            
            <SwiperSlide className="w-56 sm:w-68 md:w-96 lg:w-4xl overflow-hidden rounded-lg">
                <img src={HERO_PRODUCT_IMG_3} className="w-full h-full object-cover object-top-left rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-105"  alt="img3"/>
                <div className="absolute w-4/5 h-10 lg:h-14 bg-zinc-300 bottom-10 translate-x-4 lg:translate-x-10 opacity-75 flex items-center justify-center gap-4">
                    <span className="font-bold text-md sm:text-xl text-zinc-900">Gems</span>
                    <FaArrowRight />
                </div>
            </SwiperSlide>
            
            <SwiperSlide className="w-56 sm:w-68 md:w-96 lg:w-4xl overflow-hidden rounded-lg">
                <img src={HERO_PRODUCT_IMG_4} className="w-full h-full object-cover object-top-left rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-105"  alt="img4"/>
                <div className="absolute w-4/5 h-10 lg:h-14 bg-zinc-300 bottom-10 translate-x-4 lg:translate-x-10 opacity-75 flex items-center justify-center gap-4">
                    <span className="font-bold text-md sm:text-xl text-zinc-900">Bracelets</span>
                    <FaArrowRight />
                </div>
            </SwiperSlide>
            
            <SwiperSlide className="w-56 sm:w-68 md:w-96 lg:w-4xl overflow-hidden rounded-lg">
                <img src={HERO_PRODUCT_IMG_5} className="w-full h-full object-cover object-top-left rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-105"  alt="img5"/>
                <div className="absolute w-4/5 h-10 lg:h-14 bg-zinc-300 bottom-10 translate-x-4 lg:translate-x-10 opacity-75 flex items-center justify-center gap-4">
                    <span className="font-bold text-md sm:text-xl text-zinc-900">Manstyle</span>
                    <FaArrowRight />
                </div>
            </SwiperSlide>
            <SwiperProductNavButtons />
        </Swiper>
    )
}

export default ProductSwiper;