"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Favicon from '/public/favicon.ico'
import Header from '../components/Header'
import SignInModal from '@/components/SignInModel'
import SignUpModal from '@/components/SignUpModel'
import SplashScreen from '@/components/SplashScreen'
import {usePathname} from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogedInProvider } from '@/contexts/LogedInContext'
import { UserIdProvider } from '@/contexts/UserIdContext'
import { ShowSignInProvider } from '@/contexts/ShowSignInContext'
import DropDown from '@/components/DropDown'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pixel alchemy',
  description: 'Upscale your iamge with super resolution , create art using AI (NST)',
  icons : [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({ children }) {
  const [showSignUp,setShowSignUp] =useState(false);
  const [showMenu,setShowMenu] = useState(false);
  const pathname = usePathname();
  const isHome = pathname == '/';
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(()=>{
    if (isLoading) return
  },[]);

  return (
    <html lang="en" className='bg-primary'>
      <body className={inter.className}>
        <ShowSignInProvider>
        <UserIdProvider>
        <LogedInProvider>
          {isLoading && isHome ?
          (<SplashScreen finshLoading={()=>setIsLoading(false)}/>):
          (
            <>
            <Header setShowSignUp={setShowSignUp} showMenu={showMenu} setShowMenu={setShowMenu}/>
            {children}
            <SignUpModal 
            visible={showSignUp} setShowModel={setShowSignUp}/>
            <SignInModal />
            <DropDown showMenu={showMenu} setShowMenu={setShowMenu}/>
            </>
          )}
        </LogedInProvider>
        </UserIdProvider>
        </ShowSignInProvider>
      </body>
    </html>
  )
}
