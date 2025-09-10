import BottomActionBar from "../components/BottomActionBar";
import HeroSwiper from "../components/HeroSwiper";
import ProductSwiper from "../components/ProductSwiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const Home = () => {

    return (
        <>
            <div className="w-full pt-16 hero-slider mb-8">
                <HeroSwiper />
            </div>

            <div className="w-full ps-4 lg:px-10 products-slider mb-8 relative">
                <ProductSwiper />
            </div>

            <BottomActionBar />
        </>
    )
}

export default Home;