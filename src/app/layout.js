import './globals.css'
import { Inter } from 'next/font/google'
import Favicon from '/public/favicon.ico'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pixel alchemy',
  description: 'Upscale your iamge with super resolution , create art using AI (NST)',
  icons : [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-primary'>
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
