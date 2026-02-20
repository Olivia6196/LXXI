import Image from "next/image";
import Stagger from "./Stagger"
import StaggerItem from "./StaggerItem"
export default function Pillars(){
    return(
        <section className="bg-[url(/values.png)] bg-cover pt-28" id="approach">
            <Stagger>
                        <StaggerItem>
            <h2 className="text-white text-4xl text-center font-semibold pb-2">Our Value Pillars</h2>
            <p className="text-white text-lg text-center font-semibold">Explore our core strength</p>
            <div className="grid grid-cols-2 md:pl-24 lg:flex justify-center text-white py-28 gap-16 lg:gap-24">
                <div className="flex items-center gap-4">
                    <div><Image src="/integrity.png" alt="integrity" width={55.51} height={77.49}></Image></div>
                    <div>
                        <h3 className="font-semibold">Integrity</h3>
                        <p className="text-xs font-medium pt-2">Committed to ethical <br />practices.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div><Image src="/innovation.png" alt="integrity" width={55.51} height={75.51}></Image></div>
                    <div>
                        <h3 className="font-semibold">Innovation</h3>
                        <p className="text-xs font-medium pt-2">Driving change through <br /> creative solutions.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div><Image src="/collaboration.png" alt="integrity" width={55.51} height={77.49}></Image></div>
                    <div>
                        <h3 className="font-semibold">Collaboration</h3>
                        <p className="text-xs font-medium pt-2">Building partnerships for <br />success.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div><Image src="/impact.png" alt="integrity" width={55.51} height={77.49}></Image></div>
                    <div>
                        <h3 className="font-semibold">Impact</h3>
                        <p className="text-xs font-medium pt-2">Creating sustainable,<br /> measurable outcomes</p>
                    </div>
                </div>
            </div>
            <div className="text-center pb-12 text-yellow-400 font-semibold text-xl">
                 <a href="" className="border-b-2 border-transparent hover:border-b-2 hover:border-yellow-400 pb-1">Learn More</a>
            </div>
              </StaggerItem>
                    </Stagger>
        </section>
    )
}