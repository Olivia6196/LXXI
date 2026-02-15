import Image from "next/image";
export default function Services(){
    return(
        <section>
            <h2>What We do</h2>
            <p>LXXI Limited is an Africa-focused investment brokerage and asset management firm, enhancing economic growth through impactful investments.</p>
            <div>
                <div>
                    {/* <Image></Image> */}
                    <a href="">Learn More</a>
                    <h3></h3>
                    <p></p>
                </div>
                <div>
                    {/* <Image></Image> */}
                    <a href=""> Explore</a>
                    <h3></h3>
                    <p></p>
                </div>
                <div>
                    {/* <Image></Image> */}
                    <a href="">Find Out</a>
                    <h3></h3>
                    <p></p>
                </div>
            </div>
            <a href="">See More<i className="bx bx-chevron-right"></i></a>
        </section>
    )
}