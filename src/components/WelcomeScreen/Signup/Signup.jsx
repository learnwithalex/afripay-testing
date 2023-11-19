import { Link } from "react-router-dom";
import Signheader from "../Login/SignHeader"

export default function Signup() {
    var passwordInput = document.querySelector('#password');
    var eyeIcon = document.querySelector('#eyeIcon');
    function togglePassword (e) {
        if (passwordInput.type == 'password') {
          eyeIcon.classList.remove('fa-eye');
          eyeIcon.classList.add('fa-eye-slash');
          passwordInput.type = "text";
        } else {
          eyeIcon.classList.remove('fa-eye-slash') ;
          eyeIcon.classList.add('fa-eye');
          passwordInput.type = "password";
        }
      }
  return (
    <>
     <div className="flex flex-col items-stretch w-full h-screen bg-[rgba(44,20,221,0.06)]">
        <Signheader message="Signup"/>

        <div className="mt-7 h-1/2">
                  <div className="px-5">
                        <h1 className="text-3xl font-bold text-[#282061] ">
                          Welcome to Afripay
                        </h1>

                        <p className="py-2 font-semibold">Complete the sign up to get started</p>
                  </div>

              {/* form-start */}
                  <div className="px-6 my-5 form-group">

                            <div className="w-full px-3 py-1 my-4 bg-white rounded-2xl email-form">
                                <label htmlFor="name" className="px-2 text-sm">Name</label>
                                <input type="text" name="name" id="name" placeholder="Louis Real" className="w-full px-2 py-1 text-md bg-none focus:outline-none" />
                          </div>
                  
                          <div className="w-full px-3 py-1 my-4 bg-white rounded-2xl email-form">
                                <label htmlFor="email" className="px-2 text-sm">Email</label>
                                <input type="email" name="email" id="email" placeholder="Louis04real@gmail.com" className="w-full px-2 py-1 text-md bg-none focus:outline-none" />
                          </div>

                          <div className="relative w-full px-3 py-1 my-4 bg-white rounded-2xl password-form">
                                <label htmlFor="password" className="px-2 text-sm">Password</label>
                                <input type="password" name="password" id="password" className="w-full px-2 py-1 text-md bg-none focus:outline-none" />
                                <i onClick={e=>{togglePassword(e)}}  id="eyeIcon" className="absolute fas fa-eye text-[#2c14dd] right-[20px] text-xl top-[20px]"></i>
                          </div>


                        <div className="w-full p-1 ">
                                <input type="checkbox" className="" name="terms" id="terms" />
                                <label htmlFor="terms" className="ml-2 font-semibold">By signing up, you agree to the <a href="#" className="text-[#2c14dd]">Terms of Service and Privacy Policy</a> 
                                </label>
                        </div>
                  </div>
                {/* form-end */}
              
              
          
        </div>
        {/* button-footer-start */}
        <footer className="flex items-end w-full h-1/2">
                <div className="flex items-center w-full p-3 justify-evenly btn-group">
                        <button className=" px-5 py-2  text-[rgb(44,20,221)] bg-[rgba(44,20,221,0.1)] rounded-[50px] outline-[#2c14dd]focus:outline-none">
                          <Link to="/login">Login</Link>  
                          </button>
                        <button className="w-1/2 px-5 py-4 text-white text-md bg-[#2c14dd] rounded-[50px] focus:outline-none">Register</button>
                </div>
        </footer>
        {/* button footer end */}
     </div>
        
    </>
  )
}

