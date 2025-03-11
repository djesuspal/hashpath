import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Blog | Hashpath Consulting',
  description: 'Latest insights on blockchain security, smart contracts, and infrastructure from Denis Jesus Palma Abanto.',
}

// Mock blog post data
const posts = [
  {
    id: 'blockchain-security-best-practices',
    title: 'Blockchain Security Best Practices',
    image: '/blog1.jpg',
    date: 'February 15, 2024',
    author: 'Denis Jesus Palma Abanto',
    excerpt: 'Expert insights on blockchain security from former Lead SRE at Solana Labs. Learn the essential practices to secure your blockchain projects.'
  },
  {
    id: 'smart-contract-security-guide',
    title: 'Smart Contract Security Guide',
    image: '/blog2.jpg',
    date: 'January 28, 2024',
    author: 'Denis Jesus Palma Abanto',
    excerpt: 'Comprehensive guide to smart contract security auditing. Discover the common vulnerabilities and how to protect your contracts.'
  },
  {
    id: 'infrastructure-security-web3',
    title: 'Infrastructure Security in Web3',
    image: '/blog3.jpg',
    date: 'January 10, 2024',
    author: 'Denis Jesus Palma Abanto',
    excerpt: 'Learn about blockchain infrastructure security from former Solana Lead SRE. Critical approaches to securing your Web3 infrastructure.'
  },
  {
    id: 'defi-security-considerations',
    title: 'DeFi Security Considerations',
    image: '/blog4.jpg',
    date: 'December 15, 2023',
    author: 'Denis Jesus Palma Abanto',
    excerpt: 'Essential security considerations for DeFi projects. Protect your protocol from common attack vectors and vulnerabilities.'
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow pt-20">
        <section className="py-20 px-6">
          <h1 className="text-4xl font-bold mb-12 text-center">Security Insights Blog</h1>
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id} className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-200">
                <div className="relative h-64 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="text-orange-500 font-medium">Read more →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
