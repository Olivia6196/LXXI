import Stagger from "./Stagger"
import StaggerItem from "./StaggerItem"
export default function Footer(){
    return(
        <section className="bg-gray-900 py-7 text-white text-sm">
           <Stagger>
                       <StaggerItem>
            <div className="flex justify-center gap-32">
                <div>© 2026 LXXI Limited</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div><a href="#insights">Contact Us</a></div>
            </div>
             </StaggerItem>
                    </Stagger>
        </section>
    )
}