export default function SplashScreen () {
    return (
        <div className="relative w-full h-full bg-[#2c14dd] overflow-hidden">
            <div className="relative w-screen h-screen bg-[#2c14dd]">
               
                <div className="absolute w-[196px] h-[136px] top-[250px] left-[75px]">
                    <div className="absolute h-[68px] top-[28px] left-[4px] [font-family:'Inter-Bold',Helvetica] font-light text-white text-[56px] text-center tracking-[0] leading-[normal]">
                        afripay
                    </div>
                    <div className="absolute w-[136px] h-[136px] top-0 left-0 bg-[#f2f0fd] rounded-[68px] rotate-180 blur-[32px] mix-blend-overlay" />
                </div>
                <div className="absolute w-[375px] h-[34px] top-[778px] left-0">
                    <div className="h-[34px]">
                        <div className="relative w-[134px] h-[5px] top-[21px] left-[121px] bg-white rounded-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}