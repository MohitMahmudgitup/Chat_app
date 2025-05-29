import React from 'react'
import { IoIosSend } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { MdAttachFile } from "react-icons/md";
const ChatMessagesbuttom = () => {
  return (
    <section className="sticky  w-full p-4  flex items-center justify-between rounded-lg shadow-2xl">
      <div className='flex items-center gap-2 w-full h-full'>
         <div className='relative group text-[#2E8AF8] px-2 py-2 rounded-full hover:bg-[#474747a8]  cursor-pointer'>
          <MdAttachFile size={20} />
           <div className="absolute -right-28  top-1/2 -translate-y-12 ml-2 hidden group-hover:block text-center bg-white text-black text-xs p-1 rounded-lg shadow-lg w-40 z-10">
                Attach a file up to 100MB
               </div>
          </div>
         <div className='relative group text-[#2E8AF8] px-2 py-2 rounded-full hover:bg-[#474747a8]  cursor-pointer'>
          <FaRegImage size={20} />
           <div className="absolute -right-28  top-1/2 -translate-y-12 ml-2 hidden group-hover:block text-center bg-white text-black text-xs p-1 rounded-lg shadow-lg w-40 z-10">
                Attach a file up to 100MB
               </div>
          </div>
        <input type="text" placeholder='Type a message...' className='w-full bg-[#3A3B3C] py-2 px-4 rounded-full outline-none text-white' />
        <div className='relative group text-[#2E8AF8] px-2 py-2 rounded-full hover:bg-[#474747a8]  cursor-pointer'>
          <IoIosSend size={24} />
           <div className="absolute -right-2  top-1/2 -translate-y-14 ml-2 hidden group-hover:block text-center bg-white text-black text-sm p-1 rounded-lg shadow-lg w-32 z-10">
                send message 
               </div>
          </div>
      </div>
    </section>
  )
}

export default ChatMessagesbuttom
