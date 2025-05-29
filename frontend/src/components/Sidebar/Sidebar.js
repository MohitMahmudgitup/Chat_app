import React from 'react'
import { ComposIcons } from "../../assets/icons/ComposIcons.js";
import SideUserCart from '../msgComponents/SideUserCart.js';
const Sidebar = () => {
    const cartItems = new Array(20).fill({});
    return (
        <div className=" w-1/2 h-screen text-white py-4 px-2">
            <div className=' bg-[#1F1F1F]  w-full h-full  rounded-lg shadow-2xl'>
                <div className=' px-5 py-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-2xl font-bold f1 '>Chats</h2>
                        <div className='relative group bg-[#474747] pl-2 rounded-full flex items-center justify-center w-10 h-10 cursor-pointer hover:bg-[#575757] '>
                            <ComposIcons />
                            <div className="absolute -right-4  top-1/2 translate-y-7 ml-2 hidden group-hover:block text-center bg-white text-black text-sm p-1 rounded-lg shadow-lg w-20 z-10">
                                Compose
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#474747] w-full h-10 mt-2 rounded-full flex items-center px-4'>
                        <input type="text" placeholder='Search' className='w-full bg-transparent outline-none text-white' />    
                    </div>
                </div>
               <div className='flex flex-col mt-4 h-[73vh] overflow-y-scroll custom-scrollbar px-1'> 
                    {cartItems.map((item, index) => (
                        <SideUserCart key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
