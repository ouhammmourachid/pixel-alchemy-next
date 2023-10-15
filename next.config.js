/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix: 'pixel-alchemy-next',
    basePath: '/pixel-alchemy-next',
    output: 'export',
    images: {
        domains: ['127.0.0.1','102.37.17.20'], // Add the hostname here
      },
}

module.exports = nextConfig
