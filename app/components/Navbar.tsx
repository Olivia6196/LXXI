import Image from "next/image";
export default function Navbar(){
    return(
        <>
          <nav className="flex justify-around p-3 bg-amber-500">
            <div><Image src="/logo.png" alt="LXXI logo" width={58.29} height={97.37}/></div>
            <ul className="flex gap-7">
                <li><a href="/">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Sectors</a></li>
                <li><a href="">Insights</a></li>
                <li><a href="">Approach</a></li>
                <li><a href="">Investors</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Careers</a></li>
            </ul>
            <div><a href="">Search in site <i className="bx bx-search align-middle"></i></a></div>
          </nav>
        </>
    )
}