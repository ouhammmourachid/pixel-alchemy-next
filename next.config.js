/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        domains: ['127.0.0.1','102.37.17.20'], // Add the hostname here
      },
}

module.exports = nextConfig
