
const Helpcard = (props) => {
    return (
        <div className="w-full bg-[#F5F7FF] p-3 my-3 rounded relative">
            <h1 className="text-lg font-semibold lin">
               {props.head}
            </h1>
            <p className="text-[#727A93] pr-20 my-2 font-semibold leading-relaxed">
                    You can add your multiple bank accounts including PiggyVest savings , Crypto wallets ,...
                    {props.content}
            </p>
            <a href="" className='font-bold text-md text-[#3A2AAF]'>View Topic</a>
            <img src={props.picture} className="h-24 inline-block absolute bottom-0 right-[10px]" alt="" />
        </div>
    );
}

export default Helpcard;
