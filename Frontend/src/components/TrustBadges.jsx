import { CiDeliveryTruck } from "react-icons/ci";
import { IoCartOutline, IoReturnDownBackOutline } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";

const TrustBadges = () => {

    return (
        <div className="w-full flex justify-center flex-wrap my-10 lg:my-24 max-md:hidden">
            <div className="lg:border-r-1 border-gray-400 flex gap-4 items-center px-6 py-2">
                <CiDeliveryTruck className="w-12 h-12 rounded-full bg-zinc-950 text-white p-2" />
                <div>
                    <h2 className="font-bold text-lg">Fast Delivery</h2>
                    <span>For Orders Above 499</span>
                </div>
            </div>
            <div className="lg:border-r-1 border-gray-400 flex gap-4 items-center px-6 py-2">
                <IoCartOutline  className="w-12 h-12 rounded-full bg-zinc-950 text-white p-2" />
                <div>
                    <h2 className="font-bold text-lg">Easy Checkout</h2>
                    <span>Easy Checkout Process</span>
                </div>
            </div>
            <div className="lg:border-r-1 border-gray-400 flex gap-4 items-center px-6 py-2">
                <IoReturnDownBackOutline  className="w-12 h-12 rounded-full bg-zinc-950 text-white p-2" />
                <div>
                    <h2 className="font-bold text-lg">Easy Return</h2>
                    <span>7 days return for product</span>
                </div>
            </div>
            <div className="flex gap-4 items-center px-6 py-2">
                <RiSecurePaymentFill  className="w-12 h-12 rounded-full bg-zinc-950 text-white p-2" />
                <div>
                    <h2 className="font-bold text-lg">Secure Payment</h2>
                    <span className="text-gray-600 text-md">Secure Transaction</span>
                </div>
            </div>
        </div>
    )
}

export default TrustBadges;