import Image from "next/image";
export default function Career(){
    return(
        <section>
            <h2>Opportunities</h2>
            <div>
                <div>
                    <div><Image src="/opportunity_one.png" alt="image" width={120.07} height={92.13}></Image></div>
                    <div>
                        <h3>Professional Roles</h3>
                        <p>Explore diverse career paths to grow your professional skillset.</p>
                    </div>
                </div>
                <div>
                    <div><Image src="/opportunity_two.png" alt="image" width={107.99} height={90.62}></Image></div>
                    <div>
                        <h3>Graduate Internship Programs</h3>
                        <p>Join hands with industry leaders and gain first-hand experience.</p>
                    </div>
                </div>
                <div>
                    <div><Image src="/opportunity_three.png" alt="image" width={107.99} height={80.8}></Image></div>
                    <div>
                        <h3>Leadership Development Tracks</h3>
                        <p>Accelerate your career with our leadership programs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}