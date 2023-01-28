import { Open_Sans, Ubuntu } from '@next/font/google'
import RootStyleRegistry from './emotion'
import Navbar from './navbar'

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
        <RootStyleRegistry>
          <Navbar />
          <main>{children}</main>
        </RootStyleRegistry>
      </body>
    </html>
  )
}
