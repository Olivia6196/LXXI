"use client"
import { motion, Variants } from "framer-motion"

type Props = {
    children:React.ReactNode;
};
const containerVariants: Variants = {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 2
                },
            },
        
}
export default function Stagger({ children }: Props){
       return(
        <motion.div 
        variants={ containerVariants }
         initial= "hidden"
         whileInView= "visible"
         viewport={{ once: true}}
        >
            { children }
        </motion.div>
       )
}