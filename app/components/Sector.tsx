import Image from "next/image";
export default function Sector(){
    return(
        <section className="bg-[url(/sectors_bg.png)] bg-cover" id="sector">
            <div className="flex justify-between px-28">
                <div className="py-16 text-white text-2xl font-semibold"><h2>SECTORS WE OPERATE?</h2></div>
                <div className="pt-24 pb-10 pr-32"><a href="" className="text-yellow-400 border-b-2 border-b-yellow-400 pb-2 hover:border-b-transparent">See All</a></div>
            </div>
            <div className="flex">
               <div>
                <Image src="/sector_slide_2.png" alt="sector_slide_1.png" width={299} height={99}></Image>
                  <h2>01</h2>
                  <h3>Commodity trading</h3>
                  <p>Streamlining Africa’s commodity supply chains through efficient brokerage of agricultural produce, minerals, and energy commodities, ensuring stable market access globally</p>
               </div>
               <div>
                <Image src="/sector_slide_3.png" alt="sector_slide_2.png" width={399} height={99}></Image>
                  <h2>02</h2>
                  <h3>Capital goods and Infrastructure</h3>
                  <p>Enabling Africa’s infrastructure renaissance through capital goods trading , logistics facilitation, and infrastructural asset management.</p>
               </div>
               <div>
                <Image src="/sector_slide_1.png" alt="sector_slide_4.png" width={220} height={99}></Image>
                  <h2>03</h2>
                  <h3>Private Equity</h3>
                  <p>Empowering high-growth African enterprises with capital injections, growth advisory, and strategic scaling through bespoke PE models. </p>
               </div>
               <div>
                <Image src="/sector_slide_4.png" alt="sector_slide_4.png" width={299} height={99}></Image>
                  <h2>04</h2>
                  <h3>Financial Advisory and Structured Finances</h3>
                  <p>Innovative financial structuring and strategic advisory to suport projects and enterprises across African Markets.</p>
               </div>
            </div>
        </section>
    )
}