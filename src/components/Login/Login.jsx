import Signheader from "./SignHeader";


export default function Login () {
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
    <div className="flex flex-col items-stretch w-full h-screen bg-gray-100">
        <Signheader message = "Login"/>

        <div className="mt-7 h-1/2">
              <div className="px-5">
                <h1 className="text-3xl font-medium">
                  Welcome back
                </h1>

                <p className="py-2">Hey you are back, fill in your details to get back in</p>
              </div>

           {/* form-start */}
              <div className="px-6 my-5 form-group">
              
                      <div className="w-full px-3 py-1 my-5 bg-white rounded-2xl email-form">
                        <label htmlFor="email" className="px-2 text-sm">Email</label>
                        <input type="text" name="email" id="email" placeholder="Louis04real@gmail.com" className="w-full px-2 py-1 text-lg bg-none focus:outline-none" />
                      </div>

                      <div className="relative w-full px-3 py-1 my-5 bg-white rounded-2xl password-form">
                        <label htmlFor="password" className="px-2 text-sm">Password</label>
                        <input type="password" name="password" id="password" className="w-full px-2 py-1 text-lg bg-none focus:outline-none" />
                        <i onClick={e=>{togglePassword(e)}}  id="eyeIcon" className="absolute fas fa-eye right-[20px] text-xl top-[20px]"></i>
                      </div>


                    <div className="flex justify-end w-full p-1">
                      <span className="inline-block font-bold text-right text-purple-900"><a href="#" >Forgot Password?</a></span>
                    </div>
              </div>
            {/* form-end */}
              
              
          
        </div>
        {/* button-footer-start */}
        <footer className="flex items-end w-full h-1/2">
                <div className="flex items-center w-full p-3 justify-evenly btn-group">
                    <button className=" px-5 py-2  text-purple-900 bg-purple-200 rounded-[50px] outline-purple-900 focus:outline-none">Register</button>
                    <button className="w-1/2 px-5 py-5 text-white bg-purple-800 rounded-[50px] focus:outline-none">Login</button>
                </div>
        </footer>
        {/* button footer end */}
    </div>
    </>
  )
}

