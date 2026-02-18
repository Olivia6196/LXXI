import { FaChevronRight } from "react-icons/fa6"
import Stagger from "./Stagger"
import StaggerItem from "./StaggerItem"
export default function News() {
    return (
        <section id="news">
            <Stagger>
                <StaggerItem>
                    <div className="flex justify-center pt-28 gap-80 pb-12">
                        <div className="w-[21.5vw] pt-8">
                            <h2 className="font-medium pb-8">Press Release</h2>
                            <h3 className="font-semibold">LXXI Sustain Growth Momentum in Q1-2026, Records 43% Growth in Gross Earnings and 37% Rise in Profit before tax </h3>
                            <p className="text-xs pt-1 pb-11">LXXI announces Gross GDP for Q1 and budget for Q2</p>
                            <p className="font-semibold border-b-2 pb-2"><FaChevronRight className="text-yellow-400 font-semibold text-4xl align-middle" />Read the press release</p>
                        </div>
                        <div className="w-[17.5vw] border-2 p-4 bg-black text-white rounded-lg">
                            <p className="text-xl pt-6 pb-4">Stay Updated with the latest Press release, media features and industry recognitions from LXXI</p>
                            <p className="text-xs font-semibold"><FaChevronRight className="text-yellow-400 font-semibold text-2xl align-middle" />Read and subscribe to LXXI news</p>
                        </div>
                    </div>
                </StaggerItem>
            </Stagger>
        </section>
    )
}