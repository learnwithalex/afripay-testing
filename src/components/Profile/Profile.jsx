import Footer from "../Footer/Footer"
import Memoji from "../../assets/images/Memoji.png"
import user from "../../assets/svgs/user.svg"
import gear from "../../assets/svgs/Cog.svg"
import Phone from "../../assets/svgs/Phone.svg"
import question from "../../assets/svgs/Question Circle.svg"
import Profiletab from "./Profiletabs"

export default function Profile() {

    var profileInfo  = [
        {
            head : 'My Account',
            image : user,
            link: '/myaccount'
        } , 
        {
            head : 'Settings',
            image : gear,
            link: '/settings'
        } , 
        {
            head : 'Help Center',
            image : question,
            link: '/helpcenter'
        } , 
        {
            head : 'Contact',
            image : Phone,
            link: '/contact'
        } , 
    ]

  return (
    <>
    <div className="h-screen w-full gradient text-white">

        <header className="w-full p-5 flex justify-between items-center "> 
            <h1>Profile</h1>
            <h1>Edit Profile</h1> 
        </header>

        <main className="w-full flex justify-evenly items-center mt-8 mb-10">
                <div className="w-20 h-20 overflow-hidden rounded-full p-2 bg-[#FDD8B0]">
                    <img src={Memoji} className="w-full h-full" alt="" />
                </div>
                <div className="w-2/3">
                    <h1 className="font-semibold text-xl">Donye Collins</h1>
                    <p>Iamcollinsdonye@gmail.com</p>
                </div>
        </main>

        <section className="h-full bg-[#F4F7FE] rounded-s-[40px] rounded-e-[40px] p-5">

                
                {/* function to display all tabs dynammically start */}
            { profileInfo.map( (profile , i)=> (
                                <Profiletab title = {profile.head} link = {profile.link} image = {profile.image} key={i}/>
                         )) 
                         
            }
            {/* function to display all tabs dynammically end */}

                

                <p className="text-[#A2A0A8] mt-20 text-[15px] text-center">
                You joined Brees on September 2021. It’s been 1 month since then and our mission is still the same, help you better manage your finance like a brees.</p>

        </section>


       
            
        




    </div>
        <Footer style="outlined"/>
    </>
  )
}

