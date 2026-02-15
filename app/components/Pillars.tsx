import Image from "next/image";
export default function Pillars(){
    return(
        <section>
            <h2>Our Value Pillars</h2>
            <p>Explore our core strength</p>
            <div>
                <div>
                    <div><Image src="/integrity.png" alt="integrity" width={75.51} height={77.49}></Image></div>
                    <div>
                        <h3>Integrity</h3>
                        <p>Committed to ethical practices.</p>
                    </div>
                </div>
                <div>
                    <div><Image src="/innovation.png" alt="integrity" width={75.51} height={75.51}></Image></div>
                    <div>
                        <h3>Innovation</h3>
                        <p>Driving change through creative solutions.</p>
                    </div>
                </div>
                <div>
                    <div><Image src="/collaboration.png" alt="integrity" width={75.51} height={77.49}></Image></div>
                    <div>
                        <h3>Collaboration</h3>
                        <p>Building partnerships for success.</p>
                    </div>
                </div>
                <div>
                    <div><Image src="/impact.png" alt="integrity" width={75.51} height={77.49}></Image></div>
                    <div>
                        <h3>Impact</h3>
                        <p>Creating sustainable, measurable outcomes</p>
                    </div>
                </div>
            </div>
            <a href="">Learn More</a>
        </section>
    )
}