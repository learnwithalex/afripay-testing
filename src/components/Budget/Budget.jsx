import homeOutline from "../../assets/svgs/Home-outline.svg";
import GraphOutline from "../../assets/svgs/Graph-outline.svg";
import chartOutline from "../../assets/svgs/active-chart.png";
import ProfileOutline from "../../assets/svgs/light-profile.png";
import InsightIcon from "../../assets/images/insight-icon.png";
import pig from "../../assets/pig.png";
import Insightscard from "./Insightscard";
import close from "./images/close.png";
import frame from "./images/frame.png";



const Budget = () => {

    return (
        <>
            <main>
                 <aside className="modal px-5 absolute h-full w-full z-10 backdrop-blur-[2px] flex items-center justify-center">
                                <div className="inner-modal text-white text-center bg-[#2C14DD] h-[600px] w-full rounded-3xl relative">
                                        <img src={close} onClick={e=>{closeModal(e)}} className="absolute top-5 right-5" alt="" />
                                        <img src={frame} alt="" />

                                        <h1 className="font-semibold">Insights</h1>
                                        <h2 className="text-2xl font-bold">Get your insights</h2>
                                        <p className="px-16"> If you are interested in investing, but has no idea where to start, if you are interested in investing but has no idea where to start </p>
                                        <div className="flex w-1/5 justify-between mx-auto my-8">
                                                <span className="h-2 w-2 rounded-full bg-white inline-block"></span>
                                                <span className="h-2 w-2 rounded-full bg-[rgba(255,255,255,0.3)] inline-block"></span>
                                                <span className="h-2 w-2 rounded-full bg-[rgba(255,255,255,0.3)] inline-block"></span>
                                                <span className="h-2 w-2 rounded-full bg-[rgba(255,255,255,0.3)] inline-block"></span>
                                        </div>

                                        <button className="relative top-24 bg-white text-[#2C14DD] py-3 px-24 rounded-[50px] text-md font-bold">View Insights</button>
                                        

                                </div>
                </aside>

                <section className='bg-[#2C14DD] overflow-x-hidden h-72 w-full flex items-center justify-center flex-col px-7'>
                
                <img src={pig} className="absolute left-[-270px] opacity-20 rotate-180" alt="" />

                        <h1 className='pl-4 mt-[-50px] text-white text-md font-semibold'> 
                        Insights
                        </h1>
                        
                        <div className="relative w-full px-5 text-center rounded-lg p-3 text-white bg-[#2511BB] mt-5 flex">
                                <div className="w-1/2 h-full p-2 flex justify-between items-center">
                                        <div className="bg-[#3180FB] inline-flex p-2 rounded-full items-center justify-center ">
                                                <img src={InsightIcon} className="h-6" alt="" />
                                        </div>
                                        
                                        <div className="text-left">
                                            <h1 className="font-semibold">Insight</h1>
                                            <p className="text-sm text-[#dedbff]">Balance Trend</p>
                                        </div>
                                </div>

                                <div className="w-1/2 h-full p-2 flex justify-between items-center">
                                        <div className="text-left">
                                            <h1 className="font-semibold text-xl">N98,482.65</h1>
                                            <p className="text-sm text-white inline-block"> 
                                                <span className="text-green-500 inline-block pr-1">
                                                    <i className="fas fa-plus text-xs"></i>
                                                    4.3% 
                                                </span>  
                                                vs Last week</p>
                                        </div>
                                </div>
                        </div>
                </section>

                <section className="relative w-full h-full bg-white top-[-40px] rounded-tl-[50px] rounded-tr-[50px] p-8">
                        <div className='w-full mb-5'> 
                                <h1 className='text-[#210EA4] text-lg font-semibold'>
                                    Recent updates
                                </h1>
                        </div>

                        { newCard.map((card , i)=>(
                            <Insightscard type='new' key={i} data = {[...card]}/>    
                        )) }

                </section>

                <section className=" w-full p-8 relative top-[-90px]">
                        <div className='w-full mb-5'> 
                                <h1 className='text-[#210EA4] text-lg font-semibold'>
                                    Viewed updates
                                </h1>
                        </div>

                        {/* stories start */}

                        { viewedCard.map((card , i)=>(
                            <Insightscard type='viewed' key={i} data = {[...card]}/>    
                        )) }

                        

                        {/* stories end */}
                </section>
                

                <footer className="w-full fixed bg-white bottom-0 px-3 py-5 flex justify-around items-center">
                    <img src={homeOutline} alt="" />
                    <img src={GraphOutline} alt="" />
                    <img src={chartOutline} alt="" />
                    <img src={ProfileOutline} alt="" />
                </footer>
        </main>
        </>
    );
}

export default Budget;
