const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@pillar/core', '@pillar/icons', '@pillar/hooks', '@pillar/utils'],
}

module.exports = withContentlayer(nextConfig)
