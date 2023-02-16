'use client'
import { Open_Sans, Ubuntu } from '@next/font/google'
import Loader from '@sipilot/components/Loader'
import { usePathname } from 'next/navigation'
import 'primeicons/primeicons.css'
import { Suspense, useEffect } from 'react'
import RootStyleRegistry from './emotion'
import FooterSection from './footer'
import ReactQueryWrapper from './ReactQueryWrapper'
import StyledJsxRegistry from './registry'

const ubuntu = Ubuntu({
  weight: '700',
  variable: '--ubuntu-font',
  subsets: ['latin'],
})

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--open-sans-font',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    document
      .getElementById('scroll-top')
      ?.scrollIntoView({ behavior: 'smooth' })
  }, [pathname])
  return (
    <html lang="en-US">
      <head>
        <title>Sipilot</title>
      </head>
      <body className={`${openSans.variable} ${ubuntu.variable}`}>
        <div id="scroll-top" />
        <StyledJsxRegistry>
          <RootStyleRegistry>
            <Suspense fallback={<Loader />}>
              <ReactQueryWrapper>
                <main>{children}</main>
                <FooterSection />
              </ReactQueryWrapper>
            </Suspense>
          </RootStyleRegistry>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
