import Image from "next/image";
export default function Sector(){
    return(
        <section>
            <div>
                <div><h2>SECTORS WE OPERATE?</h2></div>
                <div><a href="">See All</a></div>
            </div>
            <div>
                <div><Image src="/sector_slide_1.png" alt="slide_1" width={600.06} height={392.45}></Image></div>
                <div><Image src="/sector_slide_2.png" alt="slide_2" width={600.06} height={392.45}></Image></div>
                <div><Image src="/sector_slide_3.png" alt="slide_3" width={600.06} height={392.45}></Image></div>
                <div><Image src="/sector_slide_4.png" alt="slide_4" width={600.06} height={392.45}></Image></div>
            </div>
        </section>
    )
}