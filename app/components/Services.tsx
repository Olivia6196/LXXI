import Stagger from "./Stagger"
import StaggerItem from "./StaggerItem"
export default function Services(){
    return(
        <section className="bg-[url(/service_bg.png)] bg-cover pt-20 pl-28 pb-12" id="service">
             <Stagger>
                        <StaggerItem>
            <h2 className="text-white text-4xl pb-4">What We do</h2>
            <p className="text-white pb-16">LXXI Limited is an Africa-focused investment brokerage and asset management firm,<br /> enhancing economic growth through impactful investments.</p>
            <div className="flex text-white gap-8 relative">
                <div className="border border-white rounded-sm">
                    <h3 className="bg-[url(/services_1.png)] bg-cover h-[20vw] w-[26vw] pt-28 text-3xl text-center">Investment Brokerage</h3>
                    <a href="" className="bg-yellow-400 rounded-lg py-2 px-3.5 font-semibold text-sm text-black absolute top-0">Learn More</a>
                    <h3 className="pl-4 pt-5 text-sm font-semibold">Investment Brokerage</h3>
                    <p className="pt-3 pb-3 text-xs pl-4">Expert guidance in investment opportunities.</p>
                </div>
                <div className="border border-white rounded-sm">
                    <h3 className="bg-[url(/services_2.png)] bg-cover h-[20vw] w-[26.2vw] text-transparent">Strategic Partnerships</h3>
                    <a href="" className="bg-yellow-400 rounded-lg py-2 px-4 font-semibold text-sm text-black absolute top-0"> Explore</a>
                    <h3 className="pl-4 pt-5 text-sm font-semibold">Strategic Partnerships</h3>
                    <p className="pt-3 pb-3 text-xs pl-4">Collaborating for greater impact.</p>
                </div>
                <div className="border border-white rounded-sm">
                    <h3 className="bg-[url(/services_3.png)] bg-cover h-[20vw] w-[26vw] pt-28 text-3xl text-center">Asset Management</h3>
                    <a href="" className="bg-yellow-400 rounded-lg py-2 px-4 font-semibold text-sm text-black absolute top-0">Find Out</a>
                    <h3 className="pl-4 pt-5 text-sm font-semibold">Asset Management</h3>
                    <p className="pt-3 pb-3 text-xs pl-4">Comprehensive management strategies.</p>
                </div>
            </div>
            <div className="text-center pt-9 text-yellow-400 font-semibold text-xl">
                 <a href="" className="border-b-2 border-transparent hover:border-b-2 hover:border-yellow-400 pb-2 hover:text-white transition-all">See More<i className="bx bx-chevron-right align-middle text-5xl"></i></a>
            </div>
                </StaggerItem>
                    </Stagger>
        </section>
    )
}