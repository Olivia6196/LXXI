"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar(){
  const [Scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return(
        <>
          <nav className={`flex justify-center gap-24 pb-3 fixed top-0 bg-transparent left-0 w-full z-40 transition-all duration-300 mt-0 ${Scrolled ? "bg-white shadow-lg pt-4" : "bg-transparent text-white pt-4"}`}>
            <div><Image src="/logo.png" alt="LXXI logo" width={78.29} height={97.37} className="rounded-lg"/></div>
            <ul className="flex gap-2 items-center">
                <li><a href="/" className="hover:bg-yellow-400 py-2 px-3.5 hover:text-white hover:rounded-sm">Home</a></li>
                <li><a href="#about" className="hover:bg-yellow-400 py-2 px-3.5 hover:text-white hover:rounded-sm">About</a></li>
                <li><a href="#service" className="hover:bg-yellow-400 py-2 px-3.5 hover:text-white hover:rounded-sm">Services</a></li>
                <li><a href="#sector" className="hover:bg-yellow-400 py-2 px-3.5 hover:text-white hover:rounded-sm">Sectors</a></li>
                <li><a href="#insights" className="hover:bg-yellow-400 py-2 px-3.5 hover:text-white hover:rounded-sm">Insights</a></li>
                <li><a href="#approach" className="hover:bg-yellow-400 py-2 px-3.5 hover:text-white hover:rounded-sm">Approach</a></li>
                <li><a href="#invest" className="hover:bg-yellow-400 py-2 px-3.5 hover:text-white hover:rounded-sm">Investors</a></li>
                <li><a href="#news" className="hover:bg-yellow-400 py-2 px-3.5 hover:text-white hover:rounded-sm">News</a></li>
                <li><a href="#career" className="hover:bg-yellow-400 py-2 px-3.5 hover:text-white hover:rounded-sm">Careers</a></li>
            </ul>
            <div className="flex items-center"><a href="" className="bg-amber-300 py-2.5 px-3.5 rounded-lg">Search in site <i className="bx bx-search align-middle"></i></a></div>
          </nav>
        </>
    )
}