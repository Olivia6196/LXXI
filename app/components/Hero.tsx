"use client"
import Stagger from "./Stagger"
import StaggerItem from "./StaggerItem"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
export default function Hero(){
    return(
        <>
        <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation = {true}
              pagination ={{ clickable: true}}
              autoplay={{ delay: 5000}}
              className="h-full w-full"
        >
            <SwiperSlide>
                <div className="bg-[url(/hero_image_1.png)] bg-cover pb-44 h-screen pt-64 mt-[-2vw]">
        <Stagger>
            <StaggerItem>
                 <h1 className=" text-5xl text-center pb-4.5 text-white font-semibold leading-14">Empowering <span className="text-yellow-400">Africa </span>Through <br /> Strategic Investments And <br /> Partnerships.</h1>
           
            <p className="text-center pb-12 text-white font-semibold"><span className="text-yellow-400">LXXI</span> is committed to creating robust investment solutions tailored for <br />the African landscape.</p>
            <div className="flex justify-center gap-14">
            <a href="" className="bg-yellow-400 rounded-lg p-4 font-semibold hover:bg-white hover:text-yellow-400">Explore Our Services</a>
            <a href="" className="bg-white rounded-lg py-4 px-6 font-semibold hover:bg-black hover:text-white">Partner With Us</a>
            </div>
             </StaggerItem>
        </Stagger>
             </div>
        </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[url(/hero_image_2.png)] bg-cover pb-44 h-screen pt-64 mt-[-2vw]">
        <Stagger>
            <StaggerItem>
                 <h1 className=" text-5xl text-center pb-4.5 text-white font-semibold leading-14">Empowering <span className="text-yellow-400">Africa </span>Through <br /> Strategic Investments And <br /> Partnerships.</h1>
           
            <p className="text-center pb-12 text-white font-semibold"><span className="text-yellow-400">LXXI</span> is committed to creating robust investment solutions tailored for <br />the African landscape.</p>
            <div className="flex justify-center gap-14">
            <a href="" className="bg-yellow-400 rounded-lg p-4 font-semibold hover:bg-white hover:text-yellow-400">Explore Our Services</a>
            <a href="" className="bg-white rounded-lg py-4 px-6 font-semibold hover:bg-black hover:text-white">Partner With Us</a>
            </div>
             </StaggerItem>
        </Stagger>
           </div>
        </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[url(/hero_image_3.png)] bg-cover pb-44 h-screen pt-64 mt-[-2vw]">
        <Stagger>
            <StaggerItem>
                 <h1 className=" text-5xl text-center pb-4.5 text-white font-semibold leading-14">Empowering <span className="text-yellow-400">Africa </span>Through <br /> Strategic Investments And <br /> Partnerships.</h1>
           
            <p className="text-center pb-12 text-white font-semibold"><span className="text-yellow-400">LXXI</span> is committed to creating robust investment solutions tailored for <br />the African landscape.</p>
            <div className="flex justify-center gap-14">
            <a href="" className="bg-yellow-400 rounded-lg p-4 font-semibold hover:bg-white hover:text-yellow-400">Explore Our Services</a>
            <a href="" className="bg-white rounded-lg py-4 px-6 font-semibold hover:bg-black hover:text-white">Partner With Us</a>
            </div>
             </StaggerItem>
        </Stagger>
             </div>
        </SwiperSlide>
        </Swiper>
        <p className="bg-black text-yellow-400 text-center p-2 text-xl">Value Pillars: Global Brokerage Excellence, Transformative Partnerships, Asset Growth & Protection, Africa First, Globally Minded.</p>
        </>
    )
}