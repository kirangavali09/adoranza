import { IoHomeOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { LuUser } from "react-icons/lu";

const BottomActionBar = () => {

    return (
        <div className="w-full px-4 py-2 h-16 bottom-0 fixed flex justify-between border-t-1 border-gray-200 bg-white sm:hidden z-2">
            <div className="flex flex-col justify-center items-center gap-1">
                <IoHomeOutline className="text-2xl font-extrabold text-yellow-600" />
                <div className="font-semibold text-yellow-600">Home</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <TbCategory className="text-2xl font-bold" />
                <div className="font-semibold">Categories</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <FaRegHeart className="text-xl font-bold" />
                <div className="font-semibold">Wishlist</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <LuUser className="text-2xl font-bold" />
                <div className="font-semibold">Profile</div>
            </div>
        </div>
    )
}

export default BottomActionBar;