import { section } from "framer-motion/client";

export default function Footer(){
    return(
        <section className="bg-gray-900 py-7 text-white text-sm">
            <div className="flex justify-center gap-32">
                <div>© 2026 LXXI Limited</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div><a href="#insights">Contact Us</a></div>
            </div>
        </section>
    )
}