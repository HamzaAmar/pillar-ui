const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@pillar/core', '@pillar/icons', '@pillar/hooks'],
}

module.exports = withContentlayer(nextConfig)
