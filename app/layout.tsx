import RootStyleRegistry from './emotion'
import Navbar from './navbar'
import { Ubuntu, Roboto, Open_Sans } from '@next/font/google'

const ubuntu = Ubuntu({
  weight: '700',
  variable: '--ubuntu-font',
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: '400',
  variable: '--roboto-font',
  subsets: ['latin'],
})

const openSans = Open_Sans({
  weight: '600',
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
      <head />
      <body
        className={`${openSans.variable} ${roboto.variable} ${ubuntu.variable}`}
      >
        <RootStyleRegistry>
          <Navbar />
          <main>{children}</main>
        </RootStyleRegistry>
      </body>
    </html>
  )
}
