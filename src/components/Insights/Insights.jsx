import homeOutline from "../../assets/svgs/Home-outline.svg";
import GraphOutline from "../../assets/svgs/Graph-outline.svg";
import chartOutline from "../../assets/svgs/Chart-outline.svg";
import ProfileOutline from "../../assets/svgs/Profile-outline.svg";
import Insightscard from "./Insightscard";

const Insights = () => {

        const cardData = [
                [ 'Brees' , 'new' ] , 
                [ 'Brees2' , 'new2' ] , 
        ];


    return (
        <main>
                <section className='bg-[#2C14DD] h-72 w-full flex items-center justify-center flex-col px-7'>

                        <h1 className='pl-4 mt-[-50px] text-white text-md font-semibold'> 
                        Insights
                        </h1>
                        
                        <div className="relative w-full px-5 text-center rounded-lg p-3 text-white bg-[#2511BB] mt-5 flex">
                                <div className="w-1/2 h-full p-2 flex justify-between items-center">
                                        <div className="bg-[#3180FB] inline-flex p-3 rounded-full items-center justify-center ">
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Graph">
                                                <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M16.2779 12.8887C16.9527 12.8887 17.519 13.4455 17.4158 14.1118C16.8106 18.0318 13.4548 20.9423 9.40742 20.9423C4.92952 20.9423 1.30005 17.3129 1.30005 12.836C1.30005 9.1476 4.10215 5.71181 7.25689 4.93497C7.93479 4.7676 8.62952 5.24445 8.62952 5.94234C8.62952 10.6708 8.78847 11.8939 9.68636 12.5592C10.5843 13.2244 11.64 12.8887 16.2779 12.8887Z" stroke="#C1B9F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M20.6926 8.95121C20.7463 5.91331 17.0147 1.01647 12.4674 1.10068C12.1137 1.107 11.8305 1.40173 11.8147 1.75437C11.7 4.25226 11.8547 7.4891 11.9411 8.95647C11.9674 9.41331 12.3263 9.77226 12.7821 9.79858C14.2905 9.88489 17.6453 10.0028 20.1074 9.63015C20.4421 9.57963 20.6874 9.2891 20.6926 8.95121Z" stroke="#C1B9F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                </svg>
                                               
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
                        <div className='w-full mb-6'> 
                                <h1 className='text-[#210EA4] text-lg font-semibold'>
                                    Recent updates
                                </h1>
                        </div>

                        {/* stories start */}

                        { cardData.map((card)=>(
                            <Insightscard data = {[...card]}/>    
                        )) }

                        

                        {/* stories end */}
                </section>

                <footer className="w-full fixed bg-none bottom-0 px-3 py-5 flex justify-around items-center">
                    <img src={homeOutline} alt="" />
                    <img src={GraphOutline} alt="" />
                    <img src={chartOutline} alt="" />
                    <img src={ProfileOutline} alt="" />
                </footer>
        </main>
        
                
    );
}

export default Insights;
