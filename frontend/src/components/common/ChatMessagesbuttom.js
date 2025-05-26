import React from 'react'

const ChatMessagesbuttom = () => {
  return (
    <section className="sticky mt-[45%]  w-full p-4  flex items-center justify-between rounded-lg shadow-2xl">
      <div className='flex items-center gap-2 w-full h-full'>
        <input type="text" placeholder='Type a message...' className='w-full bg-[#3A3B3C] py-2 px-4 rounded-full outline-none text-white' />
        <button className='bg-[#B31AFF] px-4 py-2 rounded-lg text-white'>Send</button>
      </div>
    </section>
  )
}

export default ChatMessagesbuttom
