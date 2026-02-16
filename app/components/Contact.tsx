import Image from "next/image";
import Stagger from "./Stagger"
import StaggerItem from "./StaggerItem"
export default function Contact(){
    return(
        <>
        <section id="insights" className="bg-[url(/contact_bg.png)] bg-cover bg-center text-white text-center pt-28">
        <Stagger>
                    <StaggerItem>
            <Image src="/contact.png" alt="polygon" width={72.95} height={38.11} className="m-auto"></Image>
             <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-16">
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-2 font-semibold text-left">Name</label>
      <input type="text"id="name" name="name" placeholder="Enter your name" className="p-3 rounded-md bg-white text-black outline-none" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className="mb-2 font-semibold text-left">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" className="p-3 rounded-md bg-white text-black outline-none" />
    </div>
    <div className="flex flex-col">
      <label className="mb-2 font-semibold text-left" htmlFor="sublect">Subject</label>
      <input type="text" id="subject" placeholder="Enter subject" className="p-3 rounded-md bg-white text-black outline-none" />
    </div>
    <div className="flex flex-col">
      <label className="mb-2 font-semibold text-left" htmlFor="message">Message</label>
      <input type="text" placeholder="Type your message here" id="message" name="message" className="p-3 rounded-md bg-white text-black outline-none" />
    </div>
    <div className="md:col-span-2 flex justify-center mt-6">
      <button className="bg-yellow-400 text-black font-bold py-3 px-12 rounded-lg hover:bg-white hover:shadow-[0_0_8px_yellow] transition-all mb-7">
        Submit
      </button>
    </div>
  </form>
   </StaggerItem>
          </Stagger>
        </section>
        <section className="bg-black text-white pt-28 pb-12">
          <Stagger>
                      <StaggerItem>
            <div className="flex justify-center gap-72">
                <div>
                    <h3 className="text-xl font-semibold pb-4 pt-3">Address</h3>
                    <p><Image src="/email_icon.png" alt="email icon" width={40} height={20} className="inline align-middle bg-yellow-400 p-2 rounded-full mr-2"></Image>NO: 23,  Wuse 2, abjua, FCT.</p>
                    <h3 className="text-xl font-semibold pb-4 pt-3">Contact</h3>
                    <p><Image src="/phone_icon.png" alt="phone icon" width={40} height={20} className="inline align-middle bg-yellow-400 p-2 rounded-full mr-2"></Image>+123 456 789</p>
                    <h3 className="text-xl font-semibold pb-4 pt-3">Open Time</h3>
                    <p><span className="mr-14 text-yellow-400 leading-8">Mondays-Fridays</span>: 09:00 - 18:00</p>
                    <p><span className="mr-8 text-yellow-400">Saturdays - Sundays</span>: Closed</p>
                    <h3 className="text-xl font-semibold pb-4 pt-5">Stay Connected</h3>
                    <a href="" className="text-3xl bg-blue-700 rounded-full pt-1.5 px-1 mr-3"><i className="bx bxl-facebook"></i></a>
                    <a href="" className="text-3xl bg-blue-500 rounded-full pt-1.5 px-1 mr-3"><i className="bx bxl-twitter"></i></a>
                    <a href="" className="text-3xl bg-green-500 rounded-full pt-1.5 px-1 mr-3"><i className="bx bxl-whatsapp"></i></a>
                </div>
                <div className="relative">
                    <Image src="/location.png" alt="union" width={242.95} height={38.11} className="h-[25vw] w-[25vw] pt-8 relative"></Image>
                    <i className="bx bx-send rotate-45 absolute top-56 text-yellow-400 text-2xl right-1.5 bg-white p-2 rounded-full shadow-[0_0_4px_black]"></i>
                    <i className="bx bxs-share rotate-180 absolute top-72 text-yellow-400 text-2xl right-1.5 bg-white p-2 rounded-full shadow-[0_0_4px_black]"></i>
                </div>
            </div>
             </StaggerItem>
                    </Stagger>
        </section>
        </>
    )
}

