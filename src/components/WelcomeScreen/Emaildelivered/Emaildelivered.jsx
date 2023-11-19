export default function Emaildelivered () {
  return (
    <>
        <div className="w-full h-screen bg-[rgba(44,20,221,0.06)]">
                <div className="w-full h-1/2">
                       
                </div>
                <div className="flex flex-col justify-between w-full px-4 text-center h-1/2">
                        <div>
                                <h1 className="text-[27px] font-bold text-[#282061]">
                                    Your email is on the way
                                </h1>
                                <p className="py-3 text-xl text-gray-500">
                                    Check your email test@test.com and follow the instructions to reset your password
                                </p>
                        </div>

                        <div className="w-full p-2 btn">
                                <button className="focus:outline-none rounded-[50px] bg-[#2c14dd] py-4 text-white text-2xl w-full mb-3">
                                    Continue
                                </button>
                        </div>
                    
                </div>
        </div>
    </>
  )
}

