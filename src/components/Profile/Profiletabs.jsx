import chevron from "../../assets/svgs/Chevron-Right.svg"
import {Link} from "react-router-dom"

export default function Profiletab (props) {
    return (
        <>
            <Link to={props.link}>
                <aside className="profile-tab w-full p-3 my-3 flex item-center justify-between">
                    <div className="flex items-center">
                        <div className="icon h-full bg-[#e9e9ff] p-2 rounded-xl inline-block">
                            <img src={props.image} className="inline-block" alt="" />
                        </div> 
                        <p className="inline-block font-semibold text-black ml-4">{props.title}</p>
                    </div>

                    <img src={chevron} alt="" />
                        
                </aside>
                </Link>
        </>
    );
}