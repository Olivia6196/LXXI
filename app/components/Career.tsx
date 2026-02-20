import Image from "next/image";
import Stagger from "./Stagger"
import StaggerItem from "./StaggerItem"
export default function Career(){
    return(
        <section className="bg-[url(/opportunities_bg.png)] bg-cover pt-16 px-12 md:pr-0 md:pl-20 pb-16" id="career"> 
         <Stagger>
                    <StaggerItem>
            <h2 className="text-white text-4xl pb-9">Opportunities</h2>
            <div className="grid grid-col-1 md:mr-20 lg:flex text-white gap-10">
                <div className="flex gap-5 border border-white py-2 px-4 rounded-md">
                    <div><Image src="/opportunity_one.png" alt="image" width={110.99} height={92.13}></Image></div>
                    <div>
                        <h3 className="text-sm font-semibold pb-1.5 pt-2">Professional Roles</h3>
                        <p className="text-xs">Explore diverse career paths to grow <br /> your professional skillset.</p>
                    </div>
                </div>
                <div className="flex gap-5 border border-white py-2 px-4 rounded-md">
                    <div><Image src="/opportunity_two.png" alt="image" width={100.99} height={90.62}></Image></div>
                    <div>
                        <h3 className="text-sm font-semibold pb-1.5 pt-2">Graduate Internship Programs</h3>
                        <p className="text-xs">Join hands with industry leaders <br />and gain first-hand experience.</p>
                    </div>
                </div>
                <div className="flex gap-5 border border-white py-2 px-4 rounded-md">
                    <div><Image src="/opportunity_three.png" alt="image" width={100.99} height={80.8}></Image></div>
                    <div>
                        <h3 className="text-sm font-semibold pb-1.5 pt-2">Leadership Development Tracks</h3>
                        <p className="text-xs">Accelerate your career with our <br />leadership programs.</p>
                    </div>
                </div>
            </div>
                </StaggerItem>
                    </Stagger>
        </section>
    )
}