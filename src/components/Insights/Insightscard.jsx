import tick from './images/tickcircle.svg'
const Insightscard = (props) => {
    
    const newUpdate = () => {
        return (
            <div className="flex items-center mb-4 gap-2">
            <img src={props.data[1]} className='h-16 bg-red-600 rounded-full border border-[#13085E]' alt="" />
            <div className="flex flex-col relative w-1/2">
 
                 <div className='flex items-center'>
                         <h1 className="text-lg font-semibold text-[#13085E]">
                             {/* Story name */}
                             {props.data[0]}
                         </h1>
                         <img src={tick} className="h-4 ml-3" alt="" />  
                 </div>
                 
                 <p className="text-sm font-light text-[#13085E]"> {props.data[2]} </p>
 
            </div>
            
 
         </div>
        );
    }


    const viewedUpdate = () => {
        return (
            <div className="flex items-center mb-4 gap-2">
            <img src={props.data[1]} className='h-16 bg-red-600 rounded-full border border-[#aca1f7]' alt="" />
            <div className="flex flex-col relative w-1/2">
 
                 <div className='flex items-center'>
                         <h1 className="text-lg font-semibold text-[#13085E]">
                             {/* Story name */}
                             {props.data[0]}
                         </h1>
                         <img src={tick} className="h-4 ml-3" alt="" />  
                 </div>
                 
                 <p className="text-sm font-light text-[#13085E]"> {props.data[2]} </p>
 
            </div>
            
 
         </div>
        );
    }
    
    return (
       <>
            { props.type == 'new' ? newUpdate() : viewedUpdate() }
       </>
    );
}

export default Insightscard;
