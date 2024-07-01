import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename)

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  transpilePackages: ['next-mdx-remote', '@pillar/core', '@pillar/icons', '@pillar/hooks', '@pillar/utils'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules/@pillar-ui/core')],
  },
}

export default nextConfig
