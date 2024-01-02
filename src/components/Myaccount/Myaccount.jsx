import Memoji from "../../assets/images/Memoji.png"
import Camera from "../../assets/svgs/Camera.svg"
import Signheader from "../WelcomeScreen/Login/SignHeader"



export default function Myaccount() {
  return (
    <>
    <main className="w-full h-screen bg-[#F5F7FF]">
        <Signheader message="My Account"/>

        {/* profile image start */}
        <section className="h-72 w-full flex items-center justify-center ">
            <div className="h-36 flex items-center justify-center w-36 bg-[#FDD8B0] rounded-full relative">
                <img src={Memoji} className="h-32" alt="" />
                <div className="h-10 w-10 absolute">

                </div>
                <img src={Camera} className="h-14 absolute bottom-[-10px] right-0 bg-[#928FFF] border-4 rounded-full border-white p-2" alt="" />
            </div>
        </section>
        {/* profile image end */}

         {/* profile information start */}
         <section className="px-5">
                <div className="w-full px-3 py-1 my-5 bg-white rounded-2xl email-form">
                    <label htmlFor="email" className="px-2 text-sm text-[#8F94A3]">Name</label>
                    <input type="text" name="email" id="email" value="Donye Collins" className="w-full px-2 py-1 text-md bg-none focus:outline-none" />
                </div>

                <div className="w-full px-3 py-1 my-5 bg-white rounded-2xl email-form">
                    <label htmlFor="email" className="px-2 text-sm text-[#8F94A3]">Email</label>
                    <input type="email" name="email" id="email" value="Louis04real@gmail.com" className="w-full px-2 py-1 text-md bg-none focus:outline-none" />
                </div>

                <div className="w-full px-3 py-1 my-5 bg-white rounded-2xl email-form">
                    <label htmlFor="email" className="px-2 text-sm text-[#8F94A3]">Phone Number</label>
                    <input type="telephone" name="number" id="email" value="+23408146185683" className="w-full px-2 py-1 text-md bg-none focus:outline-none" />
                </div>
        </section>
         {/* profile information start */}

        <section className="w-full px-4 absolute bottom-[50px]">
             <button className="w-full text-[#4A44C6] text-lg font-semibold py-5 rounded-[70px] bg-[#E9E9FF] ">Save</button>
        </section>
        
        
    </main>
        

    </>
  )
}


