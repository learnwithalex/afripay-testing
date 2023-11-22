import Signheader from "../WelcomeScreen/Login/SignHeader";
import Settingstab from "./settings-tab";


export default function Settings() {
    var settingInformation  = [
        {
            head : 'Reset Password',
            link: '/reset-password'
        } , 
        {
            head : 'Notification',
            link: '/notification'
        } 
    ]

    var securityInfo  = {
            head : 'Privacy Policy',
            link: '/privacypolicy'
        }

  return (
    <>
    <main className="w-full h-screen bg-[#F5F7FF]">
        <div className="w-full py-5">
            <Signheader message="My Account"/>
        </div>
        

        

         {/* general settings start */}
         <section className="px-5 mt-8">
            <h1 className="text-[#6C727F] font-semibold text-lg">General</h1>

            {/* function to display all tabs dynammically start */}
            { settingInformation.map( (settingInfo , i)=> (
                                <Settingstab title = {settingInfo.head} link = {settingInfo.link} key={i}/>
                         )) 
                         
            }
            {/* function to display all tabs dynammically end */}

                
        </section>




         {/* Security settings start */}
         <section className="px-5 mt-8">
            <h1 className="text-[#6C727F] font-semibold text-lg">Security</h1>

            {/* Component containing the setting tab */}
            <Settingstab title = {securityInfo.head} link = {securityInfo.link}/>
            <p className="pl-3 text-md mt-[-15px] text-[#6C727F]">Choose what data you share with us</p>

                
        </section>
         {/*Security settings start */}



        <section className="w-full px-4 absolute bottom-[50px] text-center">
             <button className="w-full text-[#4A44C6] text-lg font-semibold py-5 rounded-[70px] border border-[#2C14DD1A] mb-5">Logout</button>

             <h1 className="text-[#9EA3AE] text-lg">Brees©2023v1.0</h1>
        </section>
        
        
    </main>
        

    </>
  )
}

