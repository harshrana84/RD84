/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'localhost',
      'i.postimg.cc',
      'img.freepik.com',
      // Add any other domains you need explicitly
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // This wildcard will match all subdomains and domains
      },
      {
        protocol: 'http',
        hostname: '*', // This wildcard will match all subdomains and domains
      },
    ],
  },
}

module.exports = nextConfig
