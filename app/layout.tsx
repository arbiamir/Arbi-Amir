import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'M. Arbi Amir | Unity Game Developer',
  description: 'Experienced Unity Game Developer specializing in mobile games, gameplay programming, AI systems, and ad monetization.',
  keywords: ['Unity Game Developer', 'C# Programmer', 'Mobile Game Development', 'Game AI', 'Unity3D'],
  authors: [{ name: 'M. Arbi Amir' }],
  generator: 'v0.app',
  openGraph: {
    title: 'M. Arbi Amir | Unity Game Developer',
    description: 'Portfolio of M. Arbi Amir, showing expertise in Unity Engine and immersive mobile games.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
