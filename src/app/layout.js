"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Favicon from '/public/favicon.ico'
import Header from '../components/Header'
import SplashScreen from '@/components/SplashScreen'
import {usePathname} from 'next/navigation'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pixel alchemy',
  description: 'Upscale your iamge with super resolution , create art using AI (NST)',
  icons : [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname == '/';
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(()=>{
    if (isLoading) return
  },[]);

  return (
    <html lang="en" className='bg-primary'>
      <body className={inter.className}>
        {isLoading && isHome ?
        (<SplashScreen finshLoading={()=>setIsLoading(false)}/>):
        (
          <>
          <Header />
          {children}
          </>
        )}
        </body>
    </html>
  )
}
