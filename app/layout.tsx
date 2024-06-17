import Navbar from "./components/Navbar"
import { Providers } from "./components/Providers"
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Footer from "./components/Footer"

const nunito = Nunito({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Limkaleb blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="../favicon.svg" sizes="any" />
      </head>
      <body className={` ${nunito.className} bg-white text-black selection:bg-gray-300 dark:bg-black dark:selection:bg-gray-500 dark:text-gray-100`}>
        <Providers>
          <Navbar />
          <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
