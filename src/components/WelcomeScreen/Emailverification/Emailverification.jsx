import email from './email.png'
import {Link} from 'react-router-dom'
export default function Emailverification() {
  return (
    <>
        <div className="w-full h-screen bg-[rgba(44,20,221,0.06)]">
                <div className="w-full h-1/2 flex items-center justify-center">
                       <img src={email} alt="" />
                </div>
                <div className="flex flex-col justify-between w-full px-4 text-center h-1/2">
                        <div>
                                <h1 className="text-[27px] font-bold text-[#282061]">
                                    We have sent an email verification link to your email
                                </h1>
                                <p className="py-3 text-xl text-gray-500">
                                    Check your email test@test.com and click the link to verify your email address
                                </p>
                        </div>

                        <div className="w-full p-2 btn">
                                <button className="focus:outline-none rounded-[50px] bg-[#2c14dd] py-4 text-white text-2xl w-full mb-3">
                                  <Link to="/accountverified">Open Email</Link>  
                                </button>
                        </div>
                    
                </div>
        </div>
    </>
  )
}

