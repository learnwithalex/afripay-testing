import Footer from "../Footer/Footer";
import Animation from "../../assets/svgs/Animation.svg";

export default function Screenload() {
  return (
    <>
            <div className="gradient text-white flex flex-col justify-center items-center h-screen w-full">
                    <img src={Animation} alt="" />
                       <p className="text-semibold">Please wait, content of the page is loading</p>

                       <Footer style="ordinary"/>
            </div>
    </>
  )
}

