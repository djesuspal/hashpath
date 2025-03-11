'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Only show scroll navigation on the homepage
  const isHomePage = pathname === '/'

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="w-full py-4 px-6 flex items-center justify-between bg-black fixed top-0 left-0 right-0 z-50">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.png"
            alt="Denis Jesus Palma Abanto - Hashpath Consulting Logo" 
            width={200} 
            height={50} 
            priority
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          {isHomePage ? (
            <>
              <a onClick={() => scrollToSection('home')} className="hover:text-gray-300 cursor-pointer">Home</a>
              <a onClick={() => scrollToSection('services')} className="hover:text-gray-300 cursor-pointer">Services</a>
              <Link href="/denis-jesus-palma-abanto" className="hover:text-gray-300">About</Link>
              <Link href="/blog" className="hover:text-gray-300">Blog</Link>
              <a onClick={() => scrollToSection('contact')} className="hover:text-gray-300 cursor-pointer">Contact</a>
            </>
          ) : (
            <>
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/#services" className="hover:text-gray-300">Services</Link>
              <Link href="/denis-jesus-palma-abanto" className={`hover:text-gray-300 ${pathname === '/denis-jesus-palma-abanto' ? 'text-orange-500' : ''}`}>About</Link>
              <Link href="/blog" className={`hover:text-gray-300 ${pathname.includes('/blog') ? 'text-orange-500' : ''}`}>Blog</Link>
              <Link href="/#contact" className="hover:text-gray-300">Contact</Link>
            </>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="w-full py-6 px-6 bg-gray-900">
        <div className="flex justify-center items-center">
          <p>&copy; 2024 Denis Jesus Palma Abanto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
