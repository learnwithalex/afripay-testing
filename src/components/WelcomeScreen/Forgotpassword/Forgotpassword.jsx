import Signheader from "../Login/SignHeader";


export default function Forgotpassword() {
  return (
    <>
    <div className="flex flex-col items-stretch w-full h-screen bg-[rgba(44,20,221,0.02)]">

        <Signheader message="Forgot Password" />

        <div className="mt-7 h-1/2">
                  <div className="px-5">
                        <h1 className="text-3xl text-[#282061] font-bold">
                          Enter your email and we'll send you a link to reset your password
                        </h1>
                  </div>

              {/* form-start */}
                  <div className="px-6 my-5 form-group">
                          <div className="w-full px-3 py-1 my-5 bg-white rounded-2xl email-form">
                                <label htmlFor="email" className="px-2 text-sm">Email</label>
                                <input type="email" name="email" id="email" placeholder="Louis04real@gmail.com" className="w-full px-2 py-1 text-lg bg-none focus:outline-none" />
                          </div>
                  </div>
                {/* form-end */}
              
        </div>
        {/* button-footer-start */}
        <footer className="flex items-end w-full h-1/2">
                <div className="flex items-center w-full p-3 justify-evenly btn-group">
                        <button className="w-full px-5 py-5 mb-5 text-white text-xl bg-[#2c14dd] rounded-[50px] focus:outline-none">Continue</button>
                </div>
        </footer>
        {/* button footer end */}
    </div>
    </>
  )
}

