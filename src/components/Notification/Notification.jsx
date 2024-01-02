import Signheader from "../WelcomeScreen/Login/SignHeader";
import Toggle from "./Toggle";

  
const Notification = () => {

    const logState = state => {
      console.log("Toggled:" , state);
    }

  return (
    <>
           <main className="w-full h-screen bg-[#F5F7FF]">
              <div className="w-full py-5">
                <Signheader message="Notifications"/>
              </div>

              <section className="px-5">

                <div className="flex my-2 w-full justify-between items-center p-3">
                  <h1 className="text-lg font-semibold">Transaction alert</h1>
                  <Toggle toggled={true} onClick={logState}/>
                </div>

                <div className="flex my-2 w-full justify-between items-center p-3">
                  <h1 className="text-lg font-semibold">Insight alert</h1>
                  <Toggle toggled={false} onClick={logState}/>
                </div>

                <div className="flex my-2 w-full justify-between items-center p-3">
                  <h1 className="text-lg font-semibold">Sort Transaction alert</h1>
                  <Toggle toggled={false} onClick={logState}/>
                </div>
                    
              </section>

              <section className="w-full px-4 absolute bottom-[50px]">
                    <button className="w-full text-[#4A44C6] text-lg font-semibold py-5 rounded-[70px] bg-[#E9E9FF] ">Save</button>
              </section>
          </main>
    </>
  )
}
export default Notification;