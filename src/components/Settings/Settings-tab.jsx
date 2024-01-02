import chevron from "../../assets/svgs/Chevron-Right.svg"
import { Link } from "react-router-dom"

export default function Settingstab(props) {
  return (
    <>
        <Link to={props.link}>
                <aside className="profile-tab w-full p-3 my-3 flex item-center justify-between">
                    <div className="">
                        <p className="inline-block font-semibold text-black">{props.title}</p>
                    </div>

                    <img src={chevron} alt="" />
                        
                </aside>
                </Link>
    </>
  )
}

