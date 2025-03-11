import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    slug: string
  }
}

// Mock blog post database
const blogPosts = {
  'blockchain-security-best-practices': {
    title: 'Blockchain Security Best Practices',
    date: 'February 15, 2024',
    author: 'Denis Jesus Palma Abanto',
    image: '/blog1.jpg',
    content: `
      <h2>Introduction to Blockchain Security</h2>
      <p>
        Blockchain technology has revolutionized various industries by providing decentralized, transparent, and immutable record-keeping systems. However, with this innovation comes new security challenges that must be addressed to protect assets and data.
      </p>
      <p>
        As the former Lead SRE at Solana, I've observed firsthand how security vulnerabilities can impact blockchain networks. In this article, I'll share essential best practices for securing blockchain implementations, drawing from my experience building and securing Solana's infrastructure.
      </p>
      
      <h2>Key Security Considerations</h2>
      <p>
        When implementing blockchain technology, consider these critical security aspects:
      </p>
      <ul>
        <li><strong>Private Key Management:</strong> Implement robust key management systems with strong encryption and multi-signature solutions.</li>
        <li><strong>Smart Contract Audits:</strong> Always conduct comprehensive code audits before deployment to identify vulnerabilities.</li>
        <li><strong>Infrastructure Security:</strong> Implement defense-in-depth strategies for all infrastructure components.</li>
        <li><strong>Network Monitoring:</strong> Establish real-time monitoring systems to detect anomalous activities.</li>
        <li><strong>Regular Updates:</strong> Maintain up-to-date software across all nodes and components.</li>
      </ul>
      
      <h2>Smart Contract Vulnerabilities</h2>
      <p>
        Smart contracts are particularly vulnerable to security breaches due to their immutable nature and direct control over assets. Common vulnerabilities include:
      </p>
      <ul>
        <li>Reentrancy attacks</li>
        <li>Integer overflow/underflow</li>
        <li>Front-running</li>
        <li>Access control issues</li>
        <li>Gas limitations</li>
      </ul>
      <p>
        To mitigate these risks, implement formal verification techniques, use established libraries, and follow the principle of least privilege in contract design.
      </p>
      
      <h2>Conclusion</h2>
      <p>
        Security is not a one-time implementation but an ongoing process. By following these best practices and staying vigilant about emerging threats, blockchain projects can significantly reduce their risk exposure and build more resilient systems.
      </p>
      <p>
        At Hashpath Consulting, we provide comprehensive security audits and infrastructure assessments to help blockchain projects identify and address potential vulnerabilities before they can be exploited.
      </p>
    `
  },
  'smart-contract-security-guide': {
    title: 'Smart Contract Security Guide',
    date: 'January 28, 2024',
    author: 'Denis Jesus Palma Abanto',
    image: '/blog2.jpg',
    content: `
      <h2>Understanding Smart Contract Security</h2>
      <p>
        Smart contracts represent one of the most powerful innovations in blockchain technology, enabling trustless execution of agreements without intermediaries. However, their immutable nature means that security vulnerabilities can have catastrophic consequences.
      </p>
      <p>
        This guide provides a comprehensive overview of smart contract security best practices, drawing from my experience auditing contracts across multiple blockchain platforms.
      </p>
      
      <h2>Common Vulnerabilities</h2>
      <p>
        When auditing smart contracts, we commonly encounter these vulnerabilities:
      </p>
      <ul>
        <li><strong>Reentrancy:</strong> External calls allowing attackers to re-enter functions before state updates.</li>
        <li><strong>Integer Overflow/Underflow:</strong> Arithmetic operations exceeding variable type limits.</li>
        <li><strong>Access Control Flaws:</strong> Improperly secured functions allowing unauthorized actions.</li>
        <li><strong>Front-Running:</strong> Transaction order manipulation for profit.</li>
        <li><strong>Logic Errors:</strong> Flawed business logic leading to unexpected behaviors.</li>
      </ul>
      
      <h2>Security by Design</h2>
      <p>
        Effective smart contract security begins at the design phase. Implement these principles:
      </p>
      <ul>
        <li>Simplicity: Complex contracts increase risk surface area.</li>
        <li>Input Validation: Never trust external inputs.</li>
        <li>Gas Optimization: Consider gas limits in all operations.</li>
        <li>Upgradability Patterns: Plan for future fixes when possible.</li>
        <li>Fail-Safe Mechanisms: Implement circuit breakers for emergencies.</li>
      </ul>
      
      <h2>Testing Methodologies</h2>
      <p>
        Comprehensive testing is essential for contract security:
      </p>
      <ul>
        <li><strong>Unit Testing:</strong> Test individual functions thoroughly.</li>
        <li><strong>Integration Testing:</strong> Test interactions between contracts.</li>
        <li><strong>Formal Verification:</strong> Mathematically prove contract properties.</li>
        <li><strong>Fuzzing:</strong> Generate random inputs to discover edge cases.</li>
        <li><strong>Symbolic Execution:</strong> Analyze all possible execution paths.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>
        Security is a continuous process requiring vigilance throughout the smart contract lifecycle. By implementing these best practices and working with experienced auditors, developers can significantly reduce the risk of exploits and build more trustworthy decentralized applications.
      </p>
    `
  },
  'infrastructure-security-web3': {
    title: 'Infrastructure Security in Web3',
    date: 'January 10, 2024',
    author: 'Denis Jesus Palma Abanto',
    image: '/blog3.jpg',
    content: `
      <h2>The Foundation of Web3 Security</h2>
      <p>
        While much attention in the Web3 space focuses on smart contract security, the underlying infrastructure often receives less scrutiny. As Solana's first SRE and later Lead SRE, I've learned that robust infrastructure is the foundation upon which all blockchain security rests.
      </p>
      
      <h2>Critical Infrastructure Components</h2>
      <p>
        A comprehensive Web3 infrastructure security strategy must address:
      </p>
      <ul>
        <li><strong>Node Security:</strong> Validator and RPC nodes represent critical access points.</li>
        <li><strong>Network Architecture:</strong> Properly segmented networks with appropriate access controls.</li>
        <li><strong>Key Management Systems:</strong> Secure storage and rotation of cryptographic keys.</li>
        <li><strong>API Security:</strong> Protected endpoints with rate limiting and authentication.</li>
        <li><strong>Monitoring and Alerting:</strong> Real-time visibility into system performance and security events.</li>
      </ul>
      
      <h2>Scaling Security</h2>
      <p>
        At Solana, one of our biggest challenges was scaling security alongside rapid growth. Key lessons include:
      </p>
      <ul>
        <li><strong>Automation:</strong> Security processes must be automated to scale effectively.</li>
        <li><strong>Infrastructure as Code:</strong> Version-controlled infrastructure enables security reviews.</li>
        <li><strong>Immutable Infrastructure:</strong> Replacing rather than updating components reduces drift.</li>
        <li><strong>Defense in Depth:</strong> Multiple security layers provide redundancy.</li>
        <li><strong>Chaos Engineering:</strong> Regular testing of failure scenarios builds resilience.</li>
      </ul>
      
      <h2>Incident Response</h2>
      <p>
        Even with robust preventative measures, security incidents can occur. An effective incident response plan includes:
      </p>
      <ul>
        <li>Clear roles and responsibilities</li>
        <li>Communication protocols</li>
        <li>Forensic procedures</li>
        <li>Recovery processes</li>
        <li>Post-incident analysis</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>
        Web3 infrastructure security requires a holistic approach that addresses technical, operational, and human factors. By building secure foundations, blockchain projects can focus on innovation with confidence that their underlying systems are protected.
      </p>
    `
  },
  'defi-security-considerations': {
    title: 'DeFi Security Considerations',
    date: 'December 15, 2023',
    author: 'Denis Jesus Palma Abanto',
    image: '/blog4.jpg',
    content: `
      <h2>The Unique Security Challenges of DeFi</h2>
      <p>
        Decentralized Finance (DeFi) has transformed financial services by enabling permissionless lending, borrowing, and trading. However, the composability and financial nature of DeFi create unique security challenges that require specialized approaches.
      </p>
      
      <h2>Economic Security</h2>
      <p>
        Unlike traditional applications, DeFi protocols must consider economic security models:
      </p>
      <ul>
        <li><strong>Game Theory:</strong> Understanding incentives and potential exploits.</li>
        <li><strong>Tokenomics:</strong> Designing sustainable economic models.</li>
        <li><strong>Oracle Security:</strong> Ensuring reliable price feeds and external data.</li>
        <li><strong>Liquidity Risks:</strong> Managing volatility and market manipulation.</li>
        <li><strong>Flash Loan Vectors:</strong> Protecting against capital-intensive attacks.</li>
      </ul>
      
      <h2>Protocol-Specific Vulnerabilities</h2>
      <p>
        Different DeFi components face unique security challenges:
      </p>
      <ul>
        <li><strong>Lending Protocols:</strong> Collateralization ratios and liquidation mechanisms.</li>
        <li><strong>DEXes:</strong> Price manipulation and MEV protection.</li>
        <li><strong>Yield Aggregators:</strong> Composability risks and third-party dependencies.</li>
        <li><strong>Stablecoins:</strong> Peg maintenance and reserve security.</li>
        <li><strong>Insurance Protocols:</strong> Risk assessment and claims processing security.</li>
      </ul>
      
      <h2>Security Best Practices</h2>
      <p>
        DeFi projects should implement these essential security measures:
      </p>
      <ul>
        <li><strong>Formal Verification:</strong> Mathematical proof of protocol properties.</li>
        <li><strong>Economic Simulations:</strong> Stress-testing under various market conditions.</li>
        <li><strong>Code Audits:</strong> Multiple independent reviews by specialized firms.</li>
        <li><strong>Gradual Rollouts:</strong> Limiting initial risk exposure through caps.</li>
        <li><strong>Bug Bounties:</strong> Incentivizing white-hat security research.</li>
      </ul>
      
      <h2>Governance Security</h2>
      <p>
        Decentralized governance introduces additional security considerations:
      </p>
      <ul>
        <li>Timelocks for critical parameter changes</li>
        <li>Multisig requirements for emergency actions</li>
        <li>Balanced voting power distribution</li>
        <li>Transparent proposal processes</li>
        <li>Protection against governance attacks</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>
        DeFi security requires a multidisciplinary approach combining technical, economic, and governance considerations. By implementing robust security practices across all these domains, protocols can better protect user funds and build sustainable financial infrastructure.
      </p>
    `
  }
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Post Not Found | Hashpath Consulting',
    }
  }
  
  return {
    title: `${post.title} | Hashpath Consulting Blog`,
    description: `Read ${post.title} by Denis Jesus Palma Abanto, blockchain security expert and former Solana Lead SRE.`,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow pt-20">
        <article className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center mb-8 text-orange-500 hover:text-orange-400 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-2"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Back to all posts
            </Link>
            
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center space-x-4 mb-8 text-gray-400">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            
            <div className="relative w-full h-96 mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
    </div>
  )
}
