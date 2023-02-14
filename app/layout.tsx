import { Open_Sans, Ubuntu } from '@next/font/google'
import FooterSection from '@sipilot/components/Footer'
import RootStyleRegistry from './emotion'
import 'primeicons/primeicons.css'
import StyledJsxRegistry from './registry'
import { Suspense } from 'react'
import Loading from './loading'

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
  return (
    <html lang="en-US">
      <head>
        <title>Sipilot</title>
      </head>
      <body className={`${openSans.variable} ${ubuntu.variable}`}>
        <StyledJsxRegistry>
          <RootStyleRegistry>
            <Suspense fallback={<Loading />}>
              <main>{children}</main>
              <FooterSection />
            </Suspense>
          </RootStyleRegistry>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
