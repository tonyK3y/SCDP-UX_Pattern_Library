import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import '@carbon/styles/css/styles.css'
import './globals.scss'
import Navigation from './components/Navigation'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'SCDP UX Pattern Library',
  description: 'Enterprise UX patterns and guidelines for Coupa Supply Chain Design Platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.variable}>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
