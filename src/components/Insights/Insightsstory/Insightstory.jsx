import React, { useState , useEffect} from "react";
import shopping from "../images/shopping-bag.png";
import salary from "../images/salary.png";


const Insightstory = () => {

        const [index , setIndex] = React.useState(0)

        const sections = document.getElementsByTagName('section');
        
        // React.useEffect(()=>{
        //         setTimeout( ()=>
        //                     setIndex((prevIndex)=>prevIndex === sections.length - 1 ? 0 : prevIndex + 1),2000)
        // } , [])

        // useEffect(() => {
        //     const sections = document.querySelectorAll('section');
        // }, []);
    return (
        <>
               <main className="w-full h-screen">

                        <div className="bg-transparent absolute mt-2 w-full h-6 items-center flex gap-1 p-2">
                            <span className="inline-block tab-1 tab h-2 rounded w-1/4 bg-[rgba(255,255,255,0.3)]"></span>
                            <span className="inline-block tab-2 tab h-2 rounded w-1/4 bg-[rgba(255,255,255,0.3)]"></span>
                            <span className="inline-block tab-3 tab h-2 rounded w-1/4 bg-[rgba(255,255,255,0.3)]"></span>
                            <span className="inline-block tab-4 tab h-2 rounded w-1/4 bg-[rgba(255,255,255,0.3)]"></span>
                        </div>

                        <aside className="h-full w-full overflow-hidden whitespace-nowrap"
                        style={{ transform: `translate3d(${-index * 100}% , 0, 0)` }}>
                                <section className="w-full flex-grow flex-1 py-14 px-6 text-white inline-flex flex-col items-center justify-between h-full bg-[#FD3C4A]">
                                        <h1 className="text-3xl ">This Month</h1>
                                        <div className="text-center"> 
                                                <p className="text-[40px] font-semibold"> You Spend </p>
                                                <h1 className="text-[60px] font-bold"> 332 </h1>
                                        </div>
                                        <div className="h-60 w-full flex items-center justify-between flex-col text-black text-center p-5 bg-white rounded-[20px]">
                                                <h1 className="text-2xl px-14 font-semibold"> Your biggest spending is from </h1>
                                                <div className="border w-48 h-14 mx-auto mt-4 flex justify-evenly items-center rounded-[25px]">
                                                        <div className="p-2 bg-gray-100"> <img src={shopping} alt="" /> </div>
                                                        <p> Shopping </p>
                                                </div>
                                                <h1 className="text-3xl font-semibold"> &#8358;120 </h1>
                                        </div>
                                </section>

                                <section className="w-full py-14 px-6 text-white inline-flex flex-col items-center justify-between h-full bg-[#00A86B]">
                                        <h1 className="text-3xl ">This Month</h1>
                                        <div className="text-center"> 
                                                <p className="text-[40px] font-semibold"> You Earned </p>
                                                <h1 className="text-[60px] font-bold"> &#8358;6000 </h1>
                                        </div>
                                        <div className="h-60 w-full flex items-center justify-between flex-col text-black text-center p-5 bg-white rounded-[20px]">
                                                <h1 className="text-2xl px-14 font-semibold"> Your biggest income is from </h1>
                                                <div className="border w-48 h-14 mx-auto mt-4 flex justify-evenly items-center rounded-[25px]">
                                                        <div className="p-2 bg-green-100"> <img src={salary} alt="" /> </div>
                                                        <p> Salary </p>
                                                </div>
                                                <h1 className="text-3xl font-semibold"> &#8358;5000 </h1>
                                        </div>
                                </section>
                        </aside>
                        
               </main>
        </>
    );
}

export default Insightstory;
