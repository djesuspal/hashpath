'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <a onClick={() => scrollToSection('home')} className="hover:text-gray-300 cursor-pointer">Home</a>
          <a onClick={() => scrollToSection('about')} className="hover:text-gray-300 cursor-pointer">About</a>
          <a onClick={() => scrollToSection('services')} className="hover:text-gray-300 cursor-pointer">Services</a>
          <a onClick={() => scrollToSection('blog')} className="hover:text-gray-300 cursor-pointer">Blog</a>
          <a onClick={() => scrollToSection('contact')} className="hover:text-gray-300 cursor-pointer">Contact</a>
        </nav>
      </header>

      <main className="flex-grow pt-20">
        <section id="home" className="py-20 px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">HASHPATH CONSULTING</h1>
          <h2 className="text-3xl mb-8">Blockchain Security Experts</h2>
          <p className="max-w-2xl mx-auto mb-10">
            Experts in blockchain security, smart contract auditing, and infrastructure solutions. 
            Leading the industry with comprehensive security services and proven expertise.
          </p>
          <div className="flex justify-center">
            <Button size="lg" onClick={() => scrollToSection('contact')}>
              Contact Now
            </Button>
          </div>
        </section>

        <section id="services" className="py-20 px-6 bg-gradient-to-br from-orange-600 to-orange-800">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Expert Security Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Security Research", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", description: "Cutting-edge blockchain security research" },
              { title: "Security Training", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", description: "Expert-led blockchain security training" },
              { title: "Smart Contract Audits", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", description: "Comprehensive smart contract security audits" },
              { title: "Infrastructure Consulting", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", description: "Blockchain infrastructure expertise from former Solana Lead SRE" }
            ].map((service, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <div className="bg-orange-500 text-white p-3 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Denis Jesus Palma Abanto</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <Image 
              src="/denis-palma.png"
              alt="Denis Jesus Palma Abanto - Blockchain Security Expert" 
              width={300} 
              height={300}
              className="rounded-full w-[300px] h-[300px] object-cover"
            />
            <div className="max-w-2xl">
              <p className="mb-4">
                Denis Jesus Palma Abanto, the first SRE at Solana, built the entire infrastructure from the ground up when it was a 10-person team in early 2021. Through exceptional performance and expertise, he was promoted to Lead SRE, managing a team of five and ensuring Solana's infrastructure security and reliability.
              </p>
              <p>
                With extensive experience in blockchain infrastructure and security, Denis now leads Hashpath Consulting, providing premier security solutions for blockchain projects worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-900">
          <h2 className="text-4xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/testimonial1.jpg",
                quote: "Haspath expertise in blockchain security is unmatched. His work has been invaluable for our project's security.",
                name: "Mark Nelson",
                title: "CEO of Trebutin Inc."
              },
              {
                image: "/testimonial2.jpg",
                quote: "Working with Denis was a game-changer for our infrastructure security. His Solana experience brings unique insights.",
                name: "Jane Smith",
                title: "CTO of Halgreen Solutions"
              },
              {
                image: "/testimonial3.jpg",
                quote: "Denis's smart contract auditing expertise helped us identify and fix critical vulnerabilities before launch.",
                name: "Nick Vines",
                title: "Founder of DeFi Mamba"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <Image 
                  src={testimonial.image} 
                  alt={`${testimonial.name} testimonial for Denis Jesus Palma Abanto`} 
                  width={80} 
                  height={80} 
                  className="rounded-full w-[80px] h-[80px] object-cover"
                />
                <p className="mb-4">{testimonial.quote}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="blog" className="py-20 px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Security Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Blockchain Security Best Practices",
                image: "/blog1.jpg",
                description: "Expert insights on blockchain security from former Lead SRE at Solana Labs..."
              },
              {
                title: "Smart Contract Security Guide",
                image: "/blog2.jpg",
                description: "Comprehensive guide to smart contract security auditing..."
              },
              {
                title: "Infrastructure Security in Web3",
                image: "/blog3.jpg",
                description: "Learn about blockchain infrastructure security from former Solana Lead SRE..."
              },
              {
                title: "DeFi Security Considerations",
                image: "/blog4.jpg",
                description: "Essential security considerations for DeFi projects..."
              }
            ].map((post, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.description}</p>
                  <Link href="#" className="text-orange-500 hover:underline">Read more</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-gray-900">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <Input id="name" placeholder="Your Name" className="mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <Textarea id="message" placeholder="Your message" className="mt-1" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 px-6 bg-gray-900">
        <div className="flex justify-center items-center">
          <p>&copy; 2024 Denis Jesus Palma Abanto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
