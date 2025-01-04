// import fs from 'fs'
// import { dirname, join, extname } from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)
// const contentDIR = join(__dirname, '..', 'content')

// function getMDXFiles(dir) {
//   return fs.readdirSync(dir).filter((file) => extname(file) === '.mdx')
// }

// function readMDXFile(filePath, fileName) {
//   let fileContent = fs.readFileSync(filePath, 'utf-8')
//   const [filename] = fileName.split('.')
//   return parseFrontmatter(fileContent, filename)
// }

// async function getURLS() {
//   const contentTypes = ['components', 'hooks', 'utils', 'features', 'themes']
//   const records = []

//   for (const type of contentTypes) {
//     const folderPath = join(contentDIR, type)
//     const files = getMDXFiles(folderPath)

//     for (const file of files) {
//       const filePath = join(folderPath, file)
//       const [filename] = fileName.split('.')
//       records.push(record)
//     }
//   }
// }

// // getURLS()
// console.log(getURLS())

const URLS = [
  'http://pillar-ui.com',
  'http://pillar-ui.com/docs/components/accordion',
  'http://pillar-ui.com/docs/components/alert',
  'http://pillar-ui.com/docs/components/avatar',
  'http://pillar-ui.com/docs/components/badge',
  'http://pillar-ui.com/docs/components/blockquote',
  'http://pillar-ui.com/docs/components/breadcrumb',
  'http://pillar-ui.com/docs/components/button',
  'http://pillar-ui.com/docs/components/checkbox',
  'http://pillar-ui.com/docs/components/chips',
  'http://pillar-ui.com/docs/components/code',
  'http://pillar-ui.com/docs/components/flex',
  'http://pillar-ui.com/docs/components/grid',
  'http://pillar-ui.com/docs/components/heading',
  'http://pillar-ui.com/docs/components/iconButton',
  'http://pillar-ui.com/docs/components/input-file',
  'http://pillar-ui.com/docs/components/input-number',
  'http://pillar-ui.com/docs/components/input-password',
  'http://pillar-ui.com/docs/components/input-pin',
  'http://pillar-ui.com/docs/components/input-search',
  'http://pillar-ui.com/docs/components/input',
  'http://pillar-ui.com/docs/components/kbd',
  'http://pillar-ui.com/docs/components/Link',
  'http://pillar-ui.com/docs/components/pagination',
  'http://pillar-ui.com/docs/components/paper',
  'http://pillar-ui.com/docs/components/progress-circle',
  'http://pillar-ui.com/docs/components/progress',
  'http://pillar-ui.com/docs/components/radio',
  'http://pillar-ui.com/docs/components/rating',
  'http://pillar-ui.com/docs/components/select',
  'http://pillar-ui.com/docs/components/separator',
  'http://pillar-ui.com/docs/components/skeleton',
  'http://pillar-ui.com/docs/components/spinner',
  'http://pillar-ui.com/docs/components/stepper',
  'http://pillar-ui.com/docs/components/switch',
  'http://pillar-ui.com/docs/components/table',
  'http://pillar-ui.com/docs/components/text',
  'http://pillar-ui.com/docs/components/textarea',
  'http://pillar-ui.com/docs/components/timeline',
  'http://pillar-ui.com/docs/components/tooltip',
  'http://pillar-ui.com/docs/features/accessibility',
  'http://pillar-ui.com/docs/features/css-classNames',
  'http://pillar-ui.com/docs/features/dark-mode',
  'http://pillar-ui.com/docs/features/dx',
  'http://pillar-ui.com/docs/features/rtl',
  'http://pillar-ui.com/docs/themes/breakpoint',
  'http://pillar-ui.com/docs/themes/color',
  'http://pillar-ui.com/docs/themes/font',
  'http://pillar-ui.com/docs/themes/shadow',
  'http://pillar-ui.com/docs/themes/space',
  'http://pillar-ui.com/docs/utils/array',
  'http://pillar-ui.com/docs/utils/date',
  'http://pillar-ui.com/docs/utils/is',
  'http://pillar-ui.com/docs/utils/number',
  'http://pillar-ui.com/docs/utils/string',
  'http://pillar-ui.com/docs/hooks/use-array',
  'http://pillar-ui.com/docs/hooks/use-boolean-state',
  'http://pillar-ui.com/docs/hooks/use-checkbox-group',
  'http://pillar-ui.com/docs/hooks/use-click-outside',
  'http://pillar-ui.com/docs/hooks/use-controllable-state',
  'http://pillar-ui.com/docs/hooks/use-copy-to-clipboard',
  'http://pillar-ui.com/docs/hooks/use-counter',
  'http://pillar-ui.com/docs/hooks/use-dark-mode',
  'http://pillar-ui.com/docs/hooks/use-debounce',
  'http://pillar-ui.com/docs/hooks/use-dimension',
  'http://pillar-ui.com/docs/hooks/use-direction',
  'http://pillar-ui.com/docs/hooks/use-event-listener',
  'http://pillar-ui.com/docs/hooks/use-fullscreen',
  'http://pillar-ui.com/docs/hooks/use-geolocation',
  'http://pillar-ui.com/docs/hooks/use-hover',
  'http://pillar-ui.com/docs/hooks/use-intersection-observer',
  'http://pillar-ui.com/docs/hooks/use-interval',
  'http://pillar-ui.com/docs/hooks/use-isomorphic-layoutEffect',
  'http://pillar-ui.com/docs/hooks/use-local-storage',
  'http://pillar-ui.com/docs/hooks/use-media-query',
  'http://pillar-ui.com/docs/hooks/use-mouse-move',
  'http://pillar-ui.com/docs/hooks/use-pagination',
  'http://pillar-ui.com/docs/hooks/use-persistent-callback',
  'http://pillar-ui.com/docs/hooks/use-prefer-color-scheme',
  'http://pillar-ui.com/docs/hooks/use-reduce-motion',
  'http://pillar-ui.com/docs/hooks/use-stepper',
  'http://pillar-ui.com/docs/hooks/use-timeout',
  'http://pillar-ui.com/docs/getting-started/cra',
  'http://pillar-ui.com/docs/getting-started/next',
  'http://pillar-ui.com/docs/getting-started/remix',
  'http://pillar-ui.com/docs/getting-started/vite',
  'http://pillar-ui.com/docs/tutorials/setting-up-your-e-commerce-project-with-pillar-ui',
]

const checkUrls = async (urls) => {
  try {
    console.log(`Found ${urls.length} URLs to check.`)

    const results = []
    for (const url of urls) {
      try {
        const response = await fetch(url, { method: 'HEAD' })
        if (!response.ok) {
          results.push({ url, status: response.status })
        }
      } catch (error) {
        console.log('Other URL error', error)
      }
    }

    console.log(`Found ${results.length} broken URLs.`)
    console.log(JSON.stringify(results, null, 4))
    console.log(`Found ${results.length} broken URLs.`)
  } catch (error) {
    console.error('Error checking URLs:', error.message)
  }
}

checkUrls(URLS)
