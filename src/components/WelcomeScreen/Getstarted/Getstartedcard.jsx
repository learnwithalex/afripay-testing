

export default function Getstartedcard(props) {
  return (
    <div className="h-30 w-full relative flex items-center rounded-2xl overflow-hidden bg-[#FFFFFF26]">
        <div className="w-2/3 h-full py-5 pl-3 ">
                <h1 className="text-lg text-[#EAE7FD] font-semibold">{ props.heado }</h1>
                <p className="text-[#D5D0FB] text-sm py-1">{props.subheading}</p>
        </div>

        <div className="w-1/3 h-full">
            <img src={props.image} className="absolute bottom-0 right-0" alt="" />
        </div>
        
    </div>
  )
}

