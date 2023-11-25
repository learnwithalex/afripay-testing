import Signheader from "../WelcomeScreen/Login/SignHeader";

const Topicdetails = () => {
    return (
        <main>
            <header className="p-1">
                    <Signheader message="Topic Details"/>
            </header>

            <section className="mt-5">
                <h1 className="text-center font-bold text-xl text-[#210EA4]"> 
                    How to add bank account to afripay? 
                </h1>

                <div className="px-6">
                        <p className="leading-relaxed font-semibold text-[#575e75] ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facilis, obcaecati quasi consectetur corporis repudiandae? Voluptatum atque ea eaque ad repudiandae voluptate quibusdam! Earum soluta a nulla alias assumenda quia, reiciendis dicta. Ratione at facere numquam architecto voluptatum culpa obcaecati impedit quis? Fugiat nemo debitis, sequi odio inventore culpa totam id voluptate quo. Architecto ab esse, dolorem consequatur quod velit fugit distinctio tempora reprehenderit soluta repellat dolore, veritatis debitis omnis possimus voluptatum. Perspiciatis, sapiente. Facere esse sed fugit ducimus velit!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facilis, obcaecati quasi consectetur corporis repudiandae? Voluptatum atque
                        </p>

                        <p className="text-[#210ea4] my-4 font-semibold"> Did that help solve your question? </p>
                </div>

                <div className="px-5 w-1/2 flex justify-between">
                    <button className="px-7 py-1  text-[#210ea4] bg-[#E0DFFB] rounded-[30px]">Yes</button>
                    <button className="px-7 py-1  text-[#210ea4] bg-[#E0DFFB] rounded-[30px]">No</button>
                </div>

                
            </section>
        </main>
    );
}

export default Topicdetails;
