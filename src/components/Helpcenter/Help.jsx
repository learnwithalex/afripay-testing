import image from '../../assets/Illustrations.png'
const Help = () => {
    return (
        <>
        <main>
                <section className='bg-[#210EA4] h-80'>
                        <header className="w-full">
                        <div className="flex items-center w-full py-3 px-5 justify-between ">
                                <div className="inline-block ">
                                        <i className="px-4 py-2 text-xl text-left bg-white rounded-full fas fa-chevron-left"></i>
                                </div>
                    
                                <div className="">
                                    <img src={image} className='h-20' alt="" />
                                </div>
                        </div>   
                        </header>

                        <h1 className='pl-4 text-white text-[25px] font-semibold'> 
                        Have a burning question 
                        </h1>
                        
                        <div className="relative w-full px-5 mt-5">
                            <input type="text" 
                            name="searchBar" 
                            className='rounded-[50px] border-none outline-none focus:outline-none w-full py-4 px-10 pl-20 text-lg' id="" 
                            placeholder='Search transactions'/>
                            <i className="fas fa-magnifying-glass text-gray-300 text-2xl absolute left-[50px] top-[15px]"></i>
                        </div>
                </section>

                <section className="relative w-full h-auto bg-white top-[-50px] rounded-tl-[50px] rounded-tr-[50px] p-10">
                    hh
                </section>
        </main>
                
        </>
    );
}

export default Help;
