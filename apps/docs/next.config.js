const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@pillar/core', '@pillar/icons', '@pillar/hooks'],
}

module.exports = withContentlayer(nextConfig)
