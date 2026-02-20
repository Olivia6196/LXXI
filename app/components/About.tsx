import Stagger from "./Stagger"
import StaggerItem from "./StaggerItem"
export default function About(){
    return(
        <>
          <section className="bg-[url(/about_image.png)] bg-cover pt-16" id="about">
          <Stagger>
                      <StaggerItem>
            <h2 className=" text-white text-2xl md:text-3xl font-semibold text-center pb-2"><span className="text-yellow-400">LXXI Limited</span>- The Present and <br />Future of Wealth Creation in Africa</h2>
            <p className=" text-white text-sm lg:text-base font-semibold text-center pb-12">Building Africa’s wealth with Precision, Partnership and Purpose.</p>
            <div className="flex flex-col md:flex-row justify-center text-white gap-10 pt-4 pb-32 px-6 md:px-0">
                <div>
                    <p className=" md:w-[34vw] lg:w-[28vw] ">We are Africa’s Strategic investment brokerage and Asset management powerhouse, shaping the continent’s wealth through transformative partnership, private equity, and growth-driven ventures.</p>
                </div>
                <div>
                    <p className="md:w-[35vw] lg:w-[25vw] border-t-2  md:border-l-2 border-white pt-9 md:pl-9">At LXXI Limited, we are rewriting Africa’s wealth narrative. As a brokerage and asset management powerhouse, we bridge capital, opportunities, and strategic alliances to create sustainable wealth across Africa’s most promising sectors.</p>
                </div>
            </div>
            <div className="text-center pb-24">
                <a href="" className="bg-yellow-400 rounded-lg py-4 px-7 font-semibold">Learn About LXX</a>
            </div>
            </StaggerItem>
                    </Stagger>
           </section>
        </>
    )
}