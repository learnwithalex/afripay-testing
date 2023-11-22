import home from "../../assets/svgs/Home.svg";
import homeOutline from "../../assets/svgs/Home-outline.svg";
import chart from "../../assets/svgs/Chart.svg";
import Profile from "../../assets/svgs/Profile.svg";
import GraphOutline from "../../assets/svgs/Graph-outline.svg";
import Graph from "../../assets/svgs/Graph.svg";
import chartOutline from "../../assets/svgs/Chart-outline.svg";
import ProfileOutline from "../../assets/svgs/Profile-outline.svg";

export default function Footer(props) {
    var styles = props.style;

    function boldICon () {
        return (
            <>
            <img src={home} className="fill-black-700" alt="" />
            <img src={Graph} alt="" />
            <img src={chart} alt="" />
            <img src={Profile} alt="" />
            </> 
        );
    }

    function Outlined () {
        return (
            <>
            <img src={homeOutline} alt="" />
            <img src={GraphOutline} alt="" />
            <img src={chartOutline} alt="" />
            <img src={ProfileOutline} alt="" />
            </> 
        );
    }
  return (
    <>
        <div className="w-full fixed bg-none bottom-0 px-3 py-5 flex justify-around items-center">
            { styles == 'ordinary' ? boldICon() : Outlined() }
        </div>
    </>
  )
}
