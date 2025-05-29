import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { TfiMoreAlt } from "react-icons/tfi";
const ChatMessagesNavber = () => {
  return (
    <section className='flex sticky top-0 items-center justify-between w-full h-16 px-4  bg-[#1F1F1F] '>
      <div className='flex items-center justify-between w-full   mb-4'>
          <div className='flex items-center gap-2 hover:bg-[#474747a8] px-2 py-1 rounded-lg cursor-pointer '> 
            <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="User Avatar" className='w-9 h-9 rounded-full' />
            <div className='flex flex-col'>
            <h2 className='text-sm  f2'>Syed Mohit Mahmud Inzamam</h2>
            <h3 className='text-sm text-gray-400'>Active 49m ago</h3>
            </div>
          </div>
          <div className='flex items-center gap-4 '>
            <div className='relative group flex items-center gap-2 hover:bg-[#474747a8] px-2 py-2 rounded-full cursor-pointer'>
              <IoCall size={20} color='#B31AFF' /> 
              <div className="absolute -right-4  top-1/2 translate-y-6 ml-2 hidden group-hover:block text-center bg-white text-black text-sm p-1 rounded-lg shadow-lg w-28 z-10">
                Start a call 
               </div>
            </div>
            <div className='relative group flex items-center gap-2 hover:bg-[#474747a8] px-2 py-2 rounded-full cursor-pointer'>
              <IoVideocam size={20} color='#B31AFF' />
              <div className="absolute -right-4  top-1/2 translate-y-6 ml-2 hidden group-hover:block text-center bg-white text-black text-sm p-1 rounded-lg shadow-lg w-32 z-10">
                Start a video call 
               </div>
            </div>
            <div className='relative group flex items-center gap-2 hover:bg-[#474747a8] px-2 py-2 rounded-full cursor-pointer'>
             <TfiMoreAlt size={20} color='#B31AFF' />
             <div className="absolute -right-4  top-1/2 translate-y-6 ml-2 hidden group-hover:block text-center bg-white text-black text-xs p-1 rounded-lg shadow-lg w-40 z-10">
                Conversation Information
               </div>
          </div>
          </div>
      </div>
    </section>
  )
}

export default ChatMessagesNavber
