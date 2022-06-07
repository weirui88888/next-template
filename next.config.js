/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  dirs: ['pages', 'utils', 'components', 'libs'],
  images: {
    domains: ['m0-pub.bybutter.com']
  }
}

module.exports = nextConfig
