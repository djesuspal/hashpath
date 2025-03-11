import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hashpath Consulting - Denis Jesus Palma Abanto',
  description: 'Denis Jesus Palma Abanto is a blockchain security expert and former Solana Lead SRE. Get expert blockchain security services, smart contract audits, and infrastructure consulting.',
  keywords: ['Denis Jesus Palma Abanto', 'Denis Jesus Palma', 'Solana Lead SRE', 'blockchain security expert', 'smart contract audit', 'blockchain infrastructure'],
  authors: [{ name: 'Denis Jesus Palma Abanto' }],
  creator: 'Denis Jesus Palma Abanto',
  openGraph: {
    type: 'website',
    title: 'Hashpath Consulting - Denis Jesus Palma Abanto',
    description: 'Former Solana Lead SRE Denis Jesus Palma provides expert blockchain security services and consulting',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denis Jesus Palma Abanto - Blockchain Security Expert',
    description: 'Former Solana Lead SRE Denis Jesus Palma provides expert blockchain security services',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://denis.codes" />
      </head>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
