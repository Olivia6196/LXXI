import Image from "next/image";
export default function Contact(){
    return(
        <>
        <section>
            <Image src="/contact.png" alt="polygon" width={42.95} height={38.11}></Image>
            <h2>Let’s Build Wealth Together</h2>
            <form action="mailto:Partnerships@lxxilimited.com" method="post">
                <label htmlFor="name">Name:</label>
                <label htmlFor="email">Email:</label>
                <br />
                <input type="text" id="name" name="name" required placeholder="Enter your name"/>
                 <input type="text" id="email" name="email" required placeholder="Enter your email"/>
                 <br />
                 <label htmlFor="subject">Subject:</label>
                  <label htmlFor="message">Message:</label>
                 <br />
                <input type="text" id="subject" name="subject" required placeholder="Enter subject"/>
                 <textarea name="message" id="message" required placeholder="Type your message here"></textarea>
                 <br />
                 <button>Submit</button>
            </form>
        </section>
        <section>
            <div>
                <div>
                    <h3>Address</h3>
                    <p><Image src="/email_icon.png" alt="email icon" width={20} height={20}></Image>NO: 23,  Wuse 2, abjua, FCT.</p>
                    <h3>Contact</h3>
                    <p><Image src="/phone_icon.png" alt="phone icon" width={20} height={20}></Image></p>
                    <h3>Open Time</h3>
                    <p><span>Mondays-Fridays</span>: 09:00 - 18:00</p>
                    <p><span>Saturdays - Sundays</span>: Closed</p>
                    <h3>Stay Connected</h3>
                    <a href=""><i className="bx bxl-facebook"></i></a>
                    <a href=""><i className="bx bxl-twitter"></i></a>
                    <a href=""><i className="bx bxl-whatsapp"></i></a>
                </div>
                <div>
                    <Image src="/location.png" alt="union" width={242.95} height={38.11}></Image>
                    <i className="bx bx-send rotate-45"></i>
                    <i className="bx bxs-share rotate-180"></i>
                </div>
            </div>
        </section>
        </>
    )
}