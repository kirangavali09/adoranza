import BottomActionBar from "../components/BottomActionBar";
import HeroSwiper from "../components/HeroSwiper";
import ProductSwiper from "../components/ProductSwiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import NEW_COLLECTION_1 from "../assets/new-collection-1.webp";
import NEW_COLLECTION_2 from "../assets/new-collection-2.webp";
import NewCollectionBlock from "../components/NewCollectionBlock";

const Home = () => {

    return (
        <>
            <div className="w-full pt-16 hero-slider mb-8">
                <HeroSwiper />
            </div>

            <div className="w-full ps-4 lg:px-10 products-slider mb-8 md:mb-14 relative">
                <ProductSwiper />
            </div>

            <div className="w-full px-4 lg:px-10 flex flex-wrap justify-between max-lg:gap-6 my-10 lg:my-24">
                <div className="w-full lg:w-[46%] h-[100vw] lg:h-[45vw] overflow-hidden rounded-lg relative">
                    <img src={NEW_COLLECTION_1} className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-105" />
                    <NewCollectionBlock />
                </div>
                <div className="w-full lg:w-[52%] h-[100vw] lg:h-[45vw] overflow-hidden rounded-lg relative">
                    <img src={NEW_COLLECTION_2} className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-105" />
                    <NewCollectionBlock />
                </div>
            </div>

            <BottomActionBar />
        </>
    )
}

export default Home;