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
      <section id="home" className="py-20 px-6 text-center mt-20">
        <h1 className="text-5xl font-bold mb-6">HASHPATH CONSULTING</h1>
        <h2 className="text-3xl mb-8">Blockchain Security Experts</h2>
        <p className="max-w-2xl mx-auto mb-10">
          Experts in blockchain security, smart contract auditing, and infrastructure solutions. 
          Leading the industry with comprehensive security services and proven expertise.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" onClick={() => scrollToSection('contact')}>
            Contact Now
          </Button>
          <Link href="/denis-jesus-palma-abanto">
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
              About Us
            </Button>
          </Link>
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

      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold mb-12 text-center">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: "/testimonial1.jpg",
              quote: "Hashpath expertise in blockchain security is unmatched. His work has been invaluable for our project's security.",
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
    </div>
  )
}
