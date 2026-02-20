import { FaChevronRight } from "react-icons/fa6"
import Stagger from "./Stagger"
import StaggerItem from "./StaggerItem"
export default function Services() {
    return (
        <section className="bg-[url(/service_bg.png)] bg-cover pt-20 px-12 md:px-28 lg:pr-0 pb-12" id="service">
            <Stagger>
                <StaggerItem>
                    <h2 className="text-white text-4xl pb-4">What We do</h2>
                    <p className="text-white pb-16">LXXI Limited is an Africa-focused investment brokerage and asset management firm,<br /> enhancing economic growth through impactful investments.</p>
                    <div className="grid grid-col-1 lg:flex text-white gap-8 relative">
                        <div className="border border-white rounded-lg">
                            <h3 className="bg-[url(/services_1.png)] bg-cover rounded-lg h-[40vw] lg:h-[20vw] lg:w-[26vw] pt-20 md:pt-40 lg:pt-28 text-2xl md:text-4xl lg:text-3xl text-center">Investment Brokerage</h3>
                            <a href="" className="bg-yellow-400 rounded-lg py-2 px-3.5 font-semibold text-sm text-black absolute top-0">Learn More</a>
                            <h3 className="pl-4 pt-9 lg:pt-5 text-xl lg:text-sm font-semibold">Investment Brokerage</h3>
                            <p className="pt-3 pb-3 text-sm lg:text-xs pl-4">Expert guidance in investment opportunities.</p>
                        </div>
                        <div className="border border-white rounded-lg">
                            <h3 className="bg-[url(/services_2.png)] bg-cover rounded-lg h-[40vw] lg:h-[20vw] lg:w-[26.2vw] text-transparent">Strategic Partnerships</h3>
                            <a href="" className="bg-yellow-400 rounded-lg py-2 px-4 font-semibold text-sm text-black absolute top-[73vw] md:top-[58.5vw] lg:top-0"> Explore</a>
                            <h3 className="pl-4 pt-9 lg:pt-5 text-xl lg:text-sm font-semibold">Strategic Partnerships</h3>
                            <p className="pt-3 pb-3 text-sm lg:text-xs pl-4">Collaborating for greater impact.</p>
                        </div>
                        <div className="border border-white rounded-lg">
                            <h3 className="bg-[url(/services_3.png)] bg-cover rounded-lg h-[40vw] lg:h-[20vw] lg:w-[26vw] pt-20 md:pt-40 text-2xl md:text-4xl lg:pt-28 lg:text-3xl text-center">Asset Management</h3>
                            <a href="" className="bg-yellow-400 rounded-lg py-2 px-4 font-semibold text-sm text-black absolute top-[145.9vw] md:top-[116.8vw] lg:top-0">Find Out</a>
                            <h3 className="pl-4 pt-9 lg:pt-5 text-xl lg:text-sm font-semibold">Asset Management</h3>
                            <p className="pt-3 pb-3 text-sm lg:text-xs pl-4">Comprehensive management strategies.</p>
                        </div>
                    </div>
                    <div className="text-center pt-9 text-yellow-400 font-semibold text-xl">
                        <a href="" className="border-b-2 border-transparent hover:border-b-2 hover:border-yellow-400 pb-2 hover:text-white transition-all">See More<FaChevronRight className="inline align-middle text-3xl" /></a>
                    </div>
                </StaggerItem>
            </Stagger>
        </section>
    )
}