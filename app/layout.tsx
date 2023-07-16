import '@/app/resources/styles/globals.css'
import '@/app/resources/styles/components.css'
import '@/app/resources/styles/pages.css'

import type { Metadata } from 'next'
import ThemeWrapper from './resources/components/ui/ThemeWrapper'
import { Inter } from 'next/font/google'
import { imageOptimizer } from 'next/dist/server/image-optimizer'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StudyApp-AI',
  description: 'An application for undiscover the knowledge of humanity thought AI',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Chela+One&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <ThemeWrapper>
        {children}
        </ThemeWrapper>
      </body>
    </html>
  )
}
