"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Favicon from '/public/favicon.ico'
import Header from '../components/Header'
import SignInModal from '@/components/SignInModel'
import SignUpModal from '@/components/SignUpModel'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pixel alchemy',
  description: 'Upscale your iamge with super resolution , create art using AI (NST)',
  icons : [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({ children }) {
  const [showSignUp,setShowSignUp] =useState(false);
  const [showSignIn,setShowSignIn] =useState(false);
  return (
    <html lang="en" className='bg-primary'>
      <body className={inter.className}>
        <Header 
          setShowSignIn={setShowSignIn}
          setShowSignUp={setShowSignUp}/>
        {children}
        <SignUpModal visible={showSignUp} setShowModel={setShowSignUp}/>
        <SignInModal visible={showSignIn} setShowModel={setShowSignIn} />
      </body>
    </html>
  )
}
