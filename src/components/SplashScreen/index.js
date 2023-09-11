"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import anime from "animejs"
import eqlipse from '/public/eqlipse-simple.svg'
import logoLight from '/public/logo-light.svg'

export default function SplashScreen({finshLoading}) {
    const [isMounted, setIsMounted] = useState(false)
    const animate = () => {
        const loader = anime.timeline({
            complete:()=>finshLoading(),
        })
        loader.add({
            targets: "#logo",
            dely:0,
            scale:1,
            duration:500,
            easing:"easeInOutExpo"
        })
        .add({
            targets: "#logo",
            dely:0,
            scale:1.25,
            duration:500,
            easing:"easeInOutExpo"
        })
        .add({
            targets: "#logo",
            dely:0,
            scale:1,
            duration:500,
            easing:"easeInOutExpo"
        })
        .add({
            targets: "#logo",
            dely:0,
            scale:1.25,
            duration:500,
            easing:"easeInOutExpo"
        })
    }
    useEffect(()=>{
        const timeout = setTimeout(()=> setIsMounted(true),1)
        animate()
        return  () => clearTimeout(timeout)
    },[])
    return (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
            <Image 
            src={eqlipse} 
            alt="eqlipse-ils" 
            id="logo" 
            className=""/>
            <Image 
            src={logoLight} 
            alt="logo-light"
            className="absolute mt-9 mr-6"/>
        </div>
        )
}