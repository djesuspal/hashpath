import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Denis Jesus Palma Abanto | Hashpath Consulting',
  description: 'Learn about Denis Jesus Palma Abanto, blockchain security expert and former Solana Lead SRE. Providing expert security consulting services.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow pt-20">
        <section className="py-20 px-6">
          <h1 className="text-4xl font-bold mb-12 text-center">About Denis Jesus Palma Abanto</h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
            <Image 
              src="/denis-palma.png"
              alt="Denis Jesus Palma Abanto - Blockchain Security Expert" 
              width={300} 
              height={300}
              className="rounded-full w-[300px] h-[300px] object-cover"
            />
            <div className="max-w-2xl">
              <p className="mb-6 text-lg">
                Denis Jesus Palma Abanto, the first SRE at Solana, built the entire infrastructure from the ground up when it was a 10-person team in early 2021. Through exceptional performance and expertise, he was promoted to Lead SRE, managing a team of five and ensuring Solana's infrastructure security and reliability.
              </p>
              <p className="mb-6 text-lg">
                With extensive experience in blockchain infrastructure and security, Denis now leads Hashpath Consulting, providing premier security solutions for blockchain projects worldwide.
              </p>
              <p className="mb-6 text-lg">
                His expertise spans across multiple areas of blockchain security, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Smart contract auditing and vulnerability detection</li>
                <li>Blockchain infrastructure security optimization</li>
                <li>Security assessment and penetration testing</li>
                <li>DeFi protocol security analysis</li>
                <li>Security training and best practices implementation</li>
              </ul>
              <p className="text-lg">
                Denis is committed to improving the blockchain ecosystem's security posture through his consulting work and educational initiatives, helping projects build robust security foundations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
