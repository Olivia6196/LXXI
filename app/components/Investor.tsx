import Stagger from "./Stagger"
import StaggerItem from "./StaggerItem"
export default function Investor() {
    return (
        <section id="invest" className="pb-20">
            <Stagger>
                <StaggerItem>
                    <h2 className="text-center text-5xl font-semibold pt-6">Impact & Metrics</h2>
                    <p className="text-center pt-4 font-semibold text-gray-700 pb-14">Measurable success across our investment <br />strategies.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-[70vw] mx-16 lg:w-[50vw] md:mx-30 lg:m-auto gap-5 ">
                        <div className=" border-2 border-b-gray-400 py-2 px-8 rounded-sm">
                            <h3 className="text-sm font-medium">Funds Managed</h3>
                            <p className="text-2xl font-semibold">$<span className="text-yellow-400">2.3</span> Billion</p>
                        </div>
                        <div className=" border-2 border-b-gray-400 py-2 px-8 rounded-sm">
                            <h3 className="text-sm font-medium">Project Funded</h3>
                            <p className="text-2xl font-semibold"><span className="text-yellow-400">50</span>+</p>
                        </div>
                        <div className=" border-2 border-b-gray-400 py-2 px-8 rounded-sm">
                            <h3 className="text-sm font-medium">Partnerships Established</h3>
                            <p className="text-2xl font-semibold text-yellow-400">15</p>
                        </div>
                        <div className=" border-2 border-b-gray-400 py-2 px-8 rounded-sm">
                            <h3 className="text-sm font-medium">Investment Returns</h3>
                            <p className="text-2xl font-semibold"><span className="text-yellow-400">6-12</span>% Average</p>
                        </div>
                    </div>
                </StaggerItem>
            </Stagger>
        </section>
    )
}