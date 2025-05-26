import React from 'react'

const SideUserCart = () => {
  return (
    <section className='hover:bg-[#3A3A3A] cursor-pointer w-full h-16 px-4 rounded-lg flex items-center justify-center '>
      <div className='flex items-center gap-2 w-full h-full'>
        <div>
          <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="User Avatar" className='w-10 h-10 rounded-full' />
        </div>
        <div>
          <h1 className='text-lg font-normal'>User Name</h1>
          <h2 className='text-sm text-gray-400'>Last message preview...</h2>
        </div>
      </div>
    </section>
  )
}
export default SideUserCart
