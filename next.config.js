/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: false, // Enable image optimization
  },
  reactStrictMode: true, // Enable React strict mode for better development
  swcMinify: true, // Use SWC for minification
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.logs in production
  },
  // Enable static exports if you're not using any server-side features
  // output: 'export',
  
  // Enable TypeScript type checking during build
  typescript: {
    // Dangerously allow production builds to successfully complete even if your project has type errors
    // Set to true if you want to ensure type safety
    ignoreBuildErrors: false,
  },

  // Configure headers for better security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },

  // Enable webpack configuration if needed
  webpack: (config, { isServer }) => {
    // Add custom webpack configuration here if needed
    return config;
  }
}

module.exports = nextConfig;
