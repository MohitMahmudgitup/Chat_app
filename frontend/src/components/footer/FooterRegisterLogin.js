import React from 'react'

const FooterRegisterLogin = () => {
  return (
    <footer className='flex items-center justify-between flex-wrap px-20  h-20'>
        <div className='flex items-center '>
            <p className='text-black text-sm font-semibold'>© Meta 2025</p>
        </div>
        <div className='flex items-center ml-80  space-x-10'> 
            <p className='text-black text-sm font-medium cursor-pointer'>Privacy Policy</p>
            <p className='text-black text-sm font-medium cursor-pointer'>Cookie Policy</p>
            <p className='text-black text-sm font-medium cursor-pointer'>Terms</p>
            <p className='text-black text-sm font-medium cursor-pointer'>English (UK)</p>
        </div>
        <div className='flex items-center '>
            <img className='h-12' src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.8562-6/474824981_899577288719610_6588160745649017665_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=CcIsBnjgUjsQ7kNvwH1u-Wf&_nc_oc=Adm3-qteeUGhPYJ5azwW-kif3RISZaXTdzpgONYfq-GFK9O3I0EBxJln-n8ADOs0cxk&_nc_zt=14&_nc_ht=scontent.fcgp27-1.fna&_nc_gid=u6Sv79tUvyH1dzTC5OxhIA&oh=00_AfKrpzEGezmMf8fGs8MWhUQs_xSzCl5wf9zeJ06DGJCpxA&oe=683DD95F" alt="logo" />
        </div>
    </footer>
  )
}

export default FooterRegisterLogin
