"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const sectorData = [
  { id: "01", title: "Commodity Trading", img: "/sector_slide_2.png", desc: "Streamlining Africa's commodity supply chains through efficient brokerage..." },
  { id: "02", title: "Capital goods and Infrastructure", img: "/sector_slide_3.png", desc: "Enabling Africa's infrastructure renaissance through capital goods trading..." },
  { id: "03", title: "Private Equity", img: "/sector_slide_1.png", desc: "Empowering high-growth African enterprises with capital injections..." },
  { id: "04", title: "Financial Advisory", img: "/sector_slide_4.png", desc: "Innovative financial structuring and strategic advisory to support projects..." },
];

export default function Sector() {
  return (
    <section className="bg-[url(/sectors_bg.png)] bg-cover py-20 text-white overflow-hidden" id="sector">
      <div className="flex justify-between items-center px-10 md:px-28 mb-12">
        <h2 className="text-2xl font-semibold uppercase pb-10">Sectors We Operate ?</h2>
        <a href="#" className="text-yellow-400 border-b border-yellow-400 pb-1 hover:text-white hover:border-white transition-all">
          See All
        </a>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={2} // This creates the "peek" effect seen in your image
        centeredSlides={true}
        loop={true}
        initialSlide={1}
        breakpoints={{
          1024: { slidesPerView: 3.5, spaceBetween: 50 }, // For Desktop
        }}
        className="sector-swiper"
      >
        {sectorData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative group rounded-3xl overflow-hidden h-[20vw] shadow-2xl">
              {/* Main Image */}
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay - Exactly like the photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-3xl font-bold block mb-2 opacity-80">{item.id}</span>
                <h3 className="text-xl font-bold uppercase mb-3 tracking-wide">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
                
                {/* Diagonal Arrow Icon */}
                <div className="absolute bottom-10 right-10 border border-white/30 rounded-full p-2 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Bar (01 / 04 Style) */}
      <div className="flex flex-col items-center mt-12 gap-4">
        <div className="text-xs font-mono tracking-tighter text-gray-500">
          01 <span className="mx-2">/</span> 04
        </div>
        <div className="w-64 h-[0.1vw] bg-gray-800 relative">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-white transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}
// export default function Sector(){
//     return(
//         <section className="bg-[url(/sectors_bg.png)] bg-cover" id="sector">
//             <div className="flex justify-between px-28">
//                 <div className="py-16 text-white text-2xl font-semibold"><h2>SECTORS WE OPERATE?</h2></div>
//                 <div className="pt-24 pb-10 pr-32"><a href="" className="text-yellow-400 border-b-2 border-b-yellow-400 pb-2 hover:border-b-transparent">See All</a></div>
//             </div>
//             <div className="flex">
//                <div>
//                 <Image src="/sector_slide_2.png" alt="sector_slide_1.png" width={299} height={99}></Image>
//                   <h2>01</h2>
//                   <h3>Commodity trading</h3>
//                   <p>Streamlining Africa’s commodity supply chains through efficient brokerage of agricultural produce, minerals, and energy commodities, ensuring stable market access globally</p>
//                </div>
//                <div>
//                 <Image src="/sector_slide_3.png" alt="sector_slide_2.png" width={399} height={99}></Image>
//                   <h2>02</h2>
//                   <h3>Capital goods and Infrastructure</h3>
//                   <p>Enabling Africa’s infrastructure renaissance through capital goods trading , logistics facilitation, and infrastructural asset management.</p>
//                </div>
//                <div>
//                 <Image src="/sector_slide_1.png" alt="sector_slide_4.png" width={220} height={99}></Image>
//                   <h2>03</h2>
//                   <h3>Private Equity</h3>
//                   <p>Empowering high-growth African enterprises with capital injections, growth advisory, and strategic scaling through bespoke PE models. </p>
//                </div>
//                <div>
//                 <Image src="/sector_slide_4.png" alt="sector_slide_4.png" width={299} height={99}></Image>
//                   <h2>04</h2>
//                   <h3>Financial Advisory and Structured Finances</h3>
//                   <p>Innovative financial structuring and strategic advisory to suport projects and enterprises across African Markets.</p>
//                </div>
//             </div>
//         </section>
//     )
// }