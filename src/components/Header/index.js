import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header(){
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
                <Link href='#' className='my-link'>Solutions</Link>
                <Link href='#' className='my-link'>Post</Link>
            </div>
            <div className='flex items-center'>
                <button className='button-header bg-purple' >Create account</button>
                <br/>
                <button className='button-header bg-secondry border border-purple' >Login</button>
            </div>
        </div>
    </nav>
    )
}
