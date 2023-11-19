import {Link} from 'react-router-dom'
import Getstartedcard from './Getstartedcard'
import bank from './bank.png'
import email from './email.png'
import padlock from './padlock1.png'
import user from './user.png'
export default function Getstarted() {
        var cardInformation  = [
            {
                head : 'Verify your email address',
                subheading : 'This is the bank account we would track and manage your spendings',
                image : email
            } , 
            {
                head : 'Connect your bank account',
                subheading : 'This is the bank account we would track and manage your spendings',
                image : bank
            } , 
            {
                head : 'Setup a security pin',
                subheading : 'This is the bank account we would track and manage your spendings',
                image : padlock
            } , 
            {
                head : 'Tell us more about you',
                subheading : 'This is the bank account we would track and manage your spendings',
                image : user
            } , 
        ]
  return (
    <>
            <div className="bg-gradient bg-gradient-to-b from-[#2C14DD] to-[#432DEC] h-screen w-full">
              <div className=" h-full w-full items-center justify-center">
                    <div className="w-full text-right p-5">
                        <button className="focus:outline-none bg-fading text-white inline-block px-5 py-2 mt-5 rounded-[50px]">
                        <Link to="/signup">Skip</Link>
                        </button>
                    </div>

                    <div className="w-full p-5 relative top-[-50px]">
                            <h1 className="text-4xl text-[#EAE7FD] font-semibold">Get Started</h1>
                            <p className="text-[#D5D0FB] text-md">Get most out of your afripay account</p>
                        </div>

                    <div className="w-full px-5  flex flex-col gap-[25px]">
                         { cardInformation.map( (cardInfo , i)=> (
                                <Getstartedcard key={i}  heado ={cardInfo.head} subheading ={cardInfo.subheading} image ={cardInfo.image} />
                         )) 
                         
                         } 
                    </div>
                    
              </div>
        </div>
    </>
  )
}

