"use client"
import { motion } from "framer-motion"
type Props = {
    children:React.ReactNode;
};

export default function StaggerItem({ children }: Props){
       return(
        <motion.div 
         variants={{
            hidden: { opacity: 0, y:40},
            visible: { opacity: 1, y:0},
         }}
         transition={{ duration: 2, ease: "easeIn"}}
        >
            { children }
        </motion.div>
       )
}