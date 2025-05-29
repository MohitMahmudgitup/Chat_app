import React from 'react'

const Register = () => {
  return (
    <section className='flex  h-[150vh]'>
      <div className='flex flex-col justify-center items-center  text-white w-[50%] h-full pl-20 pt-20'>
        <div>
            <h1 className="text-[6vw] f1 font-bold text-[#0866FF] leading-[90px] mb-4">
              A place for<br />
              meaningful<br />
              conversations 
            </h1>

            <p className='text-[#65686C]text- '>Messenger helps you connect with your Facebook friends and family, build your community and deepen your interests.</p>
        </div>
        <div className='flex justify-center items-center h-[150vh]'>
          <div className='w-[400px] h-[500px] rounded-lg '>
            <h2 className='text-white text-2xl font-bold mb-4'>Register</h2>
            <form>
              <input type="text" placeholder="Username" className="w-full p-2 mb-4 rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded" />
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
            </form>
          </div>
        </div>
      </div>
      <div >
        <img className= "w-full h-[150vh] " src='https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.8562-6/474824309_3871144839821587_2071916119066981578_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=CMxnrNjM5LAQ7kNvwEEI2qt&_nc_oc=AdlP0C36qdfxZeCplAkHXhZ-KFAY4NWbEfpc3_pUTrXzYZV58Z3nhTs34gGqa-BiU8Y&_nc_zt=14&_nc_ht=scontent.fcgp27-1.fna&_nc_gid=u6Sv79tUvyH1dzTC5OxhIA&oh=00_AfL0aUqWWOS2K6-BS17ezqaUoYgAccFoApfAEjOHxNqSyw&oe=683DB38A' alt='Register Logo'/>
      </div>
    </section>
  )
}

export default Register
