import image from '../../assets/Illustrations.png'
import pig from '../../assets/pig.png'
import bank from '../../assets/bank.png'
import Helpcard from './Helpcard';
const Help = () => {
    var helpCardInfo = [
        {
        head : "How to sort transactions on afripay",
        content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nostrum fugit quidem quisquam, alias enim cumque quos esse similique, hic ex nesciunt! Pariatur, voluptatibus nisi.',
        picture : bank
    } ,
    {
        head : "How to  transactions on afripay",
        content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nostrum fugit quidem quisquam, alias enim cumque quos esse similique, hic ex nesciunt! Pariatur, voluptatibus nisi.',
        picture : pig
    },
    {
        head : "How to  transactions on afripay",
        content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nostrum fugit quidem quisquam, alias enim cumque quos esse similique, hic ex nesciunt! Pariatur, voluptatibus nisi.',
        picture : pig
    },
    {
        head : "How to  transactions on afripay",
        content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nostrum fugit quidem quisquam, alias enim cumque quos esse similique, hic ex nesciunt! Pariatur, voluptatibus nisi.',
        picture : pig
    },
];
    return (
        <>
        <main>
                <section className='bg-[#210EA4] h-80'>
                        <header className="w-full">
                        <div className="flex items-center w-full py-3 px-5 justify-between ">
                                <div className="inline-block ">
                                        <i className="px-4 py-2 text-xl text-left bg-[#210EA4] text-white border-[0.5px] border-white rounded-full fas fa-chevron-left"></i>
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
                            className='rounded-[50px] border-none outline-none focus:outline-none w-full py-4 px-10 pl-16 text-lg' id="" 
                            placeholder='Search transactions'/>
                            <i className="fas fa-magnifying-glass text-gray-300 text-xl absolute left-[50px] top-[18px]"></i>
                        </div>
                </section>

                <section className="relative w-full h-full bg-white top-[-50px] rounded-tl-[50px] rounded-tr-[50px] p-8">
                        <div className='w-full mb-6 flex justify-between items-center'> 
                                <h1 className='text-[#210EA4] text-lg font-semibold'>
                                    Topics
                                </h1>
                                <h1 className='text-[#210EA4] text-md'>
                                    View all
                                </h1>
                        </div>

                        { helpCardInfo.map((card)=>(
                                    <Helpcard head ={card.content} picture={card.picture} head ={card.head}/>
                        ))
                        }

                        




                </section>
        </main>
                
        </>
    );
}

export default Help;
