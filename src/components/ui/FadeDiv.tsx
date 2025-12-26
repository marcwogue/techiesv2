import {motion, useInView} from "framer-motion"
import { useRef } from "react"


export const FadeDivBottom = (props : {children : React.ReactNode}) => {
    const ref = useRef(null)
    const inView = useInView(ref)
  return (
    <motion.div
        ref={ref}
        initial = {{opacity:0,y:30}}
        animate = {inView?{opacity:1,y:0}:{opacity:0,y:30}}
        transition={{duration:0.6, ease :"easeInOut"}}
        className=" rounded w-full"
    >
        {props.children}
    </motion.div>
  )
}

export const FadeDivRight = (props : {children : React.ReactNode, className?: string}) => {
    const ref = useRef(null)
    const inView = useInView(ref)
  return (
    <motion.div
        ref={ref}
        initial = {{opacity:0,x:30}}
        animate = {inView?{opacity:1,x:0}:{opacity:0,x:30}}
        transition={{duration:0.6, ease :"easeInOut"}}
        className={(props.className || "") +" rounded w-full"}
    >
        {props.children}
    </motion.div>
  )
}


export const FadeDivLeft = (props : {children : React.ReactNode, className?: string}) => {
    const ref = useRef(null)
    const inView = useInView(ref)
  return (
    <motion.div
        ref={ref}
        initial = {{opacity:0,x:-30}}
        animate = {inView?{opacity:1,x:0}:{opacity:0,x:-30}}
        transition={{duration:0.6, ease :"easeInOut"}}
        className={(props.className || "") +" rounded w-full"} 
    >
        {props.children}
    </motion.div>
  )
}