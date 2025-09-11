import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export const SwiperNavButtons = () => {
    return (
        <>
            <div className="custom-swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer text-4xl text-white">
                <FaCircleChevronLeft />
            </div>
            <div className="custom-swiper-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer text-4xl text-white">
                <FaCircleChevronRight />
            </div>
        </>
    )
}

export const SwiperProductNavButtons = () => {
    return (
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-4 z-10 max-sm:hidden">
            <div className="custom-products-swiper-button-prev z-12 cursor-pointer text-3xl text-black">
                <FaCircleChevronLeft />
            </div>
            <div className="custom-products-swiper-button-next z-12 cursor-pointer text-3xl text-black">
                <FaCircleChevronRight />
            </div>
        </div>
    )
}