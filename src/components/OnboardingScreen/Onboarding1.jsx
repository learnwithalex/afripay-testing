import { Link } from "react-router-dom";
import  one  from "./assets/Illustrations(1).png";
import  sliders  from "./assets/Sliders.svg";
export default function Onboarding1() {
  return (
      <>
        <div className="bg-dull h-screen w-full">
              <div className="flex flex-col h-full w-full items-center justify-center">
                    <div className="w-full h-1/2 text-right p-5">
                        <p className="bg-fading text-white inline-block px-5 py-2 rounded-[50px]">Skip</p>
                        <img src={one} className="h-[25rem]" alt="" />
                    </div>

                    <div className="h-1/2 w-full p-5 flex items-center">
                          <div className="rounded-[40px] w-full p-5 text-center bg-white">
                                  <h1 className="text-2xl text-txtblue font-bold ">You ought to know where your money goes</h1>
                                  <p className="px-10 py-3 text-sm text-txtblue font-medium">Get an overview of how you are performing and motivate yourself to achieve even more.</p>

                                  <img src={sliders} className="inline-block py-3" alt="" />
                                  <br></br>
                                  <button className="bg-blue py-4 my-2 text-white rounded-[50px] w-2/3 text-md">
                                    <Link to="/onboarding2">Next</Link>
                                    </button>
                          </div>
                    </div>
                    
              </div>
        </div>
      </>
  )
}

