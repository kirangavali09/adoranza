import BottomActionBar from "../components/BottomActionBar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa6";

import HERO_IMG_1 from '../assets/hero-slider-1.webp';
import HERO_IMG_2 from '../assets/hero-slider-2.webp';
import HERO_IMG_3 from '../assets/hero-slider-3.webp';
import HERO_IMG_4 from '../assets/hero-slider-4.webp';

import HERO_PRODUCT_IMG_1 from '../assets/hero-product-1.webp';
import HERO_PRODUCT_IMG_2 from '../assets/hero-product-2.webp';
import HERO_PRODUCT_IMG_3 from '../assets/hero-product-3.webp';
import HERO_PRODUCT_IMG_4 from '../assets/hero-product-4.webp';
import HERO_PRODUCT_IMG_5 from '../assets/hero-product-5.webp';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const Home = () => {

    return (
        <>
            <div className="w-full pt-16 hero-slider mb-8">
                <Swiper 
                    pagination={true} autoplay={{ delay: 2500, disableOnInteraction: false,}}
                    modules={[Pagination, Autoplay]} 
                    className="w-full h-52 sm:h-80 md:h-96 xl:h-[calc(100vh-4rem)]">
                    <SwiperSlide><img src={HERO_IMG_1} className="w-full h-full object-cover object-top-left"  alt="img1"/></SwiperSlide>
                    <SwiperSlide><img src={HERO_IMG_2} className="w-full h-full object-cover object-top-left"  alt="img2"/></SwiperSlide>
                    <SwiperSlide><img src={HERO_IMG_3} className="w-full h-full object-cover object-top-left"  alt="img3"/></SwiperSlide>
                    <SwiperSlide><img src={HERO_IMG_4} className="w-full h-full object-cover object-top-left"  alt="img4"/></SwiperSlide>
                </Swiper>
            </div>

            <div className="w-full ps-4 lg:px-10 products-slider mb-8">
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode]}
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
                    className="w-full h-64 sm:h-96 md:h-96 lg:h-[30rem]"
                >
                    <SwiperSlide className="w-56 sm:w-68 md:w-96 lg:w-4xl relative">
                        <img src={HERO_PRODUCT_IMG_1} className="w-full h-full object-cover object-top-left rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-98 overflow-hidden"  alt="img1"/>
                        <div className="absolute w-4/5 h-10 lg:h-14 bg-zinc-300 bottom-10 translate-x-4 lg:translate-x-10 opacity-75 flex items-center justify-center gap-4">
                            <span className="font-bold text-md sm:text-xl text-zinc-900">Rings</span>
                            <FaArrowRight />
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className="w-56 sm:w-68 md:w-96 lg:w-4xl">
                        <img src={HERO_PRODUCT_IMG_2} className="w-full h-full object-cover object-top-left rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-98 overflow-hidden"  alt="img2"/>
                        <div className="absolute w-4/5 h-10 lg:h-14 bg-zinc-300 bottom-10 translate-x-4 lg:translate-x-10 opacity-75 flex items-center justify-center gap-4">
                            <span className="font-bold text-md sm:text-xl text-zinc-900">Ornaments</span>
                            <FaArrowRight />
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className="w-56 sm:w-68 md:w-96 lg:w-4xl">
                        <img src={HERO_PRODUCT_IMG_3} className="w-full h-full object-cover object-top-left rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-98 overflow-hidden"  alt="img3"/>
                        <div className="absolute w-4/5 h-10 lg:h-14 bg-zinc-300 bottom-10 translate-x-4 lg:translate-x-10 opacity-75 flex items-center justify-center gap-4">
                            <span className="font-bold text-md sm:text-xl text-zinc-900">Gems</span>
                            <FaArrowRight />
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className="w-56 sm:w-68 md:w-96 lg:w-4xl">
                        <img src={HERO_PRODUCT_IMG_4} className="w-full h-full object-cover object-top-left rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-98 overflow-hidden"  alt="img4"/>
                        <div className="absolute w-4/5 h-10 lg:h-14 bg-zinc-300 bottom-10 translate-x-4 lg:translate-x-10 opacity-75 flex items-center justify-center gap-4">
                            <span className="font-bold text-md sm:text-xl text-zinc-900">Bracelets</span>
                            <FaArrowRight />
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className="w-56 sm:w-68 md:w-96 lg:w-4xl">
                        <img src={HERO_PRODUCT_IMG_5} className="w-full h-full object-cover object-top-left rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-98 overflow-hidden"  alt="img5"/>
                        <div className="absolute w-4/5 h-10 lg:h-14 bg-zinc-300 bottom-10 translate-x-4 lg:translate-x-10 opacity-75 flex items-center justify-center gap-4">
                            <span className="font-bold text-md sm:text-xl text-zinc-900">Manstyle</span>
                            <FaArrowRight />
                        </div>
                    </SwiperSlide>
                    <FaArrowRight />
                </Swiper>
            </div>

            <BottomActionBar />
        </>
    )
}

export default Home;