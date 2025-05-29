import React from 'react'


const RegisterNavber = () => {
  return (
    <nav className='flex justify-between items-center bg-white px-20 py-8 '>
      <div>
        <img className='w-10 y-10' src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.8562-6/475210330_598195142840489_9172482348551739153_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=cbQfXi8adO8Q7kNvwGKuytM&_nc_oc=AdmutS0p9ISX7R3vqH96ZegvJZMsBchqWuJh4iauSy90a1FGmg42wB-uwogVI-6Djmw&_nc_zt=14&_nc_ht=scontent.fcgp27-1.fna&_nc_gid=u6Sv79tUvyH1dzTC5OxhIA&oh=00_AfJNNWw278fC8HWqtP9m-JNf_4G8-tN_-1fj5swBF2DgJw&oe=683DCE98" alt="logo" />
      </div>
      <div className='flex space-x-7 '>
        <h1 className='cursor-pointer font-semibold text-black'>Features</h1>
        <h1 className='cursor-pointer font-semibold text-black'>Privacy and safety</h1>
        <h1 className='cursor-pointer font-semibold text-black'>Desktop app</h1>
        <h1 className='cursor-pointer font-semibold text-black'>For developers</h1>
        <h1 className='cursor-pointer font-semibold text-black'>Help Centre</h1>
      </div>
    </nav>
  )
}

export default RegisterNavber
