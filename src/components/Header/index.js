import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header(){
    return(
    <div className='bg-red'>
        <Link href='/'>
            <Image 
            src='/logo-dark.svg' 
            alt='pixel-alchemy-logo' 
            width={300} 
            height={219}
            className='w-32'/>
        </Link>
        
        <Link href='#' >Solutions</Link>
        <Link href='#'>Post</Link>
    </div>
    )
}
