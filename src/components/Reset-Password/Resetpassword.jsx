import Signheader from "../WelcomeScreen/Login/SignHeader";

export default function Resetpassword() {
  return (
    <>
          <main className="w-full h-screen bg-[#F5F7FF]">
              <div className="w-full py-5">
                <Signheader message="Password"/>
              </div>

              <section className="px-5">
                    <div className="w-full px-3 py-1 my-5 bg-white rounded-2xl email-form">
                    <label htmlFor="password" className="px-2 text-sm text-[#8F94A3] font-semibold">Old Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter old password" className="w-full px-2 py-1 text-md bg-none focus:outline-none" />
                    </div>

                    <div className="w-full px-3 py-1 my-5 bg-white rounded-2xl email-form">
                    <label htmlFor="password" className="px-2 text-sm text-[#8F94A3] font-semibold">New Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter new password" className="w-full px-2 py-1 text-md bg-none focus:outline-none" />
                    </div>

                    <div className="w-full px-3 py-1 my-5 bg-white rounded-2xl email-form">
                    <label htmlFor="password" className="px-2 text-sm text-[#8F94A3] font-semibold">Retype new Password</label>
                    <input type="password" name="password" id="password" placeholder="Retype new password" className="w-full px-2 py-1 text-md bg-none focus:outline-none" />
                    </div>
                    
              </section>

              <section className="w-full px-4 absolute bottom-[50px]">
                    <button className="w-full text-[#4A44C6] text-lg font-semibold py-5 rounded-[70px] bg-[#E9E9FF] ">Save</button>
              </section>
          </main>
    </>
  )
}

