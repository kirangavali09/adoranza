import Logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";


const Navbar = () => {

    return (
        <>
            {/* Mobile Navbar */}
            <div className="w-full h-16 fixed flex items-center justify-between px-4 py-2 shadow-sm z-20 bg-white">
                <div className="w-44">
                    <img src={Logo} className='w-full h-full object-cover' alt="Logo"/>
                </div>
                <div className='flex gap-4'>
                    <CiSearch className='text-2xl font-bold'  />
                    <IoBagHandleOutline className='text-2xl font-bold' />
                </div>
            </div>
        </>
    )
}

export default Navbar;