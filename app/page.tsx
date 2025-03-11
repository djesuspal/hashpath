import HomePage from '@/components/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hashpath Consulting | Denis Jesus Palma Abanto',
  description: 'Blockchain security and infrastructure expertise by Denis Jesus Palma, former Solana Lead SRE. Providing security consulting services.',
}

export default function Page() {
  return <HomePage />
}
