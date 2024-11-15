import HomePage from '@/components/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hashpath Consulting | Denis Jesus Palma Abanto',
  description: 'Learn about Denis Jesus Palma\'s expertise in blockchain security and infrastructure. Former Solana Lead SRE providing security consulting services.',
}

export default function Page() {
  return <HomePage />
}
