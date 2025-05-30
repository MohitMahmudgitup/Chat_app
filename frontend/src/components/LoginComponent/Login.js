import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleClick = (e) => {
    const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    const handleSubmit = async (e) => {
      e.preventDefault();

      const data = new FormData();
        data.append("email", formData.email);
        data.append("password", formData.password);
      try {
        const res = await axios.post("http://localhost:4000/api/users/login", data, { headers: { "Content-Type": "application/json" },});
        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/");
        }else {
          toast.error(res.data.message);
        }
      }
      catch (error) {
        console.error("Error during login:", error);
      }
    };

  return (
       <section className='flex  h-[160vh]'>
      <div className='flex flex-col  text-white w-[50%] h-full pl-20 pt-40'>
        <div>
            <h1 className="text-[6vw] f1 font-bold text-[#0866FF] leading-[90px] mb-4">
              A place for   <br />
              meaningful    <br />
              conversations 
            </h1>

            <p className='text-[#7E6A6C] text-[1.3vw] font-medium f3 pt-3 '>Messenger helps you connect with your Facebook friends and family, build your community and deepen your interests.</p>
        </div>
        <div className=''>
          <div className='w-[340px] pt-7 relative'>
            <form onSubmit={handleSubmit} >
            <input
              onChange={handleClick}
              name="email"
              type="email"
              placeholder="Email address"
              className="text-black w-full px-5 py-2 mb-2 text-sm rounded-xl bg-[#f1f1f1] f1 placeholder-slate-600 border border-transparent focus:outline-none focus:border-blue-500"
            />
            <input
              onChange={handleClick}
              name="password"
              type="password"
              placeholder="Password"
              className="text-black w-full px-5 py-2 mb-2 text-sm rounded-xl bg-[#f1f1f1] f1 placeholder-slate-600 border border-transparent focus:outline-none focus:border-blue-500"
            />
              <button type="submit" className="w-24 bg-[#0866FF] hover:bg-blue-500 text-white p-2 mt-6  text-xl font-semibold rounded-full">Log In</button>
            </form>
            <div className='flex justify-between items-center mt-4 absolute bottom-14 right-0 pb-2 '>
                <Link to={"/forget-password"} className='text-sm font-semibold f3 text-[#0866FF] hover:underline'>Forgotten your password?</Link>
            </div>
            <div className='flex justify-between items-center mt-7  '>
                <Link to={"/register"} className='text-[1.2vw] font-semibold f3 text-[#0866FF] underline'>Register</Link>
            </div> 
          </div>
          <div className='flex gap-4 items-center mt-7'>
            <a target="_blank" href="https://apps.apple.com/us/app/messenger/id454638411"><img src="https://static.xx.fbcdn.net/rsrc.php/v4/ym/r/E0Xmh71WBR7.png" alt="Register Logo" /></a> 
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.facebook.orca&pli=1"><img src="https://static.xx.fbcdn.net/rsrc.php/v4/y6/r/FYeWLpKTZJc.png" alt="Register Logo" /></a> 
        </div>
        </div>
      </div>
      <div  className=' pt-20'>
        <img className= "w-full h-[130vh] " src='https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.8562-6/474824309_3871144839821587_2071916119066981578_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=CMxnrNjM5LAQ7kNvwEEI2qt&_nc_oc=AdlP0C36qdfxZeCplAkHXhZ-KFAY4NWbEfpc3_pUTrXzYZV58Z3nhTs34gGqa-BiU8Y&_nc_zt=14&_nc_ht=scontent.fcgp27-1.fna&_nc_gid=u6Sv79tUvyH1dzTC5OxhIA&oh=00_AfL0aUqWWOS2K6-BS17ezqaUoYgAccFoApfAEjOHxNqSyw&oe=683DB38A' alt='Register Logo'/>
      </div>
    </section>
  )
}

export default Login
