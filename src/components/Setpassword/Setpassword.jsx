import padlock from './padlock.png'
export default function Setpassword () {
    return (
            <div className="w-full h-screen bg-[rgba(44,20,221,0.06)]">
                    <div className="w-full h-1/2 flex flex-col justify-end p-4">
                        <img src={padlock} alt="" className='h-32 w-32 inline-block' />
                        <h1 className="text-3xl mt-3 text-[#282061] font-bold">Set your password</h1>
                        <p className='font-semibold text-2xl text-[#282061]'>Please create your new password for afripay</p>
                    </div>
                    <div className="w-full h-1/2 flex flex-col p-5">
                                    <div className="relative w-full px-3 py-1 mt-5 bg-white rounded-[30px] password-form">
                                        <label htmlFor="password" className="px-2 text-sm">Password</label>
                                        <input type="password" name="password" id="password" className="w-full px-2 py-1 text-lg bg-none focus:outline-none" />
                                        
                                    </div>

                                <div className="relative w-full px-3 py-1 mt-5 bg-white rounded-[30px] password-form">
                                        <label htmlFor="password" className="px-2 text-sm">Retype Password</label>
                                        <input type="password" name="password" id="password" className="w-full px-2 py-1 text-lg bg-none focus:outline-none" />
                                        
                                </div>

                                <button className='focus:outline-none bg-[#2c14dd] text-white w-full py-4 mt-8 rounded-[50px]'>Continue</button>
                    </div>
            </div>
    );
}