import { ReactNode } from 'react'
import { Nunito_Sans } from 'next/font/google'
import '@carbon/styles/css/styles.css'
import '../globals.scss'
import AdminHeader from './components/AdminHeader'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-nunito-sans',
})

export const metadata = {
  title: 'Admin - SCDP Pattern Library',
  description: 'Content management for SCDP UX Pattern Library',
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunitoSans.variable}>
        <AdminHeader />
        <main style={{ marginTop: '3rem', padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
