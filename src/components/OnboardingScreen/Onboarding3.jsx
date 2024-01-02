import { Link } from "react-router-dom";
import  three  from "./assets/Illustrations(2).png";
import  sliders  from "./assets/Sliders3.svg";
export default function Onboarding3() {
  return (
      <>
        <div className="bg-dull h-screen w-full">
              <div className="flex flex-col h-full w-full items-center justify-center">
                    <div className="w-full h-1/2 text-right p-5">
                        <p className="bg-fading text-white inline-block px-5 py-2 rounded-[50px]">Skip</p>
                        <img src={three} className="h-[23rem]" alt="" />
                    </div>

                    <div className="h-1/2 w-full p-3 flex items-center">
                          <div className="rounded-[40px] w-full p-3 text-center bg-white">
                                    <h1 className="text-2xl text-txtblue font-bold ">
                                    Plan ahead and manage your money better
                                    </h1>
                                    <p className="px-4 py-2 text-sm text-txtblue font-medium">
                                    Setup your budget for each category
                                    so you in control. Track categories you spend the most money on
                                    </p>

                                    <img src={sliders} className="inline-block py-2" alt="" />
                                    <br></br>
                                    <button className="bg-blue py-4 my-2 text-white rounded-[50px] w-2/3 text-md">
                                    <Link to="/login">Get Started</Link>
                                        </button>
                          </div>
                    </div>
                    
              </div>
        </div>
      </>
  )
}

