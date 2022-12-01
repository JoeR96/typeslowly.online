/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['http://d7dhx22ybeiu9.cloudfront.net', 'https://d7dhx22ybeiu9.cloudfront.net', 'd7dhx22ybeiu9.cloudfront.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd7dhx22ybeiu9.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'd7dhx22ybeiu9.cloudfront.net',
        port: '',
        pathname: '/**',
      }
    ],
  }
}

module.exports = nextConfig
