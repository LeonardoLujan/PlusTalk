import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Banner from './banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "PlusTalk",
  description: "Language Learning Reimagined",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner/>
        {children}</body>
    </html>
  )
}
