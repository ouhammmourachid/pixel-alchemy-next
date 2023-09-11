"use client"
import Image from 'next/image';
import Link from 'next/link';
import React,{useRef,useState,useEffect} from 'react';

export default function Header({setShowSignIn,setShowSignUp}){
    const logedIn = true;
    const [showMenu,setShowMenu] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
        if(menuRef.current && !menuRef.current.contains(e.target)){
            setShowMenu(false);
            console.log(menuRef.current);
        }      
        };
        document.addEventListener("mousedown", handler);
        return() =>{
        document.removeEventListener("mousedown", handler);
        }
    });
    return(
    <nav className='nav'>
        <Link href='/'>
            <Image 
            src='/logo-dark.svg' 
            alt='pixel-alchemy-logo' 
            width={300} 
            height={219}
            className='w-32'/>
        </Link>
        <div className='flex '>
            <div className='flex justify-center mt-2'>
                <Link href='/solutions' className='my-link'>Solutions</Link>
                <Link href='/post' className='my-link'>Post</Link>
            </div>
            <div className='flex items-center'>
                <button className='button-header bg-purple' onClick={()=>setShowSignUp(true)}>Create account</button>
                <br/>
                <button className='button-header bg-secondry border border-purple' onClick={()=>setShowSignIn(true)}>Login</button>
            </div>
        </div>
    </nav>
    )
}
