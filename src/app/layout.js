import './globals.css'
import { Inter } from 'next/font/google'
import Favicon from '/public/favicon.ico'
import { LogedInProvider } from '@/contexts/LogedInContext'
import { UserIdProvider } from '@/contexts/UserIdContext'
import { ShowSignInProvider } from '@/contexts/ShowSignInContext'
import { ShowSignUpProvider } from '@/contexts/ShowSignUpContext'
import { ShowMenuProvider } from '@/contexts/ShowMenuContext'
import { IsLoadingProvider } from '@/contexts/IsLoadingContext'
import Main from '@/components/Main'

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
        <IsLoadingProvider>
        <ShowMenuProvider>
        <ShowSignInProvider>
        <ShowSignUpProvider>
        <UserIdProvider>
        <LogedInProvider>
          <Main >{children}</Main>
        </LogedInProvider>
        </UserIdProvider>
        </ShowSignUpProvider>
        </ShowSignInProvider>
        </ShowMenuProvider>
        </IsLoadingProvider>
      </body>
    </html>
  )
}
